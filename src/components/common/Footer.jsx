import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                MyPortfolio
              </span>
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Crafting digital experiences with modern technologies. 
              Passionate about building user-friendly applications.
            </p>
            <div className="flex gap-3 mt-4">
              <a 
                href="#" 
                className="text-slate-400 hover:text-orange-400 hover:bg-orange-500/10 p-2 rounded-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-orange-400 hover:bg-orange-500/10 p-2 rounded-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-orange-400 hover:bg-orange-500/10 p-2 rounded-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-orange-400 hover:bg-orange-500/10 p-2 rounded-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>mrrsokchea0@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+855 090 47 48 32</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} <span className="text-orange-400 font-medium">MyPortfolio</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300">
              Cookies
            </a>
          </div>

          {/* Back to Top Button */}
          <a 
            href="#home" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;