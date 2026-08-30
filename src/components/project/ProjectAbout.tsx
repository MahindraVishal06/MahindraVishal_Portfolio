import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../types';
import { FiAward, FiVideo } from 'react-icons/fi';

interface ProjectAboutProps {
  project: Project;
}

// Converts watch, share, or embed YouTube links to valid embed URLs
const getYouTubeEmbedUrl = (url?: string): string => {
  if (!url) return '';
  if (url.includes('/embed/')) return url;

  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
  } else if (url.includes('watch?v=')) {
    videoId = url.split('watch?v=')[1]?.split('&')[0] || '';
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

export const ProjectAbout: React.FC<ProjectAboutProps> = ({ project }) => {
  const embedUrl = getYouTubeEmbedUrl(project.youtubeUrl);
  
  // Default to landscape unless explicitly specified as portrait or vertical
  const orientation = project.videoOrientation || project.mediaOrientation || 'landscape';
  const isPortrait = orientation === 'portrait' || orientation === 'vertical';

  return (
    <section className="py-20 relative bg-neutral-950 text-white border-t border-neutral-800">
      
      {/* Dark Ambient Overlay & Radial Glow */}
      <div className="absolute inset-0 z-0 bg-black/75 backdrop-blur-[2px] pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {embedUrl ? (
          /* Two Column Grid when youtubeUrl exists */
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: About Title & Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                <FiAward className="w-3.5 h-3.5" />
                <span>Project Overview</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                About <span className="text-[#FF6B00]">{project.title}</span>
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
                {project.aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Embedded YouTube Gameplay Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex flex-col items-center justify-center space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FF6B00] w-full max-w-xl text-left">
                <FiVideo className="w-4 h-4" />
                <span>Official YouTube Gameplay Demo</span>
              </div>

              <div
                className={`relative w-full overflow-hidden rounded-3xl bg-black shadow-2xl border border-neutral-800 group ${
                  isPortrait
                    ? 'max-w-[280px] sm:max-w-[340px] aspect-[9/16] mx-auto'
                    : 'w-full aspect-video'
                }`}
              >
                <iframe
                  src={embedUrl}
                  title={`${project.title} YouTube Gameplay Demo`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0 rounded-3xl"
                ></iframe>
              </div>
            </motion.div>

          </div>
        ) : (
          /* Centered Content Layout when NO youtubeUrl exists */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
              <FiAward className="w-3.5 h-3.5" />
              <span>Project Overview</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              About <span className="text-[#FF6B00]">{project.title}</span>
            </h2>

            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal text-left sm:text-center">
              {project.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
