import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProjectHero } from '../components/project/ProjectHero';
import { ProjectAbout } from '../components/project/ProjectAbout';
import { ProjectShowcase } from '../components/project/ProjectShowcase';
import { ProjectContributions } from '../components/project/ProjectContributions';
import { FiArrowLeft } from 'react-icons/fi';

export const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const project = PROJECTS_DATA.find(
    (p) => p.slug === projectId || p.id === projectId
  ) || PROJECTS_DATA[0]; // Fallback to first project if slug not matched

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
        <h2 className="text-3xl font-extrabold mb-4">Project Not Found</h2>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-[#FF6B00] text-black font-extrabold text-xs uppercase"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans relative">
      {/* Sticky Header */}
      <Navbar activeSection="projects" />

      {/* Main Showcase Sections */}
      <main className="relative z-10">
        <ProjectHero project={project} />
        <ProjectAbout project={project} />
        <ProjectShowcase project={project} />
        <ProjectContributions project={project} />
        
        {/* Bottom Navigation CTA */}
        <div className="py-12 bg-neutral-900 text-white text-center border-t border-neutral-800">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FF6B00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#FF8533] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#FF6B00]/30"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Explore All Projects</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
