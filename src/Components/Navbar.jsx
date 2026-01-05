import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaMoon, FaSun, FaPhoneAlt } from 'react-icons/fa';
import { useLocalStorage } from '../hooks/useLocalStorage.jsx';
import { CrisisModal } from './CrisisButton.jsx';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCrisisOpen, setIsCrisisOpen] = useState(false);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Resources', path: '/resources', icon: '📚' },
    { name: 'Find Therapist', path: '/find-therapist', icon: '👨‍⚕️' },
    { name: 'Learn More', path: '/learn-more', icon: '🧠' },
    { name: 'Crisis Help', path: '/crisis', icon: '🆘' },
    { name: 'Mood Tracker', path: '/tools/mood-tracker', icon: '📊' },
    { name: 'Assessment', path: '/tools/assessment', icon: '📝' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-linear-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg group-hover:shadow-blue-500/25">
                <span className="text-white font-extrabold text-2xl">M</span>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400">
                MindShift
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Mental Wellness Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:gap-1 xl:gap-8 flex-1 justify-center">
            {navLinks.slice(0, 5).map((link) => (
              link.path === '/crisis' ? (
                <button
                  key={link.name}
                  onClick={() => setIsCrisisOpen(true)}
                  className={`flex items-center gap-2 lg:px-2 xl:px-4 py-2.5 rounded-xl transition-all duration-300 font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-blue-400 cursor-pointer`}
                >
                  <span className="lg:text-lg xl:text-xl">{link.icon}</span>
                  <span className="lg:text-xs xl:text-base whitespace-nowrap">{link.name}</span>
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 lg:px-2 xl:px-4 py-2.5 rounded-xl transition-all duration-300 font-medium ${isActive(link.path)
                    ? 'bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300 shadow-xs'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-blue-400'
                    }`}
                >
                  <span className="lg:text-lg xl:text-xl">{link.icon}</span>
                  <span className="lg:text-xs xl:text-base whitespace-nowrap">{link.name}</span>
                  {isActive(link.path) && (
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  )}
                </Link>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center lg:gap-2 xl:gap-5">
            <button
              onClick={toggleTheme}
              className={`inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer hover:scale-110 lg:w-9 lg:h-9 xl:w-11 xl:h-11 border ${theme === 'light'
                ? 'bg-white border-gray-200 text-yellow-500 shadow-sm hover:shadow-md hover:border-yellow-300'
                : 'bg-gray-800 border-gray-700 text-purple-400 shadow-sm hover:shadow-md hover:border-purple-300'
                }`}
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? (
                <FaSun className="lg:w-4 lg:h-4 xl:w-6 xl:h-6" />
              ) : (
                <FaMoon className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
              )}
            </button>

            <button
              onClick={() => setIsCrisisOpen(true)}
              className="inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer hover:scale-105 gap-2 lg:px-3 xl:px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg hover:shadow-red-500/30 whitespace-nowrap"
              title="Emergency Help"
            >
              <FaPhoneAlt className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
              <span className="lg:text-xs xl:text-base">Emergency</span>
            </button>

            <Link
              to="/tools/mood-tracker"
              className="inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer hover:scale-105 bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/30 lg:px-3 xl:px-5 py-2.5 whitespace-nowrap"
            >
              <span className="lg:text-xs xl:text-base">Check-in</span>
            </Link>

            <Link
              to="/settings"
              className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer hover:scale-105 gap-2 lg:px-2 xl:px-4 py-2.5 bg-gray-50 hover:bg-white border border-gray-200 text-gray-700 shadow-sm hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-750 dark:border-gray-700 dark:text-gray-200"
              title="User Profile"
            >
              <div className="lg:w-6 lg:h-6 xl:w-8 xl:h-8 rounded-full bg-linear-to-tr from-blue-400 to-purple-500 flex items-center justify-center text-white shadow-xs">
                <FaUser className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
              </div>
              <span className="hidden xl:inline text-base">Profile</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 py-4 animate-slideDown">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive(link.path)
                    ? 'bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                  {isActive(link.path) && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}

              <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={toggleTheme}
                  className="flex-1 inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer gap-2 p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {theme === 'light' ? (
                    <>
                      <FaMoon className="w-5 h-5" />
                      <span>Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <FaSun className="w-5 h-5 text-yellow-500" />
                      <span>Light Mode</span>
                    </>
                  )}
                </button>

                <Link
                  to="/settings"
                  className="flex-1 inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer gap-2 p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUser className="w-5 h-5" />
                  <span>Settings</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <CrisisModal isOpen={isCrisisOpen} onClose={() => setIsCrisisOpen(false)} />
    </nav>
  );
}