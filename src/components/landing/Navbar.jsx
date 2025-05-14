import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text dark:from-indigo-400 dark:to-purple-400">
            UserManage
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-8 md:flex">
          <NavLink href="#home" text="Home" />
          <NavLink href="#features" text="Features" />
          <NavLink href="#testimonials" text="Testimonials" />
          <NavLink href="#pricing" text="Pricing" />
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="hidden px-4 py-2 font-medium text-white transition-all duration-200 rounded-md shadow-lg md:block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-indigo-500/20 dark:shadow-indigo-900/30"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="p-2 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 z-40 px-6 py-4 space-y-4 bg-white shadow-lg top-16 dark:bg-gray-900 md:hidden">
          <MobileNavLink href="#home" text="Home" onClick={toggleMenu} />
          <MobileNavLink href="#features" text="Features" onClick={toggleMenu} />
          <MobileNavLink href="#testimonials" text="Testimonials" onClick={toggleMenu} />
          <MobileNavLink href="#pricing" text="Pricing" onClick={toggleMenu} />
          <Link
            to="/login"
            className="block w-full px-4 py-2 font-medium text-center text-white transition-all duration-200 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
};

// Komponen untuk NavLink desktop
const NavLink = ({ href, text }) => (
  <a href={href} className="font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 group">
    {text}
    <span className="block h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </a>
);

// Komponen untuk MobileNavLink
const MobileNavLink = ({ href, text, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
  >
    {text}
  </a>
);

export default Navbar;
