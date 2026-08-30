import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES_DATA } from '../../data/portfolioData';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
            <FiBriefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Work & <span className="text-gradient-orange">Internship Experience</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base sm:text-lg">
            Track record of shipping Unity applications, integrating cloud APIs, and engineering multiplayer gameplay mechanics.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-neutral-700/40 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCES_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-[#FF6B00] flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00]"></span>
              </div>

              {/* Card */}
              <div className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover space-y-6">
                
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-current group-hover:text-[#FF6B00] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-[#FF6B00] font-semibold text-sm sm:text-base mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full glass-panel">
                      <FiCalendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full glass-panel">
                      <FiMapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Key Contributions:</h4>
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                      <FiCheckCircle className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-neutral-900/40 border border-neutral-700/30 text-xs font-mono text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
