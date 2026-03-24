import React from "react";
import EcosystemPartners from '../components/EcosystemPartners';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from "react-router-dom";

export default function FacilitySafety() {
  return (
    <main className="pt-16">
      {/* Hero / Top Section */}
      <AnimatedSection className="relative py-10 px-8 overflow-hidden bg-surface">
        {/* Blueprint Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#bdc8ce 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-primary uppercase bg-primary/5 rounded-sm">
              Secure Operations
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
              Facility & <br />
              <span className="text-primary">Safety</span> Infrastructure.
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-2xl font-body">
              Fortified environments for mission-critical assets. We design and
              construct physical infrastructure with multi-layered security,
              advanced fire suppression, and comprehensive environmental
              monitoring.
            </p>
            <Link
              to="/contact"
              className="inline-block machined-finish text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <EcosystemPartners />

      {/* Feature Section 1 */}
      <AnimatedSection className="bg-surface-container-low py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase mb-4 block">
              Physical Security
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">
              Multi-Layered Access Control
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Zero-trust physical security. Our facilities employ biometric
              scanners, anti-tailgating mantraps, and AI-enhanced video
              surveillance to ensure only authorized personnel can access
              sensitive zones.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-outline-variant/20 bg-surface-container-lowest text-primary px-6 py-3 rounded-lg font-headline font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all"
            >
              Send Enquiry
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-sm bg-white p-2">
              <img
                alt="Security System"
                className="w-full h-[400px] object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2060&auto=format&fit=crop"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Section 2 */}
      <AnimatedSection className="bg-surface py-16 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-sm bg-white p-2">
            <img
              alt="Fire Suppression"
              className="w-full h-[400px] object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=2069&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase mb-4 block">
              Hazard Mitigation
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">
              Advanced Fire Suppression
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Protecting hardware without collateral damage. We utilize clean
              agent gas suppression systems (like NOVEC 1230 or FM-200) that
              extinguish fires rapidly without leaving residue or damaging
              sensitive electronic equipment.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-outline-variant/20 bg-surface-container-lowest text-primary px-6 py-3 rounded-lg font-headline font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Section 3 */}
      <AnimatedSection className="bg-surface-container-low py-16 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase mb-4 block">
              Environmental Control
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">
              Continuous Monitoring
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Real-time situational awareness. Our integrated building
              management systems (BMS) monitor temperature, humidity, leak
              detection, and air quality, providing predictive alerts before
              thresholds are breached.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-outline-variant/20 bg-surface-container-lowest text-primary px-6 py-3 rounded-lg font-headline font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all"
            >
              Send Enquiry
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-sm bg-white p-2">
              <img
                alt="Monitoring Center"
                className="w-full h-[400px] object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                referrerPolicy="no-referrer"
              />
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
