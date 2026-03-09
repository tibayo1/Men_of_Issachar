import { useEffect, useState } from 'react';
import { DollarSign, AlertCircle, CheckCircle, Heart } from 'lucide-react';
import { supabase, Accountability, Profile, Reading, Book } from '../lib/supabase';

type AccountabilityWithDetails = Accountability & {
  profile: Profile;
  reading: Reading & {
    book: Book;
  };
};

export default function AccountabilityPage() {
  const [records, setRecords] = useState<AccountabilityWithDetails[]>([]);
  const [charityPool, setCharityPool] = useState(0);
  const [unpaidTotal, setUnpaidTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAccountability();
  }, []);

  async function loadAccountability() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('accountability')
        .select(`
          *,
          profile:profiles(*),
          reading:readings(*, book:books(*))
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setRecords(data || []);

      const paid = data?.filter((r) => r.is_paid).reduce((sum, r) => sum + r.fine_amount, 0) || 0;
      const unpaid = data?.filter((r) => !r.is_paid).reduce((sum, r) => sum + r.fine_amount, 0) || 0;

      setCharityPool(paid);
      setUnpaidTotal(unpaid);
    } catch (error) {
      console.error('Error loading accountability:', error);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
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
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Accountability Ledger</h1>
        <p className="text-stone-600">
          Track defaults and fines used for helping those in need
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-2">
            <Heart className="text-green-600" size={24} />
            <h3 className="text-lg font-bold text-stone-900">Charity Pool</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">{charityPool} TL</p>
          <p className="text-sm text-stone-600 mt-1">Collected for charity</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-2">
            <AlertCircle className="text-amber-600" size={24} />
            <h3 className="text-lg font-bold text-stone-900">Unpaid Fines</h3>
          </div>
          <p className="text-3xl font-bold text-amber-600">{unpaidTotal} TL</p>
          <p className="text-sm text-stone-600 mt-1">Outstanding amounts</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-2">
            <DollarSign className="text-blue-600" size={24} />
            <h3 className="text-lg font-bold text-stone-900">Total Tracked</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">{charityPool + unpaidTotal} TL</p>
          <p className="text-sm text-stone-600 mt-1">All accountability</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-stone-700">
          <span className="font-semibold">Accountability System:</span> Members who miss their daily
          reading or reflection contribute 100 TL. These funds are dedicated to charity and helping
          people in need.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Accountability Records</h2>
        <div className="space-y-3">
          {records.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 text-center">
              <p className="text-stone-600">No accountability records yet</p>
            </div>
          ) : (
            records.map((record) => (
              <div
                key={record.id}
                className="bg-white rounded-lg shadow-sm border border-stone-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <p className="font-bold text-stone-900">{record.profile.full_name}</p>
                      {record.is_paid ? (
                        <span className="inline-flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                          <CheckCircle size={14} />
                          <span>PAID</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded">
                          <AlertCircle size={14} />
                          <span>UNPAID</span>
                        </span>
                      )}
                    </div>

                    <p className="text-stone-700 mb-1">
                      Missed: {record.reading.book.title}
                      {record.reading.chapter_number
                        ? ` - Chapter ${record.reading.chapter_number}`
                        : ` - Pages ${record.reading.page_start}-${record.reading.page_end}`}
                    </p>

                    <p className="text-sm text-stone-600">
                      {formatDate(record.created_at)}
                      {record.is_paid && record.paid_at && ` • Paid on ${formatDate(record.paid_at)}`}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-stone-900">{record.fine_amount} TL</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="bg-stone-900 text-stone-100 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-3 flex items-center space-x-2">
          <Heart className="text-green-400" size={24} />
          <span>Giving Back</span>
        </h3>
        <p className="text-stone-300 leading-relaxed">
          Our accountability system isn't about punishment—it's about commitment. Every fine collected
          goes directly to helping those in need, turning our discipline into service and making a
          positive impact in the lives of others.
        </p>
      </div>
    </div>
  );
}
