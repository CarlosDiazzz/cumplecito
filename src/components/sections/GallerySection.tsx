import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryPhotos } from '../../data/birthdayData';
import type { GalleryPhoto } from '../../data/birthdayData';
import CssRose from '../CssRose';

const GallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhoto]);

  return (
    <section className="py-32 relative z-10 w-full overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
      {/* Decorative background flowers */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <CssRose className="top-10 right-10" variant="pink" scale={0.7} delay={0.3} />
        <CssRose className="bottom-10 left-10" variant="white" scale={0.8} delay={0.9} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-accent font-serif mb-4">
            Galería de Recuerdos
          </h2>
          <p className="text-charcoal/70 font-sans max-w-md mx-auto italic">
            Algunos de los momentos más lindos e inolvidables que hemos compartido juntos.
          </p>
        </div>

        {/* Polaroids Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {galleryPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ rotate: `${photo.rotation}deg` }}
              className="bg-white p-4 pb-8 shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-sm w-full max-w-[280px] cursor-pointer group relative origin-center"
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 20,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden rounded-sm border border-neutral-100">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover select-none"
                />
                
                {/* Zoom overlay on hover */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-accent scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>

              {/* Polaroid Caption */}
              <div className="mt-5 text-center">
                <p className="font-serif italic text-charcoal/90 text-base leading-snug select-none">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Cerrar"
            >
              <X size={28} />
            </button>

            {/* Polaroid Container in Lightbox */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-5 pb-10 shadow-2xl rounded-sm max-w-xl w-full origin-center"
            >
              <div className="aspect-[4/3] w-full bg-neutral-100 rounded-sm overflow-hidden border border-neutral-100">
                <img 
                  src={selectedPhoto.url} 
                  alt={selectedPhoto.caption} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="font-serif italic text-charcoal/90 text-2xl">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
