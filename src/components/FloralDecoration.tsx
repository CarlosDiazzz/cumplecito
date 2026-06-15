import { motion } from 'framer-motion';

interface FlowerProps {
  type: 'lily' | 'rose';
  color: 'white' | 'pink';
  className?: string;
  delay?: number;
}

const FloralDecoration = ({ type, color, className = "", delay = 0 }: FlowerProps) => {
  const fillColor = color === 'white' ? '#FFFFFF' : '#FDC3D1';
  const strokeColor = '#FDA8BF';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ 
        opacity: 0.8, 
        scale: 1, 
        rotate: 0,
        y: [0, -10, 0] 
      }}
      transition={{ 
        duration: 2, 
        delay,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className={`absolute select-none pointer-events-none ${className}`}
    >
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'lily' ? (
          // Simple Flat Lily
          <g>
            <path d="M50 50C50 50 70 20 50 10C30 20 50 50 50 50Z" fill={fillColor} stroke={strokeColor} />
            <path d="M50 50C50 50 80 70 90 50C80 30 50 50 50 50Z" fill={fillColor} stroke={strokeColor} />
            <path d="M50 50C50 50 20 70 10 50C20 30 50 50 50 50Z" fill={fillColor} stroke={strokeColor} />
            <circle cx="50" cy="50" r="5" fill="#FF5C89" opacity="0.5" />
          </g>
        ) : (
          // Simple Flat Rose
          <g>
            <circle cx="50" cy="50" r="30" fill={fillColor} stroke={strokeColor} />
            <path d="M50 30C60 30 70 40 70 50C70 60 60 70 50 70C40 70 30 60 30 50C30 40 40 30 50 30Z" stroke={strokeColor} strokeWidth="2" />
            <path d="M50 40C55 40 60 45 60 50C60 55 55 60 50 60C45 60 40 55 40 50C40 45 45 40 50 40Z" stroke={strokeColor} />
          </g>
        )}
      </svg>
    </motion.div>
  );
};

export default FloralDecoration;
