import './Card.css';

type CardProps = {
  title: string;
  subtitle?: string;
  thumb: string;
  badge?: string;
  onClick: () => void;
};

const Card = ({ title, subtitle, thumb, badge, onClick }: CardProps) => {
  return (
    <button className="card" style={{ background: thumb }} onClick={onClick}>
      {badge && <span className="card-badge">{badge}</span>}
      <div className="card-inner">
        <p className="card-title">{title}</p>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      <div className="card-shine" />
    </button>
  );
};

export default Card;
