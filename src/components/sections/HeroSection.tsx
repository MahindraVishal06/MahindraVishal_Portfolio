import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../../data/portfolioData';
import { FiArrowDownRight, FiDownload } from 'react-icons/fi';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Full-Screen Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter blur-[1px]"
        >
          <source src={HERO_DATA.videoUrl} type="video/mp4" />
        </video>
        {/* Dark Overlay (65% opacity) */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            

            {/* Name & Title */}
            <div className="space-y-4">
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                {HERO_DATA.name}
              </h1>
              <div className="flex items-center gap-3 text-xl sm:text-3xl font-extrabold text-[#FF6B00]">
                <span>{HERO_DATA.title}</span>
              </div>

              <p className="text-base sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
                {HERO_DATA.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF6B00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#FF8533] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#FF6B00]/30"
              >
                <span>View Projects</span>
                <FiArrowDownRight className="w-5 h-5" />
              </a>

              <a
                href={HERO_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel hover:border-[#FF6B00]/50 text-xs uppercase tracking-wider font-extrabold text-black transition-all transform hover:-translate-y-0.5"
              >
                <FiDownload className="w-4 h-4 text-[#FF6B00]" />
                <span>View Resume</span>
              </a>


              
            </div>

            
          </motion.div>

          {/* Right Hero Column: Premium Profile Picture Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative mx-auto max-w-[260px] sm:max-w-[320px] w-full">

              
              {/* Animated Glow Halo */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#FF6B00] via-orange-500 to-amber-600 opacity-30 blur-2xl animate-pulse"></div>

              {/* Profile Image Frame */}
              <div className="relative p-3 rounded-full glass-panel border border-[#FF6B00]/40 shadow-2xl overflow-hidden group">
                <div className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src={HERO_DATA.profileImage}
                    alt={HERO_DATA.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        

      </div>
    </section>
  );
};
