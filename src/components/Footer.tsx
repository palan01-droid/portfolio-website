import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { profile } from '../data';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <h2 className="footer-title">Let's build something.</h2>
        <p className="footer-sub">
          Open to Summer 2027 internships — full-stack, embedded, or research engineering.
        </p>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`} className="footer-link">
            <FaEnvelope /> {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaGithub /> GitHub
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaFileDownload /> Resume
          </a>
        </div>
        <p className="footer-note">{profile.location}</p>
        <p className="footer-copy">© {new Date().getFullYear()} Anuj Pal. Built with React + Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
