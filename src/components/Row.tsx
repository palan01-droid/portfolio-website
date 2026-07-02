import { useRef, type ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Row.css';

type RowProps = {
  title: string;
  id?: string;
  children: ReactNode;
};

const Row = ({ title, id, children }: RowProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  return (
    <section className="row" id={id}>
      <h2 className="row-title">{title}</h2>
      <div className="row-viewport">
        <button className="row-arrow left" onClick={() => scrollBy(-1)} aria-label="Scroll left">
          <FaChevronLeft />
        </button>
        <div className="row-track" ref={trackRef}>
          {children}
        </div>
        <button className="row-arrow right" onClick={() => scrollBy(1)} aria-label="Scroll right">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Row;
