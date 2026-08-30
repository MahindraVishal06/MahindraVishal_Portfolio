import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { FiAward, FiExternalLink } from 'react-icons/fi';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
            <FiAward className="w-3.5 h-3.5" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Key <span className="text-gradient-orange">Achievements</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base sm:text-lg">
            Official engine certifications, developer program honors, and published game releases.
          </p>
        </div>

        {/* Grid of Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS_DATA.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00]">
                    <FiAward className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FF6B00] text-black">
                    {ach.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-current group-hover:text-[#FF6B00] transition-colors">
                    {ach.title}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-400">
                    {ach.issuer} ({ach.date})
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {ach.link && (
                <div className="pt-3 border-t border-neutral-700/20">
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:underline"
                  >
                    <span>Verify Credential</span>
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
