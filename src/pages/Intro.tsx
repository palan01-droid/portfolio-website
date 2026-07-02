import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const [entered, setEntered] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    if (entered) return;
    setEntered(true);
  };

  useEffect(() => {
    if (!entered) return;
    const timer = setTimeout(() => navigate('/browse'), 1900);
    return () => clearTimeout(timer);
  }, [entered, navigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') handleEnter();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entered]);

  return (
    <div className="intro" onClick={handleEnter} role="button" tabIndex={0}>
      <div className={`intro-logo ${entered ? 'zoom' : ''}`}>ANUJ PAL</div>
      {!entered && <p className="intro-hint">click anywhere or press enter</p>}
    </div>
  );
};

export default Intro;
