import React from 'react';
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { HERO_DATA } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        

        {/* Bottom Socials & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} Mahindra Vishal D. All rights reserved. Built with React, Vite, Tailwind CSS & Framer Motion.
          </div>

          <div className="flex items-center gap-4 text-neutral-300">
            <a href={HERO_DATA.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition-colors" title="GitHub">
              <FiGithub className="w-4 h-4" />
            </a>
            <a href={HERO_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition-colors" title="LinkedIn">
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${HERO_DATA.email}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition-colors" title="Email">
              <FiMail className="w-4 h-4" />
            </a>

            <span className="flex items-center gap-1 text-[11px]">
              Made with <FiHeart className="w-3 h-3 text-[#FF6B00] fill-current" /> in {HERO_DATA.location}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
