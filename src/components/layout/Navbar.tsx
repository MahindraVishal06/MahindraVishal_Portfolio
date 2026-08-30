import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FiMenu, FiX, FiLinkedin, FiGithub, FiMail, FiFileText } from 'react-icons/fi';
import { HERO_DATA } from '../../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certification', href: '#certification' },
    { name: 'About', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.startsWith('#') ? href.substring(1) : href;
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-black/85 backdrop-blur-md border-b border-neutral-800 text-white shadow-xl'
          : 'py-5 bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 font-bold tracking-tight text-white group"
          >
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-base tracking-wider leading-tight">
                MAHINDRA VISHAL D
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF6B00]">
                Unity Gameplay Programmer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-700/40 bg-black/40 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === '/' && activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FF6B00] text-black shadow-md shadow-[#FF6B00]/30 font-bold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Social Icons & Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={HERO_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-all transform hover:-translate-y-0.5"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>

            <a
              href={HERO_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-all transform hover:-translate-y-0.5"
              aria-label="GitHub"
              title="GitHub Repository"
            >
              <FiGithub className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${HERO_DATA.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-all transform hover:-translate-y-0.5"
              aria-label="Email"
              title="Send Email"
            >
              <FiMail className="w-4 h-4" />
            </a>

            <a
              href={HERO_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs uppercase tracking-wider font-extrabold text-black bg-[#FF6B00] hover:bg-[#FF8533] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#FF6B00]/25"
              title="View Resume (PDF)"
            >
              <FiFileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 border border-white/20 text-white"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6 text-[#FF6B00]" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-neutral-800 text-white px-4 pt-4 pb-6 mt-3 overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left ${
                    location.pathname === '/' && activeSection === link.href.substring(1)
                      ? 'bg-[#FF6B00] text-black font-bold'
                      : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={HERO_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:text-[#FF6B00]"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={HERO_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:text-[#FF6B00]"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${HERO_DATA.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:text-[#FF6B00]"
                    aria-label="Email"
                  >
                    <FiMail className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href={HERO_DATA.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-extrabold text-black bg-[#FF6B00]"
                >
                  <FiFileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
