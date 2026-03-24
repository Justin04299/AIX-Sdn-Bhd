import React from "react";
import EcosystemPartners from '../components/EcosystemPartners';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from "react-router-dom";

export default function PowerElectrical() {
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
              High-Velocity Infrastructure
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
              Power & <br />
              <span className="text-primary">Electrical</span> Solutions.
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-2xl font-body">
              Engineered for absolute reliability. Our grid-scale electrical
              infrastructure systems utilize advanced kinetic distribution logic
              and industrial-grade resilience to power the next generation of
              high-demand facilities.
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
              Core Infrastructure
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">
              High-Voltage Substations
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Our substation designs prioritize modular scalability and safety.
              Using precision-machined components and real-time monitoring, we
              provide the backbone for regional power distribution with
              zero-latency failover capabilities.
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
                alt="Substation"
                className="w-full h-[400px] object-cover rounded-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLkX7rdVi4BplzXnTASr4GbJ5vFUlmgEuBv4_X-IYycPRd8YQPxsL7WruWl9EmEKIDwk7pi6sHviFNCasOItSmR-4SmdPvrTHWXliwY4xApzvXkRbAbNyEz36ztNGSarg_1AO3fyFYvr8r4TJqR34T6etr1mP7dw2evELcn9doX5K21KZ3VODGzpKVVJWEVTut9uJEO8roSneBjwg_AVqattAxPaDuhdSPYbvkqT1n3AzFMOhVtNIChDAlVE4hzQSE8XxtJq3_0ATo"
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
              alt="Solar Farm"
              className="w-full h-[400px] object-cover rounded-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2UrzdXkalVKbyNJR5MrnX-73l6N61Ffs3qFF6BsICXxwXhJFv5ZBaMVmJA-DFQJWRdlpeqA9iWaI7JkDCU9ka6ob29rt2F0kAvgjR1ahpmgAra-a-C_y2Xln-g-O0ekGlCqiAcPXWcIcFk5q1GtiT4dn6ZAE5YAUgpzJRUiUt-SFOo4ldCYS-z0JsOfFTIj9vfjwoPL3jL6dOoICpV_-XYT2R1eTnrx31DZzdCQe_OmgilyoIa5bhim57MUzPnvt2yzfa4GYf1xQ"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase mb-4 block">
              Sustainable Energy
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">
              Renewable Integration
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Seamlessly bridge the gap between green generation and traditional
              grids. Our integration systems leverage AI-driven load balancing
              to maximize the efficiency of solar, wind, and kinetic energy
              storage solutions.
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
              Asset Protection
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-6">
              Smart Grid Security
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Protecting the pulse of the city. We deploy encrypted industrial
              IoT sensors and hardening protocols to ensure that power
              infrastructure remains resilient against both environmental
              stressors and digital interference.
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
                alt="Tech Center"
                className="w-full h-[400px] object-cover rounded-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC18eLZY9z-soHzRps6NDxrxalWACyCzD2CaSa3bwnhey7vZOghcj_AZRPMYxGDsSjb2t8pLGcpTcG7eLUoav5Wv7r6sRb3cddCx7xRUVK8GmfAxAgnp_FboBN91Z_lAbnJx5dHcSAuxRx6zp3tEkvAxRenM6cL2UblMginmkiQkaNwJ_hivP1w06sx6tm-jY6enKbj8WqV_TDwkkoSERVEsA8sO8yvigOmIyjJ_ysKN6zxKuhHNGjMjQN4gI-V5QD985V-02ob3GHM"
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
