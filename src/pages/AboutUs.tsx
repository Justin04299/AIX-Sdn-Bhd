import React from 'react';
import EcosystemPartners from '../components/EcosystemPartners';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <AnimatedSection className="relative py-10 px-8 overflow-hidden bg-surface">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#bdc8ce 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-primary uppercase bg-primary/5 rounded-sm">Our Story</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
              Architecting the <br/><span className="text-primary">AI-First World.</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-2xl font-body">
              AIX SDN BHD is a premier infrastructure engineering firm dedicated to building the physical foundations of digital intelligence. We specialize in high-density power, advanced thermal management, and ultra-low latency interconnects.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="bg-primary text-on-primary py-12 px-8 machined-finish">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          <div className="px-4">
            <div className="text-4xl md:text-5xl font-headline font-extrabold mb-2">15+</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-80">Years Experience</div>
          </div>
          <div className="px-4">
            <div className="text-4xl md:text-5xl font-headline font-extrabold mb-2">99.999%</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-80">Uptime Delivered</div>
          </div>
          <div className="px-4">
            <div className="text-4xl md:text-5xl font-headline font-extrabold mb-2">500+</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-80">MW Managed</div>
          </div>
          <div className="px-4">
            <div className="text-4xl md:text-5xl font-headline font-extrabold mb-2">24/7</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-80">Active Monitoring</div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team / Expertise */}
      <AnimatedSection className="bg-surface py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">Engineering Excellence</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Our team consists of veteran electrical engineers, thermal dynamicists, and network architects who have designed infrastructure for the world's most demanding computational workloads.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">engineering</span>
              <h3 className="font-headline text-xl font-bold mb-4">Precision Engineering</h3>
              <p className="text-sm text-on-surface-variant">Every component is validated against strict industrial tolerances to ensure zero-fail operations under peak AI inference loads.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">psychology</span>
              <h3 className="font-headline text-xl font-bold mb-4">Strategic Sourcing</h3>
              <p className="text-sm text-on-surface-variant">We maintain direct relationships with top-tier OEMs to secure the most advanced and reliable hardware components globally.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">support_agent</span>
              <h3 className="font-headline text-xl font-bold mb-4">Lifecycle MRO</h3>
              <p className="text-sm text-on-surface-variant">From initial deployment to decommissioning, our Maintenance, Repair, and Operations teams ensure continuous peak performance.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="bg-surface-container-low py-16 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">Our Mission</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              To accelerate the global transition to AI-driven operations by providing uncompromising, scalable, and sustainable physical infrastructure. We believe that the software of tomorrow requires the hardware architecture of today.
            </p>
            
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6 mt-12">Our Vision</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              A world where computational limits are defined only by imagination, not by thermal constraints or power availability. We strive to be the invisible, unbreakable backbone of the next technological revolution.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-sm bg-white p-2">
              <img alt="Data Center Corridor" className="w-full h-[500px] object-cover rounded-lg" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer CTA Section */}
      <AnimatedSection className="bg-slate-950 py-16 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl font-extrabold text-white mb-6 tracking-tight">Partner with the Experts</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Discover how AIX SDN BHD can future-proof your data center and accelerate your AI initiatives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-block machined-finish text-on-primary px-10 py-4 rounded-lg font-headline font-bold text-sm tracking-widest uppercase w-full sm:w-auto">
              Send Enquiry
            </Link>
            <Link to="/#solutions" className="inline-block bg-transparent border border-slate-700 text-white hover:bg-slate-800 px-10 py-4 rounded-lg font-headline font-bold text-sm tracking-widest uppercase w-full sm:w-auto transition-colors">
              View Solution
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
