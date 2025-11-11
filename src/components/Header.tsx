import { useState, useEffect } from 'react';
import { Menu, Book, Users, Award, MessageSquare, LogIn, UserPlus, BookCopy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Book },
    { name: 'About Me', path: '/about', icon: Users },
    { name: 'Courses', path: '/courses', icon: BookCopy },
    { name: 'Results', path: '/results', icon: Award },
    { name: 'Testimonials', path: '/testimonials', icon: MessageSquare },
    { name: 'FAQ', path: '/faq', icon: MessageSquare },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-sm shadow-2xl`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="./Header/LOGO-sharmaJEE.svg" width={200} height={100} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-base font-semibold transition-all duration-300 font-medium group ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-black hover:text-blue-600'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-300 ${
                    isScrolled ? 'bg-blue-600' : 'bg-blue-200'
                  } ${
                    location.pathname === item.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Auth & Courses Buttons (Desktop only) */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            {/* New Courses Button - Removed Courses Icon */}
            
            <button
              className="flex items-center space-x-2 transition-all duration-300 font-medium px-4 py-2 rounded-lg text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            >
              <LogIn className="h-5 w-5" />
              <span className="text-base">Login</span>
            </button>
            <button
              className="flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium transform hover:scale-105 
                bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
            >
              <UserPlus className="h-5 w-5" />
              <span className="text-base">Sign Up</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl transition-colors duration-300 hover:bg-gray-100 text-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-xl border-t animate-fade-in rounded-b-2xl">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-xl transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            {/* Auth Buttons (Mobile) */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center space-x-2 transition-all duration-300 font-medium px-4 py-2 rounded-lg text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            >
              <LogIn className="h-5 w-5" />
              <span className="text-base">Login</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium transform hover:scale-105 
                bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
            >
              <UserPlus className="h-5 w-5" />
              <span className="text-base">Sign Up</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
