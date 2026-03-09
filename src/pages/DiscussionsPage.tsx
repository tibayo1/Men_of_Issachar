import { useEffect, useState } from 'react';
import { MessageSquare, Send, ChevronRight } from 'lucide-react';
import { supabase, Discussion, DiscussionReply, Profile } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

type DiscussionWithDetails = Discussion & {
  profile: Profile;
  replies?: (DiscussionReply & { profile: Profile })[];
  replyCount?: number;
};

export default function DiscussionsPage() {
  const { user } = useAuth();
  const [discussions, setDiscussions] = useState<DiscussionWithDetails[]>([]);
  const [selectedDiscussion, setSelectedDiscussion] = useState<DiscussionWithDetails | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [replyContent, setReplyContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDiscussions();
  }, []);

  async function loadDiscussions() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('discussions')
        .select(`
          *,
          profile:profiles(*),
          discussion_replies(count)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedDiscussions = data?.map((d: any) => ({
        ...d,
        replyCount: d.discussion_replies?.[0]?.count || 0,
      })) || [];

      setDiscussions(formattedDiscussions);
    } catch (error) {
      console.error('Error loading discussions:', error);
    } finally {
      setLoading(false);
    }
  }

  async function loadDiscussionReplies(discussionId: string) {
    try {
      const { data, error } = await supabase
        .from('discussion_replies')
        .select('*, profile:profiles(*)')
        .eq('discussion_id', discussionId)
        .order('created_at', { ascending: true });

      if (error) throw error;

      const discussion = discussions.find((d) => d.id === discussionId);
      if (discussion) {
        setSelectedDiscussion({ ...discussion, replies: data || [] });
      }
    } catch (error) {
      console.error('Error loading replies:', error);
    }
  }

  async function createDiscussion(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !newTitle.trim() || !newContent.trim()) return;

    try {
      await supabase.from('discussions').insert({
        user_id: user.id,
        title: newTitle.trim(),
        content: newContent.trim(),
      });

      setNewTitle('');
      setNewContent('');
      loadDiscussions();
    } catch (error) {
      console.error('Error creating discussion:', error);
    }
  }

  async function createReply(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !selectedDiscussion || !replyContent.trim()) return;

    try {
      await supabase.from('discussion_replies').insert({
        discussion_id: selectedDiscussion.id,
        user_id: user.id,
        content: replyContent.trim(),
      });

      setReplyContent('');
      await loadDiscussionReplies(selectedDiscussion.id);
      loadDiscussions();
    } catch (error) {
      console.error('Error creating reply:', error);
    }
  }

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInHours * 60);
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      const hours = Math.floor(diffInHours);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
      });
    }
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-stone-600">Loading...</div>
      </div>
    );
  }

  if (selectedDiscussion) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <button
          onClick={() => setSelectedDiscussion(null)}
          className="flex items-center text-stone-600 hover:text-stone-900"
        >
          <ChevronRight className="rotate-180" size={20} />
          <span className="ml-1">Back to discussions</span>
        </button>

        <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
          <h1 className="text-2xl font-bold text-stone-900 mb-3">{selectedDiscussion.title}</h1>
          <div className="flex items-center space-x-3 mb-4">
            <p className="font-semibold text-stone-700">{selectedDiscussion.profile.full_name}</p>
            <span className="text-stone-400">•</span>
            <p className="text-sm text-stone-500">{formatDate(selectedDiscussion.created_at)}</p>
          </div>
          <p className="text-stone-700 leading-relaxed whitespace-pre-wrap">
            {selectedDiscussion.content}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-stone-900 mb-4">
            Replies ({selectedDiscussion.replies?.length || 0})
          </h2>
          <div className="space-y-4">
            {selectedDiscussion.replies?.map((reply) => (
              <div
                key={reply.id}
                className="bg-white rounded-lg shadow-sm border border-stone-200 p-5"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <p className="font-semibold text-stone-900">{reply.profile.full_name}</p>
                  <span className="text-stone-400">•</span>
                  <p className="text-sm text-stone-500">{formatDate(reply.created_at)}</p>
                </div>
                <p className="text-stone-700 leading-relaxed whitespace-pre-wrap">{reply.content}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={createReply} className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
          <h3 className="text-lg font-bold text-stone-900 mb-4">Add Your Reply</h3>
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Share your thoughts..."
            rows={4}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none"
          />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              disabled={!replyContent.trim()}
              className="flex items-center space-x-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              <span>Post Reply</span>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Discussions</h1>
        <p className="text-stone-600">
          Share insights, ask questions, and encourage one another
        </p>
      </div>

      <form onSubmit={createDiscussion} className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Start a Discussion</h2>
        <div className="space-y-4">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Discussion title"
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
          />
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="What's on your mind?"
            rows={4}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!newTitle.trim() || !newContent.trim()}
              className="flex items-center space-x-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MessageSquare size={18} />
              <span>Post Discussion</span>
            </button>
          </div>
        </div>
      </form>

      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Recent Discussions</h2>
        <div className="space-y-3">
          {discussions.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 text-center">
              <p className="text-stone-600">No discussions yet. Start one above!</p>
            </div>
          ) : (
            discussions.map((discussion) => (
              <button
                key={discussion.id}
                onClick={() => loadDiscussionReplies(discussion.id)}
                className="w-full bg-white rounded-lg shadow-sm border border-stone-200 p-5 hover:shadow-md transition-shadow text-left"
              >
                <h3 className="text-lg font-bold text-stone-900 mb-2">{discussion.title}</h3>
                <p className="text-stone-700 line-clamp-2 mb-3">
                  {discussion.content}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-3">
                    <p className="font-medium text-stone-700">{discussion.profile.full_name}</p>
                    <span className="text-stone-400">•</span>
                    <p className="text-stone-500">{formatDate(discussion.created_at)}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-stone-600">
                    <MessageSquare size={16} />
                    <span>{discussion.replyCount} replies</span>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
