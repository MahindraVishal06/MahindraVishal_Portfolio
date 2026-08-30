import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ProjectCard } from '../ui/ProjectCard';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Professional', 'Personal', 'GameJam'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
            Unity <span className="text-[#FF6B00]">Projects</span>
          </h2>
          
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#FF6B00] text-black shadow-lg shadow-[#FF6B00]/25 scale-105'
                  : 'bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};
