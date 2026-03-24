import React from 'react';
import EcosystemPartners from '../components/EcosystemPartners';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <AnimatedSection className="relative min-h-[500px] flex items-center overflow-hidden bg-white">
        <div className="blueprint-grid absolute inset-0 z-0"></div>
        <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">Next-Gen Infrastructure</span>
            </div>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-surface leading-[0.9] tracking-tighter mb-8">
              AI Infrastructure Experts: <span className="text-primary">Specialized Sourcing</span> & Strategic MRO for AI Data Centers
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              Propelling industrial infrastructure into the AI era with precision-calibrated power, thermal management, and ultra-dense compute stacks.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl relative">
              <img 
                alt="AI Server Rack" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3kyCzqDv8JmB6BKQrklLs4L2YqfH0QlpXjypAKR1Nb_ygInFCTXEPzsk1MHov6E2sqX7SyPA6zkyioE1FkmLSp-zP6Dfbtr7DGM_E9eX5hEws87nKh7Qsk9rByJxeksn0w2WC7liBZBhK1DPQxWxX_HUSHKkvvqCar6AdxTF_AUJ3ktydqf-Cwr11oYI35Vf7BvhqLaPCq9YTfYC7H4aitvGOFIGGDl76LM9RvrRjWvlO5_MKFNCcjTSYD_VovyhoU-HsWh6KPoje"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Data Overlay Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-outline-variant/20 max-w-[240px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                </div>
                <div>
                  <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Power Efficiency</div>
                  <div className="text-lg font-bold font-headline">99.999%</div>
                </div>
              </div>
              <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[94%]"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <EcosystemPartners />

      {/* Core Value Prop Section */}
      <AnimatedSection className="py-10 relative overflow-hidden max-w-7xl mx-auto">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6 tracking-tight">
                Branded Products, <span className="text-primary">Trusted Quality.</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Every component sourced by AIX SDN BHD undergoes rigorous industrial validation. We don't just supply hardware; we curate high-performance ecosystems that ensure your AI roadmap remains uninterrupted.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <span className="font-semibold text-on-surface">Verified OEM Supply Chains</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">security</span>
                  <span className="font-semibold text-on-surface">Mission-Critical Redundancy Systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">engineering</span>
                  <span className="font-semibold text-on-surface">Specialized MRO Engineering Support</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-xl bg-surface-container-high overflow-hidden">
                  <img 
                    alt="Industrial component" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7D6jJlB7RcXmpmLbJbQg1zT5k5BAdPIGDql_Asp7QjuPOpvc-i5UlwBk7geAWOR83S0CSGjDMt2SUr1FeitB_oaWtdOOYyzDjRBKyqlJtdkftlHBWhXjk6zhXsoDH95xnSY0b1GIDuBUu8yQl0fB-2KwhDkAX2ZiJNBXIW78M3GtyMMbUq3ODm0oxXNQGtE61Tfnorqo7rkJdctvf61PvWT_KY_5PiWZjJDx9-Szf9OPMACC7fJEIMFal0tdpT9520ctpg_-UScfj"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="h-48 rounded-xl machined-finish overflow-hidden p-6 flex flex-col justify-end text-on-primary">
                  <div className="text-3xl font-bold font-headline">15+</div>
                  <div className="text-xs uppercase tracking-widest font-bold">Years of expertise</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 rounded-xl bg-surface-container-highest overflow-hidden">
                  <img 
                    alt="Industrial engineer" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUGupG5F9o3CeLoNIj2qUtL02krSw3y9udWFoabzImKn8uDtArYEmVjJ-ueijgtn7H5LxfEGMQieKel11kYMFZlZHF3ta7gcYYj-jkx4ZyMvBdhsoM8-oAwg-Xk-7aNIDR78wHDO6D3sfOUVPFXAPva_VKT3PCoiCMnSR2kaYMxeNiC2GqzuC-9oA2gx3vFl2kmKS-be2t-6aL5BXZ9uaATqd-tu3S5VH1XcQ2X0eweGfhUfE0dX7ADaNC2-6rUhswacLKwKaezQ3T"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="h-64 rounded-xl bg-surface-container-low border border-outline-variant/20 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="material-symbols-outlined text-5xl text-primary mb-4">high_quality</span>
                    <div className="font-bold text-on-surface uppercase text-xs tracking-widest">ISO Certified Processes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Quick-Access Pillars (Bento Grid) */}
      <AnimatedSection id="solutions" className="py-12 bg-surface-container-low scroll-mt-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Product Offerings</h2>
            <p className="text-on-surface-variant">Core infrastructure domains for seamless AI operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <Link to="/power-electrical" className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-primary/10 block relative">
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-primary/5 rounded-lg text-primary">
                  <span className="material-symbols-outlined text-3xl">electric_bolt</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold text-xs uppercase tracking-widest">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Power & Electrical</h3>
              <p className="text-on-surface-variant mb-6">Uninterruptible power supplies, PDU distribution, and specialized high-density power grids for GPU clusters.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-wider rounded">UPS Systems</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-wider rounded">PDUs</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-wider rounded">Switchgear</span>
              </div>
            </Link>
            
            {/* Pillar 2 */}
            <Link to="/thermal-management" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-primary/10 block relative">
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-primary/5 rounded-lg text-primary w-fit">
                  <span className="material-symbols-outlined text-3xl">ac_unit</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold text-xs uppercase tracking-widest">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">Thermal Management</h3>
              <p className="text-sm text-on-surface-variant">Liquid cooling and advanced HVAC solutions for high-TDP hardware.</p>
            </Link>
            
            {/* Pillar 3 */}
            <Link to="/it-stack" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-primary/10 block relative">
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-primary/5 rounded-lg text-primary w-fit">
                  <span className="material-symbols-outlined text-3xl">memory</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold text-xs uppercase tracking-widest">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">AI Compute & IT Stack</h3>
              <p className="text-sm text-on-surface-variant">High-performance networking and specialized GPU server chassis.</p>
            </Link>
            
            {/* Pillar 4 */}
            <Link to="/facility-safety" className="md:col-span-4 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-primary/10 block relative">
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-primary/5 rounded-lg text-primary w-fit">
                  <span className="material-symbols-outlined text-3xl">health_and_safety</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold text-xs uppercase tracking-widest">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Facility & Safety</h3>
              <p className="text-on-surface-variant max-w-xl">Intelligent fire suppression, physical security integration, and environmental monitoring for data center resilience.</p>
            </Link>
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
