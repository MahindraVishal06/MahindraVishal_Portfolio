import React from 'react';
import { motion } from 'framer-motion';
import type { Project, ContributionGroup } from '../../types';
import { FiCheckCircle, FiCheck, FiCpu } from 'react-icons/fi';

interface ProjectContributionsProps {
  project: Project;
}

export const ProjectContributions: React.FC<ProjectContributionsProps> = ({ project }) => {
  return (
    <section className="py-20 relative bg-white text-neutral-900 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
            <FiCheckCircle className="w-4 h-4" />
            <span>Developer Responsibilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
            My <span className="text-[#FF6B00]">Contributions</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl">
            Key engineering roles, gameplay systems, network synchronization, and performance optimizations developed for {project.title}.
          </p>
        </div>

        {/* Subtopics & Bullet Points List */}
        <div className="space-y-8">
          {project.contributions.map((group: ContributionGroup, groupIdx: number) => (
            <motion.div
              key={`${group.subtopic}-${groupIdx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-md space-y-5 text-left hover:border-[#FF6B00]/40 transition-colors"
            >
              {/* Subtopic Header */}
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
                <span className="p-2.5 rounded-2xl bg-[#FF6B00] text-black">
                  <FiCpu className="w-5 h-5" />
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                  {group.subtopic}
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 pt-1">
                {group.bulletPoints.map((point: string, pointIdx: number) => (
                  <li
                    key={pointIdx}
                    className="flex items-start gap-3 text-neutral-700 text-sm sm:text-base leading-relaxed font-normal"
                  >
                    <span className="mt-1 p-1 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] shrink-0">
                      <FiCheck className="w-3.5 h-3.5" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
