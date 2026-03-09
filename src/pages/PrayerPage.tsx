import { useEffect, useState } from 'react';
import { Users, CheckCircle, Circle, Calendar } from 'lucide-react';
import { supabase, PrayerMeeting, PrayerAttendance, Profile } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

type PrayerMeetingWithAttendance = PrayerMeeting & {
  prayer_attendance: PrayerAttendance[];
  attendees?: Profile[];
};

export default function PrayerPage() {
  const { user } = useAuth();
  const [meetings, setMeetings] = useState<PrayerMeetingWithAttendance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPrayerMeetings();
  }, [user]);

  async function loadPrayerMeetings() {
    try {
      setLoading(true);
      const today = new Date();
      const twoWeeksAgo = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000);

      const { data, error } = await supabase
        .from('prayer_meetings')
        .select(`
          *,
          prayer_attendance(*, profile:profiles(*))
        `)
        .gte('meeting_date', twoWeeksAgo.toISOString())
        .order('meeting_date', { ascending: false });

      if (error) throw error;

      const formattedMeetings = data?.map((meeting: any) => ({
        ...meeting,
        attendees: meeting.prayer_attendance?.map((a: any) => a.profile) || [],
      })) || [];

      setMeetings(formattedMeetings);
    } catch (error) {
      console.error('Error loading prayer meetings:', error);
    } finally {
      setLoading(false);
    }
  }

  async function toggleAttendance(meetingId: string) {
    if (!user) return;

    try {
      const meeting = meetings.find((m) => m.id === meetingId);
      const hasAttended = meeting?.prayer_attendance?.some((a) => a.user_id === user.id);

      if (hasAttended) {
        await supabase
          .from('prayer_attendance')
          .delete()
          .eq('meeting_id', meetingId)
          .eq('user_id', user.id);
      } else {
        await supabase.from('prayer_attendance').insert({
          meeting_id: meetingId,
          user_id: user.id,
        });
      }

      loadPrayerMeetings();
    } catch (error) {
      console.error('Error toggling attendance:', error);
    }
  }

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  function formatTime(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }

  function getMeetingTypeName(type: string) {
    return type === 'friday' ? 'Friday Night Prayer' : 'Sunday Night Prayer';
  }

  function isPastMeeting(dateStr: string) {
    return new Date(dateStr) < new Date();
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-stone-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Prayer Meetings</h1>
        <p className="text-stone-600">
          Join the brotherhood in prayer every Friday and Sunday night
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="text-blue-600" size={28} />
            <h3 className="text-2xl font-bold text-stone-900">Prayer Schedule</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-blue-300">
              <p className="font-bold text-stone-900 text-lg mb-1">Friday Night</p>
              <p className="text-stone-600">Weekly prayer meeting</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-300">
              <p className="font-bold text-stone-900 text-lg mb-1">Sunday Night</p>
              <p className="text-stone-600">Weekly prayer meeting</p>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="text-stone-600" size={28} />
            <h3 className="text-2xl font-bold text-stone-900">About Prayer</h3>
          </div>
          <p className="text-stone-700 leading-relaxed">
            Prayer is the foundation of our brotherhood. We gather twice a week to pray together,
            support one another, and seek God's wisdom and guidance. These meetings strengthen our
            bonds and keep us accountable to our spiritual commitments.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Recent & Upcoming Meetings</h2>
        <div className="space-y-4">
          {meetings.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 text-center">
              <p className="text-stone-600">No prayer meetings scheduled</p>
            </div>
          ) : (
            meetings.map((meeting) => {
              const hasAttended = meeting.prayer_attendance?.some((a) => a.user_id === user?.id);
              const isPast = isPastMeeting(meeting.meeting_date);

              return (
                <div
                  key={meeting.id}
                  className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-stone-900">
                          {getMeetingTypeName(meeting.type)}
                        </h3>
                        {!isPast && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                            UPCOMING
                          </span>
                        )}
                      </div>
                      <p className="text-stone-600">
                        {formatDate(meeting.meeting_date)} at {formatTime(meeting.meeting_date)}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleAttendance(meeting.id)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors hover:bg-stone-50"
                    >
                      {hasAttended ? (
                        <>
                          <CheckCircle className="text-green-600" size={28} />
                          <span className="text-green-600 font-semibold">Attended</span>
                        </>
                      ) : (
                        <>
                          <Circle className="text-stone-400" size={28} />
                          <span className="text-stone-600">Mark Attendance</span>
                        </>
                      )}
                    </button>
                  </div>

                  {meeting.attendees && meeting.attendees.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-stone-200">
                      <p className="text-sm font-medium text-stone-700 mb-2">
                        Attendees ({meeting.attendees.length})
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {meeting.attendees.map((attendee) => (
                          <span
                            key={attendee.id}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                          >
                            {attendee.full_name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="bg-stone-900 text-stone-100 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-3">The Power of Prayer</h3>
        <p className="text-stone-300 leading-relaxed">
          "Again, truly I tell you that if two of you on earth agree about anything they ask for, it
          will be done for them by my Father in heaven. For where two or three gather in my name,
          there am I with them." - Matthew 18:19-20
        </p>
      </div>
    </div>
  );
}
