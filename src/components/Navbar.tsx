import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-theme fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <FaUserCircle size={22} />
          <span className="fw-semibold">Chandnee Neem</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href} onClick={handleClose}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                type="button"
                className="btn btn-sm theme-toggle-btn d-flex align-items-center gap-1"
                onClick={toggleTheme}
                aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
                aria-pressed={theme === 'dark'}
              >
                {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
                <span className="d-none d-md-inline">
                  {theme === 'light' ? 'Dark' : 'Light'}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

