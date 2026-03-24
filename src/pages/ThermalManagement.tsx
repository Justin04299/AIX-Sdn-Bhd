import React from "react";
import EcosystemPartners from '../components/EcosystemPartners';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from "react-router-dom";

export default function ThermalManagement() {
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
              Precision Cooling
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
              Thermal <br />
              <span className="text-primary">Management</span> Systems.
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-2xl font-body">
              Dissipate heat at the speed of computation. Our advanced thermal
              solutions utilize liquid immersion, direct-to-chip cooling, and
              AI-optimized airflow to maintain peak performance in high-density
              environments.
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
              Liquid Cooling
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">
              Direct-to-Chip (D2C)
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Targeted heat removal for next-gen processors. Our D2C cold plates
              are engineered with micro-channel architectures to capture and
              transport thermal loads directly from the silicon, enabling higher
              TDPs and denser rack configurations.
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
                alt="Liquid Cooling"
                className="w-full h-[400px] object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2070&auto=format&fit=crop"
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
              alt="Immersion Cooling"
              className="w-full h-[400px] object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase mb-4 block">
              Advanced Immersion
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">
              Two-Phase Immersion
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              The ultimate in thermal efficiency. Submerge your IT hardware in
              engineered dielectric fluids. As the fluid boils, it absorbs
              massive amounts of heat, condensing and returning to the bath in a
              closed-loop, zero-waste system.
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
              Airflow Optimization
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">
              AI-Driven HVAC
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Intelligent climate control. We deploy sensor networks and machine
              learning algorithms to dynamically adjust fan speeds, chiller
              outputs, and damper positions, ensuring optimal PUE (Power Usage
              Effectiveness) across the facility.
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
                alt="HVAC System"
                className="w-full h-[400px] object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
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
