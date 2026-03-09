import { useEffect, useState } from 'react';
import { BookOpen, Calendar, DollarSign, Users } from 'lucide-react';
import { supabase, Book, Reading } from '../lib/supabase';

export default function HomePage() {
  const [currentBook, setCurrentBook] = useState<Book | null>(null);
  const [todayReading, setTodayReading] = useState<Reading | null>(null);
  const [charityPool, setCharityPool] = useState(0);

  useEffect(() => {
    loadCurrentReading();
    loadCharityPool();
  }, []);

  async function loadCurrentReading() {
    try {
      const { data: book } = await supabase
        .from('books')
        .select('*')
        .eq('is_current', true)
        .maybeSingle();

      if (book) {
        setCurrentBook(book);

        const today = new Date().toISOString().split('T')[0];
        const { data: reading } = await supabase
          .from('readings')
          .select('*')
          .eq('book_id', book.id)
          .eq('reading_date', today)
          .maybeSingle();

        setTodayReading(reading);
      }
    } catch (error) {
      console.error('Error loading current reading:', error);
    }
  }

  async function loadCharityPool() {
    try {
      const { data } = await supabase
        .from('accountability')
        .select('fine_amount')
        .eq('is_paid', true);

      if (data) {
        const total = data.reduce((sum, record) => sum + record.fine_amount, 0);
        setCharityPool(total);
      }
    } catch (error) {
      console.error('Error loading charity pool:', error);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-stone-900">Men of Issachar</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
          A spiritual brotherhood committed to discipline, wisdom, and growth through daily Bible reading,
          personal development, prayer, and mutual accountability.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-sm border border-stone-200 p-8">
        <h2 className="text-3xl font-bold text-stone-900 mb-6">Our Mission</h2>
        <p className="text-stone-700 leading-relaxed text-lg">
          Like the sons of Issachar who understood the times and knew what Israel should do, we are men
          dedicated to spiritual discernment and action. We pursue wisdom through disciplined study,
          support one another through brotherhood, and maintain accountability in our walk with God.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="text-amber-600" size={28} />
            <h3 className="text-2xl font-bold text-stone-900">What We Do</h3>
          </div>
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">•</span>
              <span>Read one chapter of Proverbs daily when studying Scripture</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">•</span>
              <span>Read 5 pages per day of personal development books</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">•</span>
              <span>Share 2-minute voice reflections on what we learned</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">•</span>
              <span>Gather for prayer on Friday and Sunday nights</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">•</span>
              <span>Maintain accountability with a 100 TL fine for defaults</span>
            </li>
          </ul>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="text-stone-600" size={28} />
            <h3 className="text-2xl font-bold text-stone-900">Current Reading</h3>
          </div>
          {currentBook ? (
            <div className="space-y-3">
              <div>
                <p className="text-sm text-stone-500 mb-1">Book</p>
                <p className="text-lg font-semibold text-stone-900">{currentBook.title}</p>
                {currentBook.author && (
                  <p className="text-sm text-stone-600">by {currentBook.author}</p>
                )}
              </div>
              {todayReading && (
                <div>
                  <p className="text-sm text-stone-500 mb-1">Today's Assignment</p>
                  {todayReading.chapter_number ? (
                    <p className="text-lg font-semibold text-stone-900">
                      Chapter {todayReading.chapter_number}
                    </p>
                  ) : (
                    <p className="text-lg font-semibold text-stone-900">
                      Pages {todayReading.page_start} - {todayReading.page_end}
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <p className="text-stone-600">No current reading assigned</p>
          )}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="text-blue-600" size={28} />
            <h3 className="text-2xl font-bold text-stone-900">Prayer Schedule</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-blue-200">
              <span className="font-semibold text-stone-900">Friday Night</span>
              <span className="text-stone-600">Prayer Meeting</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="font-semibold text-stone-900">Sunday Night</span>
              <span className="text-stone-600">Prayer Meeting</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <DollarSign className="text-green-600" size={28} />
            <h3 className="text-2xl font-bold text-stone-900">Accountability</h3>
          </div>
          <div className="space-y-4">
            <p className="text-stone-700">
              Members who miss their daily reading or reflection contribute 100 TL to our charity pool.
            </p>
            <div className="bg-white rounded-lg p-4 border border-green-300">
              <p className="text-sm text-stone-600 mb-1">Current Charity Pool</p>
              <p className="text-3xl font-bold text-green-600">{charityPool} TL</p>
              <p className="text-sm text-stone-600 mt-2">Used for helping those in need</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-900 text-stone-100 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Brotherhood. Discipline. Faith.</h3>
        <p className="text-stone-300 text-lg">
          Together, we grow in wisdom and walk in the light of truth.
        </p>
      </section>
    </div>
  );
}
