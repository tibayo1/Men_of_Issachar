import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  full_name: string;
  joined_at: string;
  total_fines: number;
  created_at: string;
};

export type Book = {
  id: string;
  title: string;
  author: string | null;
  total_pages: number | null;
  pages_per_day: number;
  type: 'bible' | 'book';
  is_current: boolean;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
};

export type Reading = {
  id: string;
  book_id: string;
  reading_date: string;
  chapter_number: number | null;
  page_start: number | null;
  page_end: number | null;
  created_at: string;
};

export type ReadingCompletion = {
  id: string;
  reading_id: string;
  user_id: string;
  completed_at: string;
  has_reflection: boolean;
};

export type Reflection = {
  id: string;
  reading_id: string;
  user_id: string;
  audio_url: string;
  duration_seconds: number | null;
  created_at: string;
};

export type Accountability = {
  id: string;
  user_id: string;
  reading_id: string;
  fine_amount: number;
  is_paid: boolean;
  paid_at: string | null;
  created_at: string;
};

export type PrayerMeeting = {
  id: string;
  meeting_date: string;
  type: 'friday' | 'sunday';
  created_at: string;
};

export type PrayerAttendance = {
  id: string;
  meeting_id: string;
  user_id: string;
  marked_at: string;
};

export type Discussion = {
  id: string;
  user_id: string;
  reading_id: string | null;
  title: string;
  content: string;
  created_at: string;
};

export type DiscussionReply = {
  id: string;
  discussion_id: string;
  user_id: string;
  content: string;
  created_at: string;
};
