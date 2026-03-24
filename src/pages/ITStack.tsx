import React from 'react';
import EcosystemPartners from '../components/EcosystemPartners';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

export default function ITStack() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <AnimatedSection className="relative bg-surface py-10 px-8 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-primary uppercase bg-primary/5 rounded-sm">
              Engineered for Velocity
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-6">
              Advanced IT Stack <span className="text-primary">Architecture</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
              Kinetic provides high-precision digital infrastructure designed to sustain the next generation of AI workloads. Our technical stack optimizes every layer of processing, from thermal management to interconnectivity.
            </p>
            <Link to="/contact" className="inline-block machined-finish text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all shadow-lg">
              Send Enquiry
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <EcosystemPartners />

      {/* Feature Section: TIM */}
      <AnimatedSection className="bg-surface-container-low py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase mb-4 block">
              Cooling Solutions
            </span>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Thermal Interface Materials (TIM)</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Our proprietary TIM solutions ensure maximum heat dissipation for high-density compute environments. By utilizing advanced synthetic diamond compounds, we achieve thermal conductivity levels that prevent throttling during peak AI inference cycles.
            </p>
            <Link to="/contact" className="inline-block bg-surface-container-highest text-on-surface px-6 py-3 rounded-lg font-headline font-bold text-xs tracking-widest uppercase hover:bg-surface-container-high transition-all">
              Send Enquiry
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-highest shadow-xl">
              <img className="w-full h-full object-cover" alt="Close-up of high-tech computer processor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZqJIPVWFehPjeTInV5LZQtnTiS6u-kD2Ep4PIVPpLrlkcUVcRAJNPfvS4s5Yc02QGdSv7irrI_8wRUckxJ6HXI-zxFOOG3TR4Z0T7uWRHrFrj_Zkfrqg3B6XuGcwVASrElMWZP_UB4kMVl22QrMyFzqoUe4obeBXzgm21hEsorNPRtoVZCVjfN38h2mpv2z5ygKV10v9_FPsUSaFOOdK6ex3OurdfnoFcFxDoN5ImX4QNPQjux-KFGBum6_Sr5yuettfjjAL8G_86" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Section: Interconnect */}
      <AnimatedSection className="bg-surface py-16 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-2">
            <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase mb-4 block">
              Networking
            </span>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Ultra-Low Latency Interconnect</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Velocity requires seamless data flow. Our interconnect fabric utilizes photonics-integrated circuits to bridge GPU clusters, reducing transport overhead by 40% compared to standard copper-based architectures.
            </p>
            <Link to="/contact" className="inline-block bg-surface-container-highest text-on-surface px-6 py-3 rounded-lg font-headline font-bold text-xs tracking-widest uppercase hover:bg-surface-container-high transition-all">
              Send Enquiry
            </Link>
          </div>
          <div className="order-1 md:order-1">
            <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-highest shadow-xl">
              <img className="w-full h-full object-cover" alt="Interior of a modern data center server room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWoR8mAQVc7FspNZugypZWEJf2TvXi4LcVoG9LGsEScIsfwioFRL5w2xDQlp1FtnLXM6JSNfsw59KVzMQ0EDVsuE5gnV-NmwOVbow8HkRl2UooByvzrO3Jl84zwhewVlGLwbba5qrLe-W9Ndl1O2Xr5JdCn9T7ZqlDMACbBOcdFGjxOcNi_dtnShE2lemdsJtyjqTpljffgPySbZUlTncJo0z1WMphhmEFI7_zs9gaNin3A0A-P8KKO3yO9iZdflLazeoZ2XFmyvAf" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Section: GPU Power */}
      <AnimatedSection className="bg-surface-container-low py-16 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase mb-4 block">
              Power Systems
            </span>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Dynamic GPU Power Delivery</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Precision power management at the rack level. Kinetic's intelligent power delivery units (iPDUs) adapt to real-time load demands, ensuring high-frequency GPU cores receive stable, clean energy without surges or voltage drops.
            </p>
            <Link to="/contact" className="inline-block bg-surface-container-highest text-on-surface px-6 py-3 rounded-lg font-headline font-bold text-xs tracking-widest uppercase hover:bg-surface-container-high transition-all">
              Send Enquiry
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-highest shadow-xl">
              <img className="w-full h-full object-cover" alt="Futuristic power transformer components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBappqWHcwFDrfAPVRMi8UDJyGQHKEBqMr_skkvFGGHVOoTvYbbQ4l6WjzFs7oTWDFJLB8fKn7xiKo5kLGQeoaWp5pyEEOUQX6m9V_4kOrjpapSlJNo7TxX1_sF-O9zUkFDCGgvBAfJdv_ywlg8LmF0BqXE9MABsV-UN_Z4pRorylKUf7Dd9ycVuglINYv6qgyKJ4bCmTJJhiWMPAfRCS1LV_PmibZVF_AJhiq5sjCHiSGo15Mc_fTnJHqX4cDu2J3UCH-H6HD4Q0mu" referrerPolicy="no-referrer" />
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
