import { useEffect } from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Modal.css';

export type ModalContent = {
  title: string;
  subtitle?: string;
  meta?: string;
  thumb: string;
  bodyText?: string;
  points?: string[];
  tags?: string[];
  links?: { label: string; url: string; icon?: 'github' | 'external' }[];
};

type ModalProps = {
  content: ModalContent | null;
  onClose: () => void;
};

const Modal = ({ content, onClose }: ModalProps) => {
  useEffect(() => {
    if (!content) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [content, onClose]);

  if (!content) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-banner" style={{ background: content.thumb }}>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
          <div className="modal-banner-scrim" />
          <div className="modal-banner-content">
            <h2>{content.title}</h2>
            {content.subtitle && <p className="modal-subtitle">{content.subtitle}</p>}
          </div>
        </div>
        <div className="modal-body">
          {content.meta && <p className="modal-meta">{content.meta}</p>}
          {content.bodyText && <p className="modal-text">{content.bodyText}</p>}
          {content.points && (
            <ul className="modal-points">
              {content.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
          {content.tags && content.tags.length > 0 && (
            <div className="modal-tags">
              {content.tags.map((t) => (
                <span key={t} className="modal-tag">{t}</span>
              ))}
            </div>
          )}
          {content.links && content.links.length > 0 && (
            <div className="modal-links">
              {content.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="modal-link">
                  {l.icon === 'github' ? <FaGithub /> : <FaExternalLinkAlt />}
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
