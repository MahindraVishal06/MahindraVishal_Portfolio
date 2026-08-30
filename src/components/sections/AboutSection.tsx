import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../../data/portfolioData';
import { FiMapPin } from 'react-icons/fi';

export const AboutSection: React.FC = () => {


  return (
    <section id="about" className="py-24 relative overflow-hidden bg-neutral-950 text-white border-t border-neutral-800">
      
      {/* Dark Ambient Overlay & Radial Glow matching Hero section */}
      <div className="absolute inset-0 z-0 bg-black/75 backdrop-blur-[2px] pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-4 mb-12">
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-[#FF6B00]">{HERO_DATA.name}</span>
          </h2>
          <div className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-wider flex items-center justify-center gap-2">
            <span>{HERO_DATA.title}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-neutral-300 font-normal">
              <FiMapPin className="w-3.5 h-3.5" /> {HERO_DATA.location}
            </span>
          </div>
        </div>

        {/* Minimal Centered Narrative Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-neutral-200 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal text-center mb-16"
        >
          <p>
            I am a passionate <strong className="text-[#FF6B00]">Unity Gameplay Programmer</strong> with hands-on experience developing real-time multiplayer titles, custom C# gameplay frameworks, and interactive educational applications. My work focuses on solving complex technical challenges — from deterministic physics synchronization over mobile networks to zero-allocation finite state machines.
          </p>
          <p>
            Having completed the prestigious <strong className="text-white">Google Play x Unity Program</strong> and earned the <strong className="text-white">Unity Certified Associate</strong> credential, I combine rigorous engine knowledge with an obsessive focus on gameplay feel, responsive controls, and high-performance execution.
          </p>
          
        </motion.div>

        

      </div>
    </section>
  );
};
