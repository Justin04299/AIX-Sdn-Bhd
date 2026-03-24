import React from 'react';
import EcosystemPartners from '../components/EcosystemPartners';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main className="pt-16 min-h-screen relative overflow-hidden">
      {/* Blueprint Grid Pattern Decor */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
      
      {/* Hero Section */}
      <AnimatedSection className="relative py-10 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-headline text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Connect with Engineering
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-none">
              Let's build the <span className="text-primary">velocity</span> of tomorrow.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Our technical leads are ready to discuss infrastructure scalability, AI integration, and high-precision system architecture.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 machined-finish opacity-10 rounded-xl blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <div className="relative rounded-lg overflow-hidden border border-outline-variant/20 shadow-xl aspect-video">
              <img 
                alt="Modern architectural building facade" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhUf8UwYUnNjsNGaivE9mJI02_LBDmmmd8Jahdq3U6-cj6tKUREuIZ88MYBuR1O9m53NrQK8ytUE--mN17EFOju2Piao1HS7KTykJeSjYpjxScnpm9zKZONjivUN9qnuzs_jIuvzi13T9WRd7aS-nmhF2MjJFgzskQMQcepvegDPiIHo1v3C969gn3oPv3JWD3N06Kvgt6rFBIbKGvVLXdikQr1hn3xiSoE-jX0-YzFd1v2DNrZPmr9i6rSwQd1NeB86yJSGYBfuuw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content: Bento Grid Layout */}
      <AnimatedSection className="py-12 px-8 max-w-7xl mx-auto bg-surface-container-low mb-24 rounded-2xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Form Card */}
          <div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-8 lg:p-12 shadow-sm">
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-8">Send Enquiry</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold font-headline text-on-surface-variant uppercase tracking-wider">Full Name</label>
                  <input 
                    className="w-full bg-surface-container-lowest border-none outline outline-1 outline-outline-variant/20 focus:outline-primary focus:ring-2 focus:ring-primary/10 rounded-lg p-3 text-on-surface transition-all" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold font-headline text-on-surface-variant uppercase tracking-wider">Work Email</label>
                  <input 
                    className="w-full bg-surface-container-lowest border-none outline outline-1 outline-outline-variant/20 focus:outline-primary focus:ring-2 focus:ring-primary/10 rounded-lg p-3 text-on-surface transition-all" 
                    placeholder="john@kinetic.io" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold font-headline text-on-surface-variant uppercase tracking-wider">Infrastructure Segment</label>
                <select className="w-full bg-surface-container-lowest border-none outline outline-1 outline-outline-variant/20 focus:outline-primary focus:ring-2 focus:ring-primary/10 rounded-lg p-3 text-on-surface transition-all appearance-none">
                  <option>High-Velocity Data Systems</option>
                  <option>Industrial AI Architecture</option>
                  <option>Precision Logistics</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold font-headline text-on-surface-variant uppercase tracking-wider">Project Specification</label>
                <textarea 
                  className="w-full bg-surface-container-lowest border-none outline outline-1 outline-outline-variant/20 focus:outline-primary focus:ring-2 focus:ring-primary/10 rounded-lg p-3 text-on-surface transition-all" 
                  placeholder="Describe your technical requirements..." 
                  rows={4}
                ></textarea>
              </div>
              <button 
                className="w-full machined-finish text-on-primary font-headline font-bold text-sm py-4 rounded-lg uppercase tracking-widest hover:brightness-110 transition-all active:scale-[0.98]" 
                type="submit"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Info Cards Column */}
          <div className="md:col-span-5 space-y-8">
            {/* Headquarters Card */}
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 shadow-sm overflow-hidden group">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded bg-primary/5 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface">Global Headquarters</h3>
                  <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                    888 AI Plaza, Suite 400<br/>
                    Tech Corridor, Cyberjaya 63000
                  </p>
                </div>
              </div>
              <div className="rounded-lg h-48 overflow-hidden relative">
                <img 
                  alt="Map view" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0tKmh-3EVE33UAcSp-5zQxHJEvuyqkgM8jM9MddbkjsszLkM1HAoeZSrHm1TgglJlSNcPK-NJNj5Pl5Y2BlV183LKon92DRYrwxs8Wuevx-j3LfgqkVcTyFBHa-fwBrU3wcudU7-xnG0Ksj7Dev_IQkI1rLJ72CPo5q45r64trHkJ03wO5vuLkk9y97YVlW30LhyjhihZVe9MTsK-One5alKX64naRNmAA30qR1ONy2X9aaKF2WtSXzoew_EWQ72JzGdvM2odvl2h"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </div>

            {/* Rapid Support Card */}
            <div className="bg-primary p-8 rounded-xl text-on-primary machined-finish shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline font-extrabold text-xl mb-2">Rapid Response</h3>
                <p className="text-primary-fixed/80 text-sm mb-6 leading-relaxed">Need urgent technical assistance? Our systems engineers are available for priority infrastructure audits.</p>
                <div className="space-y-4">
                  <a className="flex items-center gap-3 text-on-primary font-bold hover:text-primary-fixed transition-colors" href="tel:+60388881234">
                    <span className="material-symbols-outlined text-sm">call</span>
                    +60 3-8888 1234
                  </a>
                  <a className="flex items-center gap-3 text-on-primary font-bold hover:text-primary-fixed transition-colors" href="mailto:inquiry@aix.infra">
                    <span className="material-symbols-outlined text-sm">mail</span>
                    inquiry@aix.infra
                  </a>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-9xl rotate-12">bolt</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </main>
  );
}
