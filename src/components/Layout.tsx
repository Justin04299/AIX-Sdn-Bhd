import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top or hash on route change
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm h-16">
        <div className="flex justify-between items-center px-8 h-full max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-slate-900 tracking-tighter font-headline">AIX SDN BHD</Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-headline font-medium text-sm tracking-tight">
              <Link 
                to="/" 
                className={`${location.pathname === '/' ? 'text-cyan-700 border-b-2 border-cyan-700 pb-1' : 'text-slate-600 hover:text-cyan-600 transition-colors'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`${location.pathname === '/about' ? 'text-cyan-700 border-b-2 border-cyan-700 pb-1' : 'text-slate-600 hover:text-cyan-600 transition-colors'}`}
              >
                About Us
              </Link>
              
              <div className="relative group">
                <button className="flex items-center gap-1 text-slate-600 hover:text-cyan-600 transition-colors">
                  Solutions
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
                {/* Sub-menu for 4 pillars */}
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-outline-variant/20 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/power-electrical" className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-low transition-colors">Power & Electrical</Link>
                  <Link to="/thermal-management" className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-low transition-colors">Thermal Management</Link>
                  <Link to="/it-stack" className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-low transition-colors">AI Compute & IT Stack</Link>
                  <Link to="/facility-safety" className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-low transition-colors">Facility & Safety</Link>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className={`${location.pathname === '/contact' ? 'text-cyan-700 border-b-2 border-cyan-700 pb-1' : 'text-slate-600 hover:text-cyan-600 transition-colors'}`}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 hover:bg-slate-100 rounded-md text-on-surface-variant transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-8 flex flex-col gap-4 font-headline font-medium text-sm">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`${location.pathname === '/' ? 'text-cyan-700' : 'text-slate-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className={`${location.pathname === '/about' ? 'text-cyan-700' : 'text-slate-600'}`}
            >
              About Us
            </Link>
            <div className="text-slate-900 font-bold mt-2">Solutions</div>
            <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
              <Link to="/power-electrical" onClick={() => setMobileMenuOpen(false)} className="text-slate-600">Power & Electrical</Link>
              <Link to="/thermal-management" onClick={() => setMobileMenuOpen(false)} className="text-slate-600">Thermal Management</Link>
              <Link to="/it-stack" onClick={() => setMobileMenuOpen(false)} className="text-slate-600">AI Compute & IT Stack</Link>
              <Link to="/facility-safety" onClick={() => setMobileMenuOpen(false)} className="text-slate-600">Facility & Safety</Link>
            </div>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={`mt-2 ${location.pathname === '/contact' ? 'text-cyan-700' : 'text-slate-600'}`}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>

      <div className="flex-1">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-[#f2f4f6] dark:bg-slate-950 w-full py-10 px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Brand & Info */}
          <div className="space-y-4">
            <div className="text-lg font-extrabold text-slate-900 dark:text-slate-100 font-headline">AIX SDN BHD</div>
            <p className="font-body text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Engineering the Future of Infrastructure for the AI-First World. Precision-calibrated systems for modern intelligence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-slate-100 mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="font-body text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-600 transition-colors">Home</Link></li>
              <li><Link to="/#solutions" className="font-body text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-600 transition-colors">Solutions</Link></li>
              <li><Link to="/about" className="font-body text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="font-body text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-slate-100 mb-4">Contact</h4>
            <p className="font-body text-xs text-slate-500 dark:text-slate-400">
              888 AI Plaza, Suite 400<br/>
              Tech Corridor, Cyberjaya 63000<br/>
              <a href="tel:+60388881234" className="hover:text-cyan-600 transition-colors">+60 3-8888 1234</a><br/>
              <a href="mailto:inquiry@aix.infra" className="hover:text-cyan-600 transition-colors">inquiry@aix.infra</a>
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-slate-500 dark:text-slate-400">© 2024 AIX SDN BHD. Engineering the Future of Infrastructure.</p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <span>V3.0.0-STABLE</span>
            <span>ISO 27001 CERTIFIED</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
