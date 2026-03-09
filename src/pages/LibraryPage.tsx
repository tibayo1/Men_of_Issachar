import { useEffect, useState } from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { supabase, Book } from '../lib/supabase';

export default function LibraryPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .order('start_date', { ascending: false });

      if (error) throw error;
      setBooks(data || []);
    } catch (error) {
      console.error('Error loading books:', error);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateStr: string | null) {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  function getBookStatus(book: Book) {
    if (book.is_current) return 'current';
    if (book.end_date) return 'completed';
    return 'upcoming';
  }

  const currentBooks = books.filter((b) => b.is_current);
  const completedBooks = books.filter((b) => !b.is_current && b.end_date);
  const upcomingBooks = books.filter((b) => !b.is_current && !b.end_date);

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
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Library</h1>
        <p className="text-stone-600">Books we're reading and have completed as a brotherhood</p>
      </div>

      {currentBooks.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center space-x-2">
            <Clock className="text-amber-600" size={24} />
            <span>Currently Reading</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentBooks.map((book) => (
              <div
                key={book.id}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg shadow-sm border-2 border-amber-300 p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 text-white p-3 rounded-lg">
                    <BookOpen size={32} />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 bg-amber-600 text-white text-xs font-semibold rounded mb-2">
                      CURRENT
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 mb-1">{book.title}</h3>
                    {book.author && <p className="text-sm text-stone-600 mb-3">by {book.author}</p>}
                    <div className="space-y-2 text-sm text-stone-700">
                      {book.type === 'bible' ? (
                        <p>Reading: One chapter per day</p>
                      ) : (
                        <>
                          <p>Total Pages: {book.total_pages}</p>
                          <p>Daily Reading: {book.pages_per_day} pages per day</p>
                        </>
                      )}
                      {book.start_date && (
                        <p className="text-stone-600">Started: {formatDate(book.start_date)}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {completedBooks.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center space-x-2">
            <CheckCircle className="text-green-600" size={24} />
            <span>Completed</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-sm border border-stone-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className="bg-green-100 text-green-700 p-2 rounded">
                    <BookOpen size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-900 mb-1">{book.title}</h3>
                    {book.author && <p className="text-xs text-stone-600">by {book.author}</p>}
                  </div>
                </div>
                <div className="space-y-1 text-xs text-stone-600">
                  {book.type === 'book' && book.total_pages && (
                    <p>{book.total_pages} pages</p>
                  )}
                  {book.start_date && book.end_date && (
                    <p>
                      {formatDate(book.start_date)} - {formatDate(book.end_date)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {upcomingBooks.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Upcoming</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingBooks.map((book) => (
              <div
                key={book.id}
                className="bg-stone-50 rounded-lg border border-stone-200 p-5"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-stone-200 text-stone-600 p-2 rounded">
                    <BookOpen size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-900 mb-1">{book.title}</h3>
                    {book.author && <p className="text-xs text-stone-600">by {book.author}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {books.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 text-center">
          <p className="text-stone-600">No books in the library yet</p>
        </div>
      )}
    </div>
  );
}
