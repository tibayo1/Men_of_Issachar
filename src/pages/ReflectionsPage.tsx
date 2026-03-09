import { useEffect, useState } from 'react';
import { Mic, Play, Pause, Upload } from 'lucide-react';
import { supabase, Reading, Reflection, Book, Profile } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

type ReadingWithBook = Reading & {
  book: Book;
};

type ReflectionWithUser = Reflection & {
  profile: Profile;
};

export default function ReflectionsPage() {
  const { user } = useAuth();
  const [recentReadings, setRecentReadings] = useState<ReadingWithBook[]>([]);
  const [reflections, setReflections] = useState<ReflectionWithUser[]>([]);
  const [selectedReading, setSelectedReading] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    loadRecentReadings();
    loadReflections();
  }, []);

  async function loadRecentReadings() {
    try {
      const today = new Date();
      const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

      const { data, error } = await supabase
        .from('readings')
        .select('*, book:books(*)')
        .gte('reading_date', lastWeek.toISOString().split('T')[0])
        .lte('reading_date', today.toISOString().split('T')[0])
        .order('reading_date', { ascending: false });

      if (error) throw error;
      setRecentReadings(data || []);
    } catch (error) {
      console.error('Error loading readings:', error);
    }
  }

  async function loadReflections() {
    try {
      const { data, error } = await supabase
        .from('reflections')
        .select('*, profile:profiles(*)')
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      setReflections(data || []);
    } catch (error) {
      console.error('Error loading reflections:', error);
    }
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || !e.target.files[0] || !selectedReading || !user) return;

    const file = e.target.files[0];
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    try {
      setUploading(true);

      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('reflections')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('reflections')
        .getPublicUrl(fileName);

      const audio = new Audio(URL.createObjectURL(file));
      audio.addEventListener('loadedmetadata', async () => {
        const duration = Math.floor(audio.duration);

        await supabase.from('reflections').insert({
          reading_id: selectedReading,
          user_id: user.id,
          audio_url: publicUrl,
          duration_seconds: duration,
        });

        await supabase
          .from('reading_completions')
          .update({ has_reflection: true })
          .eq('reading_id', selectedReading)
          .eq('user_id', user.id);

        loadReflections();
        setSelectedReading('');
        e.target.value = '';
      });
    } catch (error) {
      console.error('Error uploading reflection:', error);
      alert('Failed to upload reflection. Please try again.');
    } finally {
      setUploading(false);
    }
  }

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function formatDuration(seconds: number | null) {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Voice Reflections</h1>
        <p className="text-stone-600">
          Share a 2-minute reflection on what you learned from your daily reading
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Upload className="text-amber-600" size={24} />
          <h2 className="text-xl font-bold text-stone-900">Upload Reflection</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Select Reading
            </label>
            <select
              value={selectedReading}
              onChange={(e) => setSelectedReading(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            >
              <option value="">Choose a reading...</option>
              {recentReadings.map((reading) => (
                <option key={reading.id} value={reading.id}>
                  {formatDate(reading.reading_date)} - {reading.book.title}
                  {reading.chapter_number
                    ? ` (Chapter ${reading.chapter_number})`
                    : ` (Pages ${reading.page_start}-${reading.page_end})`}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Audio File
            </label>
            <div className="flex items-center space-x-3">
              <label className="flex-1 cursor-pointer">
                <div
                  className={`flex items-center justify-center space-x-2 px-4 py-3 border-2 border-dashed rounded-lg transition-colors ${
                    selectedReading
                      ? 'border-amber-400 bg-amber-50 hover:bg-amber-100'
                      : 'border-stone-300 bg-stone-50 cursor-not-allowed'
                  }`}
                >
                  <Mic size={20} className="text-stone-600" />
                  <span className="text-stone-700">
                    {uploading ? 'Uploading...' : 'Choose audio file or record'}
                  </span>
                </div>
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileUpload}
                  disabled={!selectedReading || uploading}
                  className="hidden"
                />
              </label>
            </div>
            <p className="text-xs text-stone-500 mt-2">
              Supported formats: MP3, WAV, M4A, OGG. Max size: 10MB
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Recent Reflections</h2>
        <div className="space-y-3">
          {reflections.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 text-center">
              <p className="text-stone-600">No reflections shared yet</p>
            </div>
          ) : (
            reflections.map((reflection) => (
              <div
                key={reflection.id}
                className="bg-white rounded-lg shadow-sm border border-stone-200 p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-stone-900">{reflection.profile.full_name}</p>
                    <p className="text-sm text-stone-600">
                      {formatDate(reflection.created_at)} • {formatDuration(reflection.duration_seconds)}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (playingId === reflection.id) {
                        setPlayingId(null);
                      } else {
                        setPlayingId(reflection.id);
                        const audio = new Audio(reflection.audio_url);
                        audio.play();
                        audio.onended = () => setPlayingId(null);
                      }
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
                  >
                    {playingId === reflection.id ? (
                      <>
                        <Pause size={18} />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play size={18} />
                        <span>Play</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
