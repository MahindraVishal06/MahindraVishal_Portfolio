import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../../data/portfolioData';
import { FiFileText, FiDownload, FiCheckCircle, FiCpu } from 'react-icons/fi';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
            <FiFileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Official <span className="text-gradient-orange">Resume</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base sm:text-lg">
            Download the official PDF resume for recruiters, hiring managers, and game studio teams.
          </p>
        </div>

        {/* Large Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl glass-panel glass-panel-hover relative overflow-hidden space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-700/20 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] font-bold uppercase tracking-wider">
                <FiCpu className="w-4 h-4" /> Unity Gameplay Programmer Resume
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">{HERO_DATA.name}</h3>
              <p className="text-neutral-400 text-sm">{HERO_DATA.location} • {HERO_DATA.email}</p>
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Mahindra Vishal D - Unity Gameplay Programmer Resume PDF Download Triggered!');
              }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FF6B00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#FF8533] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#FF6B00]/25 w-full md:w-auto"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>
          </div>

          {/* Quick Summary Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2 p-4 rounded-2xl bg-neutral-900/30 border border-neutral-700/20">
              <div className="font-bold text-[#FF6B00] flex items-center gap-1.5">
                <FiCheckCircle className="w-4 h-4" /> Core Expertise
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Gameplay Systems, C# Scripting, Netcode for GameObjects, Finite State Machines, Physics Trajectory.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-neutral-900/30 border border-neutral-700/20">
              <div className="font-bold text-[#FF6B00] flex items-center gap-1.5">
                <FiCheckCircle className="w-4 h-4" /> Key Credential
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Google Play x Unity Selected Scholar & Unity Certified Associate.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-neutral-900/30 border border-neutral-700/20">
              <div className="font-bold text-[#FF6B00] flex items-center gap-1.5">
                <FiCheckCircle className="w-4 h-4" /> Availability
              </div>

              <p className="text-neutral-400 leading-relaxed">
                Open for full-time AAA & Indie Gameplay Programmer roles (Relocation & Remote).
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
