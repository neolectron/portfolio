import { motion } from 'motion/react';
import type { Artwork } from './Masonry';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick?: () => void;
}

export const ArtworkCard = ({ artwork, onClick }: ArtworkCardProps) => {
  return (
    <motion.button
      className="relative rounded-sm overflow-hidden shadow-lg cursor-pointer"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
          delay: 0.4 * Math.random(),
        },
      }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      onClick={onClick}
      aria-label={`Open modal for ${artwork.title}`}
    >
      <img
        src={artwork.src}
        alt={artwork.title}
        className="w-full h-auto object-cover"
        loading="lazy"
      />

      {/* Overlay with artwork info */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-semibold text-lg mb-1">{artwork.title}</h3>
          <p className="text-sm text-gray-200">{artwork.description}</p>
        </div>
      </motion.div>
    </motion.button>
  );
};
