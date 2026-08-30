import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { ContactFormData } from '../../types';
import { HERO_DATA } from '../../data/portfolioData';
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiGithub, FiLinkedin, FiMessageSquare } from 'react-icons/fi';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Gameplay Programmer Position Inquiry',
    message: '',
    projectType: 'Full-time Role'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Gameplay Programmer Position Inquiry',
        message: '',
        projectType: 'Full-time Role'
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
            <FiMessageSquare className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get In <span className="text-gradient-orange">Touch</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base sm:text-lg">
            Interested in hiring me for a Gameplay Programmer role, co-op multiplayer project, or technical consultation? Drop a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl glass-panel space-y-6">
              <h3 className="text-xl font-bold">Contact Details</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                I am actively seeking opportunities with AAA and indie game development studios worldwide.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-neutral-900/30 border border-neutral-700/20">
                  <div className="p-3 rounded-xl bg-[#FF6B00] text-black">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Email Address</div>
                    <a href={`mailto:${HERO_DATA.email}`} className="text-sm font-bold text-current hover:text-[#FF6B00] transition-colors">
                      {HERO_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-neutral-900/30 border border-neutral-700/20">
                  <div className="p-3 rounded-xl bg-[#FF6B00] text-black">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Location</div>
                    <div className="text-sm font-bold text-current">{HERO_DATA.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-700/20 space-y-3">
                <span className="text-xs font-mono uppercase font-bold text-neutral-500">Connect Online</span>
                <div className="flex items-center gap-3">
                  <a
                    href={HERO_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-panel hover:text-[#FF6B00] transition-colors"
                    title="GitHub Profile"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={HERO_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-panel hover:text-[#FF6B00] transition-colors"
                    title="LinkedIn Profile"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${HERO_DATA.email}`}
                    className="p-3 rounded-xl glass-panel hover:text-[#FF6B00] transition-colors"
                    title="Email Direct"
                  >
                    <FiMail className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl glass-panel relative">
              
              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00] text-[#FF6B00] flex items-center gap-3">
                  <FiCheckCircle className="w-6 h-6 shrink-0" />
                  <div>
                    <div className="font-bold text-current text-sm">Message Sent Successfully!</div>
                    <div className="text-xs text-neutral-300">Thank you, Mahindra will get back to you shortly.</div>
                  </div>
                </div>
              )}


              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Your Name <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Recruiter / Studio Lead"
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/40 border border-neutral-700/30 text-current placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Email Address <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@studio.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/40 border border-neutral-700/30 text-current placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Subject / Topic <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Gameplay Programmer Role / Project Collaboration"
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/40 border border-neutral-700/30 text-current placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Message <span className="text-[#FF6B00]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the opportunity, game project, or requirements..."
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/40 border border-neutral-700/30 text-current placeholder-neutral-500 focus:outline-none focus:border-[#FF6B00] transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-[#FF6B00] hover:bg-[#FF8533] text-black font-extrabold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#FF6B00]/25 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <FiSend className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
