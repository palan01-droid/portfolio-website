import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { profile, education } from '../data';
import './Hero.css';

type HeroProps = {
  onPlay: () => void;
  onInfo: () => void;
};

const Hero = ({ onPlay, onInfo }: HeroProps) => {
  return (
    <section className="hero" id="hero">
      <div className="hero-scrim" />
      <div className="hero-content">
        <p className="hero-eyebrow">Featured Profile</p>
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-edu">
          🎓 {education.school} — {education.degree} · {education.dateRange}
        </p>
        <div className="hero-actions">
          <button className="hero-btn primary" onClick={onPlay}>
            <FaPlay /> View Projects
          </button>
          <button className="hero-btn secondary" onClick={onInfo}>
            <FaInfoCircle /> More Info
          </button>
        </div>
      </div>
      <div className="hero-fade-bottom" />
    </section>
  );
};

export default Hero;
