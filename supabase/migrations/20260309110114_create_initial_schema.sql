-- Men of Issachar - Initial Database Schema
--
-- This migration sets up the complete database schema for the
-- Men of Issachar spiritual accountability platform.
--
-- Tables Created:
-- 1. profiles - Extended user profile information
-- 2. books - Books and Bible readings tracked by the group
-- 3. readings - Daily reading assignments
-- 4. reading_completions - Track member completion of readings
-- 5. reflections - Voice note reflections on readings
-- 6. accountability - Track defaults and fines
-- 7. prayer_meetings - Schedule of prayer nights
-- 8. prayer_attendance - Track prayer attendance
-- 9. discussions - Discussion board threads
-- 10. discussion_replies - Replies to discussions
--
-- Security: RLS enabled on all tables with appropriate policies

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  joined_at timestamptz DEFAULT now(),
  total_fines integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view all profiles"
  ON profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Members can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Books table
CREATE TABLE IF NOT EXISTS books (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  author text,
  total_pages integer,
  pages_per_day integer DEFAULT 5,
  type text NOT NULL CHECK (type IN ('bible', 'book')),
  is_current boolean DEFAULT false,
  start_date date,
  end_date date,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE books ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view all books"
  ON books FOR SELECT
  TO authenticated
  USING (true);

-- Readings table
CREATE TABLE IF NOT EXISTS readings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id uuid REFERENCES books(id) ON DELETE CASCADE,
  reading_date date NOT NULL,
  chapter_number integer,
  page_start integer,
  page_end integer,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE readings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view all readings"
  ON readings FOR SELECT
  TO authenticated
  USING (true);

-- Reading completions table
CREATE TABLE IF NOT EXISTS reading_completions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reading_id uuid REFERENCES readings(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  completed_at timestamptz DEFAULT now(),
  has_reflection boolean DEFAULT false,
  UNIQUE(reading_id, user_id)
);

ALTER TABLE reading_completions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view all completions"
  ON reading_completions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Members can insert own completions"
  ON reading_completions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Members can update own completions"
  ON reading_completions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Reflections table
CREATE TABLE IF NOT EXISTS reflections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reading_id uuid REFERENCES readings(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  audio_url text NOT NULL,
  duration_seconds integer,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reflections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view all reflections"
  ON reflections FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Members can insert own reflections"
  ON reflections FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Accountability table
CREATE TABLE IF NOT EXISTS accountability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  reading_id uuid REFERENCES readings(id) ON DELETE CASCADE,
  fine_amount integer DEFAULT 100,
  is_paid boolean DEFAULT false,
  paid_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE accountability ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view all accountability records"
  ON accountability FOR SELECT
  TO authenticated
  USING (true);

-- Prayer meetings table
CREATE TABLE IF NOT EXISTS prayer_meetings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  meeting_date timestamptz NOT NULL,
  type text NOT NULL CHECK (type IN ('friday', 'sunday')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE prayer_meetings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view all prayer meetings"
  ON prayer_meetings FOR SELECT
  TO authenticated
  USING (true);

-- Prayer attendance table
CREATE TABLE IF NOT EXISTS prayer_attendance (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  meeting_id uuid REFERENCES prayer_meetings(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  marked_at timestamptz DEFAULT now(),
  UNIQUE(meeting_id, user_id)
);

ALTER TABLE prayer_attendance ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view all attendance"
  ON prayer_attendance FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Members can mark own attendance"
  ON prayer_attendance FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Discussions table
CREATE TABLE IF NOT EXISTS discussions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  reading_id uuid REFERENCES readings(id) ON DELETE SET NULL,
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE discussions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view all discussions"
  ON discussions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Members can create discussions"
  ON discussions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Discussion replies table
CREATE TABLE IF NOT EXISTS discussion_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  discussion_id uuid REFERENCES discussions(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE discussion_replies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view all replies"
  ON discussion_replies FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Members can create replies"
  ON discussion_replies FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_readings_date ON readings(reading_date DESC);
CREATE INDEX IF NOT EXISTS idx_books_current ON books(is_current);
CREATE INDEX IF NOT EXISTS idx_completions_user ON reading_completions(user_id);
CREATE INDEX IF NOT EXISTS idx_discussions_date ON discussions(created_at DESC);

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (new.id, COALESCE(new.raw_user_meta_data->>'full_name', 'New Member'));
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();