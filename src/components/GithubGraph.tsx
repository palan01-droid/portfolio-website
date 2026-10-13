import { useEffect, useState } from 'react';
import { profile } from '../data';
import './GithubGraph.css';

type Day = { date: string; count: number; level: number };

const GithubGraph = () => {
  const [days, setDays] = useState<Day[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${profile.githubUser}?y=last`)
      .then((res) => res.json())
      .then((data) => {
        setDays(data.contributions);
        setTotal(data.total.lastYear);
      })
      .catch(() => {});
  }, []);

  // empty boxes so the first day lands on the right weekday
  const blanks = days.length > 0 ? new Date(days[0].date + 'T00:00').getDay() : 0;

  return (
    <section className="gh" id="github">
      <h2 className="row-title">GitHub Activity</h2>
      <div className="gh-box">
        <div className="gh-grid">
          {Array.from({ length: blanks }).map((_, i) => (
            <div key={'b' + i} />
          ))}
          {days.map((d) => (
            <div key={d.date} className={`gh-day l${d.level}`} title={`${d.count} contributions on ${d.date}`} />
          ))}
        </div>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="gh-total">
          {days.length > 0 ? `${total} contributions in the last year` : 'See my GitHub'} →
        </a>
      </div>
    </section>
  );
};

export default GithubGraph;
