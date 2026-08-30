import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

export const CertificationSection: React.FC = () => {
  const certificationPhotos = [
    {
      id: 'cert-1',
      title: 'Google Play x Unity Program Mentorship',
      subtitle: 'Structured developer mentorship & workshops',
      url: "/Google X Unity/1.jpeg",
      alt: 'Google Play x Unity Program developer workshop and mentorship session'
    },
    {
      id: 'cert-2',
      title: 'Unity Certified Associate Certification',
      subtitle: 'Official Unity Technologies credential',
      url: "/Google X Unity/5.jpeg",
      alt: 'Unity Certified Associate Game Developer official certification credential'
    },
    {
      id: 'cert-3',
      title: 'Gameplay Programming & Architecture',
      subtitle: 'Hands-on Unity C# engine workflows',
      url: "/Google X Unity/3.jpeg",
      alt: 'Unity C# gameplay programming and engine architecture review'
    }
  ];

  // Duplicate list internally for a seamless 60 FPS infinite marquee loop
  const marqueeList = [...certificationPhotos, ...certificationPhotos];

  return (
    <section id="certification" className="py-24 relative bg-neutral-100 text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title, Subtitle, and Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 text-xs font-bold uppercase tracking-wider text-[#FF6B00] shadow-sm">
              <FiAward className="w-4 h-4" />
              <span>Google Play x Unity Top Scorer</span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
                Unity Certified Associate <span className="text-[#FF6B00]">Game Developer</span>
              </h2>
              <div className="text-base font-mono font-bold text-[#FF6B00]">
                Google Play x Unity Program Scholar
              </div>
            </div>

            {/* Paragraph 1 */}
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              I was selected for the <strong className="text-neutral-900">Google Play x Unity Program</strong>, an intensive developer initiative designed to help aspiring game developers build industry-ready skills using Unity. Through this program, I received structured mentorship, hands-on learning, and practical experience in professional game development workflows.
            </p>

            {/* Paragraph 2 */}
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              As part of the program, I successfully earned the <strong className="text-neutral-900">Unity Certified Associate: Game Developer</strong> certification and was recognized as one of the top scorers, validating my knowledge of Unity fundamentals, gameplay programming, scripting, physics, animation, UI, and best practices for professional game development.
            </p>

            
          </motion.div>

          {/* Right Column: Infinite Auto-Scrolling Marquee Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 overflow-hidden rounded-3xl"
          >
            <div className="relative w-full overflow-hidden py-4">
              
              {/* Fade gradient edges for smooth visual fading */}
              <div className="absolute top-0 bottom-0 left-0 w-12 z-10 bg-gradient-to-r from-neutral-100 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 right-0 w-12 z-10 bg-gradient-to-l from-neutral-100 to-transparent pointer-events-none"></div>

              {/* Marquee Track */}
              <div className="animate-marquee-track flex gap-5">
                {marqueeList.map((photo, idx) => (
                  <div
                    key={`${photo.id}-${idx}`}
                    className="w-80 sm:w-[440px] shrink-0 rounded-3xl bg-white border border-neutral-200 shadow-xl overflow-hidden group hover:border-[#FF6B00]/60 transition-all duration-300 transform hover:scale-[1.03]"
                  >
                    <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-neutral-900">
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#FF6B00] text-black text-[10px] font-black uppercase tracking-wider">
                        Program Highlight
                      </span>
                    </div>


                    
                  </div>
                ))}
              </div>

              

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
