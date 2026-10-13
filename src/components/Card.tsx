import './Card.css';

type CardProps = {
  title: string;
  subtitle?: string;
  thumb: string;
  badge?: string;
  icons?: string[];
  onClick: () => void;
};

const Card = ({ title, subtitle, thumb, badge, icons, onClick }: CardProps) => {
  return (
    <button className="card" style={{ background: thumb }} onClick={onClick}>
      {badge && <span className="card-badge">{badge}</span>}
      {icons && (
        <div className="card-icons">
          {icons.map((icon) => (
            <img key={icon} src={`https://cdn.simpleicons.org/${icon}/white`} alt={icon} />
          ))}
        </div>
      )}
      <div className="card-inner">
        <p className="card-title">{title}</p>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      <div className="card-shine" />
    </button>
  );
};

export default Card;
