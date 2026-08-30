import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
      {/* Radial Ambient Orange Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-radial from-[#FF6B00]/20 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-radial from-[#FF6B00]/15 to-transparent rounded-full blur-3xl"
      />

      {/* Floating Geometric Subtle Outlines */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-32 right-12 w-48 h-48 border border-neutral-700/30 rounded-3xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-40 left-10 w-64 h-64 border border-[#FF6B00]/15 rounded-full"
      />
    </div>
  );
};
