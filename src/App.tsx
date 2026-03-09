import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthForm from './components/AuthForm';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ReadingTracker from './pages/ReadingTracker';
import ReflectionsPage from './pages/ReflectionsPage';
import LibraryPage from './pages/LibraryPage';
import AccountabilityPage from './pages/AccountabilityPage';
import PrayerPage from './pages/PrayerPage';
import DiscussionsPage from './pages/DiscussionsPage';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-stone-600 text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'tracker' && <ReadingTracker />}
        {currentPage === 'reflections' && <ReflectionsPage />}
        {currentPage === 'library' && <LibraryPage />}
        {currentPage === 'accountability' && <AccountabilityPage />}
        {currentPage === 'prayer' && <PrayerPage />}
        {currentPage === 'discussions' && <DiscussionsPage />}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
