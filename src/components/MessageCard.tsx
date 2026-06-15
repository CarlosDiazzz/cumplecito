import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart } from 'lucide-react';

const MessageCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10 mt-12 flex flex-col items-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-accent text-white px-8 py-3 rounded-full font-sans font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
      >
        <Heart size={20} fill={isOpen ? "white" : "none"} />
        {isOpen ? "Cerrar Mensaje" : "Ver Mensaje Especial"}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mt-8 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl max-w-md text-center border border-dusty"
          >
            <h3 className="text-2xl font-serif text-accent mb-4">Para Alessandra</h3>
            <p className="text-charcoal leading-relaxed font-sans">
              Feliz cumpleaños, mi amor. Que este día esté lleno de la misma luz y alegría que tú traes a mi vida todos los días. Eres tan hermosa y delicada como estos lirios, pero con una fuerza increíble. 
              <br /><br />
              ¡Te quiero muchísimo!
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <span className="text-rose text-2xl">❤</span>
              <span className="text-accent text-2xl">❤</span>
              <span className="text-rose text-2xl">❤</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MessageCard;
