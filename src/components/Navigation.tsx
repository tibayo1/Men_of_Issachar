import { Home, BookOpen, Mic, Library, DollarSign, Users, MessageSquare, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

type NavigationProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
};

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const { signOut, profile } = useAuth();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'tracker', label: 'Reading Tracker', icon: BookOpen },
    { id: 'reflections', label: 'Reflections', icon: Mic },
    { id: 'library', label: 'Library', icon: Library },
    { id: 'accountability', label: 'Accountability', icon: DollarSign },
    { id: 'prayer', label: 'Prayer', icon: Users },
    { id: 'discussions', label: 'Discussions', icon: MessageSquare },
  ];

  return (
    <nav className="bg-stone-900 text-stone-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-amber-500">Men of Issachar</h1>

            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-amber-600 text-white'
                        : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-stone-400">Welcome, {profile?.full_name}</span>
            <button
              onClick={() => signOut()}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 transition-colors"
            >
              <LogOut size={18} />
              <span className="text-sm font-medium">Sign Out</span>
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4 grid grid-cols-4 gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center space-y-1 px-2 py-3 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-amber-600 text-white'
                    : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs font-medium text-center">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
