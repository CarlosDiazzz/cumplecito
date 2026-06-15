import { motion } from 'framer-motion';
import { useState } from 'react';

const OrigamiLily = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer select-none" onClick={() => setIsOpen(!isOpen)}>
      <motion.svg
        width="300"
        height="300"
        viewBox="0 0 200 200"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="drop-shadow-lg"
      >
        {/* Core Petals */}
        <motion.path
          d={isOpen ? "M 100 100 L 180 40 L 150 140 L 100 100 Z" : "M 100 40 L 140 100 L 100 160 L 60 100 Z"}
          fill="#FDA8BF"
          stroke="#4A3B3E"
          strokeWidth="1"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <motion.path
          d={isOpen ? "M 100 100 L 20 40 L 50 140 L 100 100 Z" : "M 100 40 L 60 100 L 100 160 L 140 100 Z"}
          fill="#FDC3D1"
          stroke="#4A3B3E"
          strokeWidth="1"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <motion.path
          d={isOpen ? "M 100 100 L 100 190 L 150 140 L 100 100 Z" : "M 100 40 L 140 100 L 100 160 L 60 100 Z"}
          fill="#FB8CAC"
          stroke="#4A3B3E"
          strokeWidth="1"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <motion.path
          d={isOpen ? "M 100 100 L 100 190 L 50 140 L 100 100 Z" : "M 100 40 L 60 100 L 100 160 L 140 100 Z"}
          fill="#E0A8B1"
          stroke="#4A3B3E"
          strokeWidth="1"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.svg>
      
      <p className="mt-4 font-serif text-charcoal opacity-60 italic text-sm">
        {isOpen ? "Haz clic para plegar" : "Haz clic para desplegar el lirio"}
      </p>
    </div>
  );
};

export default OrigamiLily;
