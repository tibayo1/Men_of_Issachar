import { useEffect, useState } from 'react';
import { CheckCircle, Circle, Calendar } from 'lucide-react';
import { supabase, Book, Reading, ReadingCompletion, Profile } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

type ReadingWithCompletion = Reading & {
  book: Book;
  completion?: ReadingCompletion;
};

export default function ReadingTracker() {
  const { user } = useAuth();
  const [readings, setReadings] = useState<ReadingWithCompletion[]>([]);
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState<Profile[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    loadReadings();
    loadMembers();
  }, [selectedDate, user]);

  async function loadReadings() {
    try {
      setLoading(true);
      const { data: readingsData, error } = await supabase
        .from('readings')
        .select(`
          *,
          book:books(*),
          reading_completions(*)
        `)
        .gte('reading_date', getWeekStart(selectedDate))
        .lte('reading_date', getWeekEnd(selectedDate))
        .order('reading_date', { ascending: false });

      if (error) throw error;

      const formattedReadings = readingsData?.map((reading: any) => ({
        ...reading,
        completion: reading.reading_completions?.find(
          (c: ReadingCompletion) => c.user_id === user?.id
        ),
      })) || [];

      setReadings(formattedReadings);
    } catch (error) {
      console.error('Error loading readings:', error);
    } finally {
      setLoading(false);
    }
  }

  async function loadMembers() {
    try {
      const { data } = await supabase.from('profiles').select('*').order('full_name');
      setMembers(data || []);
    } catch (error) {
      console.error('Error loading members:', error);
    }
  }

  async function toggleCompletion(readingId: string, isCompleted: boolean) {
    if (!user) return;

    try {
      if (isCompleted) {
        await supabase
          .from('reading_completions')
          .delete()
          .eq('reading_id', readingId)
          .eq('user_id', user.id);
      } else {
        await supabase.from('reading_completions').insert({
          reading_id: readingId,
          user_id: user.id,
          has_reflection: false,
        });
      }
      loadReadings();
    } catch (error) {
      console.error('Error toggling completion:', error);
    }
  }

  function getWeekStart(dateStr: string) {
    const date = new Date(dateStr);
    const day = date.getDay();
    const diff = date.getDate() - day;
    return new Date(date.setDate(diff)).toISOString().split('T')[0];
  }

  function getWeekEnd(dateStr: string) {
    const date = new Date(dateStr);
    const day = date.getDay();
    const diff = date.getDate() + (6 - day);
    return new Date(date.setDate(diff)).toISOString().split('T')[0];
  }

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-stone-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-900">Reading Tracker</h1>
        <div className="flex items-center space-x-3">
          <Calendar className="text-stone-600" size={20} />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-stone-700">
          Mark your daily reading as complete. Don't forget to upload your 2-minute reflection in the
          Reflections section!
        </p>
      </div>

      <div className="space-y-4">
        {readings.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 text-center">
            <p className="text-stone-600">No readings scheduled for this week</p>
          </div>
        ) : (
          readings.map((reading) => (
            <div
              key={reading.id}
              className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-sm font-medium text-stone-500">
                      {formatDate(reading.reading_date)}
                    </span>
                    {new Date(reading.reading_date).toDateString() === new Date().toDateString() && (
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded">
                        TODAY
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-2">{reading.book.title}</h3>

                  {reading.chapter_number ? (
                    <p className="text-stone-700">
                      <span className="font-semibold">Chapter {reading.chapter_number}</span>
                    </p>
                  ) : (
                    <p className="text-stone-700">
                      <span className="font-semibold">
                        Pages {reading.page_start} - {reading.page_end}
                      </span>
                    </p>
                  )}
                </div>

                <button
                  onClick={() => toggleCompletion(reading.id, !!reading.completion)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors"
                >
                  {reading.completion ? (
                    <>
                      <CheckCircle className="text-green-600" size={32} />
                      <span className="text-green-600 font-semibold">Completed</span>
                    </>
                  ) : (
                    <>
                      <Circle className="text-stone-400" size={32} />
                      <span className="text-stone-600">Mark Complete</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Member Progress</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member) => {
            const completedCount = readings.filter((r) =>
              r.reading_completions?.some((c: any) => c.user_id === member.id)
            ).length;
            const totalCount = readings.length;
            const percentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

            return (
              <div key={member.id} className="bg-stone-50 rounded-lg p-4">
                <p className="font-semibold text-stone-900 mb-2">{member.full_name}</p>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-stone-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-stone-600 font-medium">
                    {completedCount}/{totalCount}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
