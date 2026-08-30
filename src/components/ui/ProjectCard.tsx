import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { FiExternalLink, FiUsers, FiBriefcase } from 'react-icons/fi';


interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Handle play promise interruption if needed
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between group shadow-xl hover:border-[#FF6B00]/60 transition-all duration-300 hover:-translate-y-1 text-left"
    >
      {/* Clickable Card Link to Dedicated Project Details Page */}
      <Link
        to={`/projects/${project.slug}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="block relative h-56 w-full overflow-hidden bg-neutral-900 cursor-pointer"
      >
        {/* Hover Video Preview */}
        <video
          ref={videoRef}
          muted
          playsInline
          loop
          preload="metadata"
          poster={project.image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        >
          <source src={project.previewVideo} type="video/mp4" />
        </video>

        {/* Video Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Category & Featured Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
          <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-1 rounded-full bg-[#FF6B00] text-black text-[10px] font-black uppercase tracking-wider">
              Featured
            </span>
          )}
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        
        <div className="space-y-3">
          {/* Project Title */}
          <Link
            to={`/projects/${project.slug}`}
            className="block text-xl font-extrabold text-neutral-900 group-hover:text-[#FF6B00] transition-colors leading-tight"
          >
            {project.title}
          </Link>

          {/* Organization & Team Size Info */}
          <div className="space-y-1 text-xs font-mono text-neutral-600">
            {project.organization && (
              project.organizationUrl ? (
                <div className="flex items-center gap-1.5 font-bold text-neutral-800">
                  <FiBriefcase className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>{project.category === 'GameJam' ? 'Conducted by:' : 'Organization:'}</span>
                  <a
                    href={project.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[#FF6B00] hover:text-[#FF8533] hover:underline flex items-center gap-1"
                  >
                    <span>{project.organization}</span>
                    <FiExternalLink className="w-3 h-3 text-[#FF6B00]" />
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 font-semibold text-neutral-800">
                  <FiBriefcase className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>
                    {project.category === 'GameJam'
                      ? `Conducted by: ${project.organization}`
                      : `Organization: ${project.organization}`}
                  </span>
                </div>
              )
            )}
            <div className="flex items-center gap-1.5 text-neutral-600">
              <FiUsers className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Team Size: {project.teamSize}</span>
            </div>
          </div>


          {/* 2 Concise Lines Description */}
          <p className="text-neutral-600 text-xs sm:text-sm line-clamp-2 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        

        

      </div>
    </motion.div>
  );
};
