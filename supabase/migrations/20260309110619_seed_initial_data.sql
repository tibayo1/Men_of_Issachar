-- Seed Initial Data for Men of Issachar
--
-- This migration adds initial books and readings to populate the platform.
--
-- Books Added:
-- 1. Proverbs (Bible, read twice)
-- 2. The Purpose Driven Life
-- 3. Making It Big by Otunba Femi Otedola
-- 4. Empire State of Mind
--
-- Sets up initial readings for current book

-- Insert historical books the group has read
INSERT INTO books (id, title, author, total_pages, pages_per_day, type, is_current, start_date, end_date)
VALUES
  (gen_random_uuid(), 'Proverbs', 'King Solomon', 31, 1, 'bible', false, '2024-01-01', '2024-01-31'),
  (gen_random_uuid(), 'Proverbs', 'King Solomon', 31, 1, 'bible', false, '2024-06-01', '2024-06-30'),
  (gen_random_uuid(), 'The Purpose Driven Life', 'Rick Warren', 336, 5, 'book', false, '2024-02-01', '2024-03-15'),
  (gen_random_uuid(), 'Making It Big', 'Otunba Femi Otedola', 250, 5, 'book', false, '2024-04-01', '2024-05-20'),
  (gen_random_uuid(), 'Empire State of Mind', 'Zack O''Malley Greenburg', 272, 5, 'book', false, '2024-07-01', '2024-08-25')
ON CONFLICT DO NOTHING;

-- Set up current reading (Proverbs)
DO $$
DECLARE
  v_book_id uuid;
  v_date date;
  v_chapter int;
BEGIN
  -- Create a new current book (Proverbs, third time)
  INSERT INTO books (title, author, total_pages, pages_per_day, type, is_current, start_date)
  VALUES ('Proverbs', 'King Solomon', 31, 1, 'bible', true, CURRENT_DATE - INTERVAL '7 days')
  RETURNING id INTO v_book_id;

  -- Create readings for the past week and next week
  FOR v_chapter IN 1..14 LOOP
    v_date := (CURRENT_DATE - INTERVAL '7 days' + (v_chapter - 1) * INTERVAL '1 day')::date;
    
    INSERT INTO readings (book_id, reading_date, chapter_number)
    VALUES (v_book_id, v_date, v_chapter);
  END LOOP;
END $$;

-- Create upcoming prayer meetings
DO $$
DECLARE
  v_next_friday timestamptz;
  v_next_sunday timestamptz;
BEGIN
  -- Calculate next Friday at 8 PM
  v_next_friday := date_trunc('week', CURRENT_DATE) + INTERVAL '4 days' + INTERVAL '20 hours';
  IF v_next_friday < CURRENT_TIMESTAMP THEN
    v_next_friday := v_next_friday + INTERVAL '7 days';
  END IF;

  -- Calculate next Sunday at 8 PM
  v_next_sunday := date_trunc('week', CURRENT_DATE) + INTERVAL '6 days' + INTERVAL '20 hours';
  IF v_next_sunday < CURRENT_TIMESTAMP THEN
    v_next_sunday := v_next_sunday + INTERVAL '7 days';
  END IF;

  -- Insert upcoming prayer meetings
  INSERT INTO prayer_meetings (meeting_date, type)
  VALUES
    (v_next_friday, 'friday'),
    (v_next_sunday, 'sunday'),
    (v_next_friday + INTERVAL '7 days', 'friday'),
    (v_next_sunday + INTERVAL '7 days', 'sunday')
  ON CONFLICT DO NOTHING;
END $$;