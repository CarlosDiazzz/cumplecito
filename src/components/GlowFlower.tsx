import './GlowFlower.css';

interface GlowFlowerProps {
  className?: string;
}

const GlowFlower = ({ className = "" }: GlowFlowerProps) => {
  return (
    <div className={className}>
      <div className="glow-flower-container">
        {/* Flower 1 (Center) */}
      <div className="glow-flower glow-flower--1">
        <div className="flower__leafs">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
        </div>
      </div>

      {/* Flower 2 (Right) */}
      <div className="glow-flower glow-flower--2">
        <div className="flower__leafs">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
        </div>
      </div>

      {/* Flower 3 (Left) */}
      <div className="glow-flower glow-flower--3">
        <div className="flower__leafs">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GlowFlower;
