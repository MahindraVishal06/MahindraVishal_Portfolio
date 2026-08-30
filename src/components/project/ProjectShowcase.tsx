import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../types';
import { FiVideo, FiImage } from 'react-icons/fi';

interface ProjectShowcaseProps {
  project: Project;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project }) => {
  // Duplicate screenshot list for seamless infinite marquee loop
  const marqueeScreenshots = [...project.screenshots, ...project.screenshots];
  
  // Default to landscape unless explicitly specified as portrait or vertical
  const orientation = project.videoOrientation || project.mediaOrientation || 'landscape';
  const isPortrait = orientation === 'portrait' || orientation === 'vertical';

  return (
    <section className="py-20 relative bg-neutral-100 text-neutral-900 border-t border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
            <FiVideo className="w-4 h-4" />
            <span>Gameplay Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Local Video & Visual <span className="text-[#FF6B00]">Showcase</span>
          </h2>
        </div>

        {/* Local Gameplay Video Area (Landscape Default | Portrait when explicitly specified) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mb-16 mx-auto rounded-3xl overflow-hidden bg-black shadow-2xl border border-neutral-300 ${
            isPortrait
              ? 'max-w-[300px] sm:max-w-[380px]'
              : 'max-w-5xl'
          }`}
        >
          <div
            className={`relative w-full rounded-3xl overflow-hidden bg-neutral-900 ${
              isPortrait ? 'aspect-[9/16]' : 'aspect-video'
            }`}
          >
            <video
              controls
              muted
              playsInline
              poster={project.image}
              className="w-full h-full object-cover rounded-3xl"
            >
              <source src={project.previewVideo} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </motion.div>

        {/* Auto-Scrolling Screenshots Gallery (Landscape Default | Portrait when explicitly specified) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase text-[#FF6B00]">
            <FiImage className="w-4 h-4" />
            <span>In-Game Screenshot Gallery (Hover to pause)</span>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            {/* Fade gradient edges for visual polish */}
            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-neutral-100 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-neutral-100 to-transparent pointer-events-none"></div>

            {/* Marquee Track: Landscape default, Portrait when explicitly specified */}
            <div className="animate-marquee-track flex gap-6 sm:gap-8">
              {marqueeScreenshots.map((imgUrl, idx) => (
                <div
                  key={`${imgUrl}-${idx}`}
                  className={`shrink-0 rounded-3xl bg-white border border-neutral-200 shadow-2xl overflow-hidden group hover:border-[#FF6B00]/60 transition-all duration-300 transform hover:scale-[1.02] ${
                    isPortrait
                      ? 'w-[220px] sm:w-[320px]'
                      : 'w-[280px] sm:w-[480px] md:w-[580px] lg:w-[640px]'
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-neutral-900 ${
                      isPortrait
                        ? 'h-[380px] sm:h-[540px]'
                        : 'h-48 sm:h-72 md:h-[360px]'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} Screenshot ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
