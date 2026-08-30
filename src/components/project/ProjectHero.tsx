import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { FiArrowLeft, FiGithub, FiExternalLink, FiUsers, FiBriefcase } from 'react-icons/fi';


interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-20 flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Full-Screen Gameplay Video with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter blur-[1px]"
        >
          <source src={project.heroVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay (65% opacity) */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Back to Projects Button */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-white hover:text-[#FF6B00] hover:border-[#FF6B00]/40 transition-all"
          >
            <FiArrowLeft className="w-4 h-4 text-[#FF6B00]" />
            <span>Back to Projects</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title, Tagline, Tech, Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Category & Org Tag */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FF6B00] text-black font-extrabold uppercase tracking-wider">
                {project.category}
              </span>
              {project.organization && (
                project.organizationUrl ? (
                  <a
                    href={project.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-white/10 border border-[#FF6B00]/40 text-[#FF6B00] hover:text-[#FF8533] hover:underline font-bold flex items-center gap-1.5 transition-all"
                    title={`Visit official ${project.organization} website`}
                  >
                    <FiBriefcase className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>{project.organization}</span>
                    <FiExternalLink className="w-3.5 h-3.5 text-[#FF6B00]" />
                  </a>
                ) : (
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-neutral-200 font-semibold flex items-center gap-1.5">
                    <FiBriefcase className="w-3.5 h-3.5 text-[#FF6B00]" />
                    {project.organization}
                  </span>
                )
              )}

              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-neutral-200 font-semibold flex items-center gap-1.5">
                <FiUsers className="w-3.5 h-3.5 text-[#FF6B00]" />
                Team: {project.teamSize}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed">
                {project.tagline}
              </p>
            </div>

            

            {/* GitHub / Demo CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FF6B00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#FF8533] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#FF6B00]/30"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-panel hover:border-[#FF6B00]/50 text-xs uppercase tracking-wider font-extrabold text-black transition-all transform hover:-translate-y-0.5"
                >
                  <FiExternalLink className="w-4 h-4 text-[#FF6B00]" />
                  <span>Live Demo / Play Store</span>
                </a>
              )}
            </div>
          </motion.div>

          

        </div>

      </div>
    </section>
  );
};
