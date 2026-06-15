import { motion } from 'framer-motion';

const ParticleLayer = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%", 
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: "-10%",
            x: (Math.random() * 100) + (Math.random() * 20 - 10) + "%",
            rotate: 360
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute w-2 h-2 rounded-full bg-accent opacity-30"
        />
      ))}
    </div>
  );
};

export default ParticleLayer;
