import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { profile } from '../data';
import './Navbar.css';

type NavbarProps = {
  onNavClick: (sectionId: string) => void;
};

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ onNavClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setMenuOpen(false);
    onNavClick(id);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <span className="navbar-logo">ANUJ PAL</span>
        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => handleClick(l.id)}>{l.label}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <a className="navbar-resume" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <button className="navbar-burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <button key={l.id} onClick={() => handleClick(l.id)}>{l.label}</button>
        ))}
        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
