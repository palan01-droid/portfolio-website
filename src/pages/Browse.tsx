import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Row from '../components/Row';
import Card from '../components/Card';
import Modal, { type ModalContent } from '../components/Modal';
import Footer from '../components/Footer';
import {
  profile,
  experience,
  projects,
  skills,
  achievements,
  certificates,
} from '../data';
import './Browse.css';

const Browse = () => {
  const [modal, setModal] = useState<ModalContent | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openAbout = () => {
    setModal({
      title: profile.name,
      subtitle: profile.tagline,
      meta: profile.location,
      thumb: 'linear-gradient(135deg, #1a1a1a, #3a1a1a)',
      bodyText: profile.summary,
      links: [
        { label: 'Email', url: `mailto:${profile.email}`, icon: 'external' },
        { label: 'LinkedIn', url: profile.linkedin, icon: 'external' },
        { label: 'GitHub', url: profile.github, icon: 'github' },
        { label: 'Resume', url: profile.resumeUrl, icon: 'external' },
      ],
    });
  };

  return (
    <div className="browse">
      <Navbar onNavClick={scrollTo} />
      <Hero onPlay={() => scrollTo('projects')} onInfo={openAbout} />

      <Row title="Research & Experience" id="experience">
        {experience.map((e) => (
          <Card
            key={e.id}
            title={e.title}
            subtitle={e.org}
            thumb={e.thumb}
            badge="Research"
            onClick={() =>
              setModal({
                title: e.title,
                subtitle: e.org,
                meta: `${e.location} · ${e.dateRange}`,
                thumb: e.thumb,
                points: e.points,
                tags: e.tags,
              })
            }
          />
        ))}
      </Row>

      <Row title="Projects" id="projects">
        {projects.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            subtitle={p.stack}
            thumb={p.thumb}
            badge="Project"
            onClick={() =>
              setModal({
                title: p.title,
                subtitle: p.stack,
                thumb: p.thumb,
                points: p.points,
                links: [
                  ...(p.liveUrl ? [{ label: 'Live Demo', url: p.liveUrl, icon: 'external' as const }] : []),
                  ...(p.githubUrl ? [{ label: 'GitHub', url: p.githubUrl, icon: 'github' as const }] : []),
                ],
              })
            }
          />
        ))}
      </Row>

      <Row title="Skills & Tools" id="skills">
        {skills.map((s) => (
          <Card
            key={s.id}
            title={s.category}
            subtitle={`${s.items.length} skills`}
            thumb={s.thumb}
            onClick={() =>
              setModal({
                title: s.category,
                thumb: s.thumb,
                tags: s.items,
              })
            }
          />
        ))}
      </Row>

      {certificates.length > 0 && (
        <Row title="Certifications">
          {certificates.map((c) => (
            <Card
              key={c.id}
              title={c.title}
              subtitle={c.issuer}
              thumb={c.thumb}
              badge="Certificate"
              onClick={() =>
                setModal({
                  title: c.title,
                  subtitle: c.issuer,
                  meta: c.date,
                  thumb: c.thumb,
                  points: c.points,
                  tags: c.skills,
                  links: [
                    { label: 'View Certificate (PDF)', url: c.pdfUrl, icon: 'external' },
                    { label: 'Resume', url: profile.resumeUrl, icon: 'external' },
                  ],
                })
              }
            />
          ))}
        </Row>
      )}

      <Row title="Achievements & Awards" id="achievements">
        {achievements.map((a) => (
          <Card
            key={a.id}
            title={a.title}
            subtitle={a.org}
            thumb={a.thumb}
            badge="Award"
            onClick={() =>
              setModal({
                title: a.title,
                subtitle: a.org,
                meta: a.dateRange,
                thumb: a.thumb,
                bodyText: a.detail,
              })
            }
          />
        ))}
      </Row>

      <Footer />
      <Modal content={modal} onClose={() => setModal(null)} />
    </div>
  );
};

export default Browse;
