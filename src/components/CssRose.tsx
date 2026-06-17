import './CssRose.css';

interface CssRoseProps {
  className?: string;
  delay?: number;
  scale?: number;
  variant?: 'pink' | 'white';
}

const CssRose = ({ className = "", delay = 0, scale = 1, variant = 'pink' }: CssRoseProps) => {
  return (
    <div 
      className={`css-rose-container ${variant} ${className}`} 
      style={{ 
        '--delay': `${delay}s`,
        '--scale': scale,
      } as React.CSSProperties}
    >
      <div className="flower-head">
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
      </div>
    </div>
  );
};

export default CssRose;
