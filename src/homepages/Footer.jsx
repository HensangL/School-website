import React from 'react';
import logo from '../image/target.png';
import logo1 from '../image/hands.png';
import logo2 from '../image/task.png';

const Footer = () => {
  return (
    <div className="relative">
      {/* Footer content with curved top */}
      <footer className="relative bg-gradient-to-b from-[#3a0361] to-[#8a0f75] text-white pt-16 pb-8 px-6">
        {/* Curved top inside the footer */}
        <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-1">
          <svg 
            viewBox="0 0 1200 60" 
            preserveAspectRatio="none" 
            className="w-full h-16"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="#3a0361" 
              opacity="1"
            ></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main footer content with subtle card effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Logo and social section with glassmorphism effect */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <img src={logo} className="w-12 h-12" alt="School Logo" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                  Hensang School
                </span>
              </div>
              <p className="text-white/80 mb-6 text-sm italic">
                "Helping Students Grow into Leaders of today and Tomorrow."
              </p>
              <div>
                <p className="font-medium mb-3 text-yellow-200">Follow us</p>
                <div className="flex space-x-4">
                  <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                    <img src={logo1} className="w-6 h-6" alt="Social Media 1" />
                  </div>
                  <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                    <img src={logo2} className="w-6 h-6" alt="Social Media 2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Useful links section with animated bullets */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
              <h1 className="text-xl font-bold mb-5 text-yellow-200">Useful links</h1>
              <ul className="space-y-3">
                {['About us', 'Program', 'Admission', 'News/events', 'Student forums', 'Payment notice'].map((item) => (
                  <li key={item} className="flex items-center group">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 transition-all group-hover:w-3 group-hover:h-3"></span>
                    <a href="#" className="text-white/80 hover:text-white transition hover:translate-x-1">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact section with interactive icons */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
              <h1 className="text-xl font-bold mb-5 text-yellow-200">CONTACT US</h1>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="p-1.5 mr-3 bg-yellow-400/20 rounded-full group-hover:bg-yellow-400/30 transition">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <p className="text-white/80 group-hover:text-white transition">Sunsari, Ithari</p>
                </div>
                <div className="flex items-start group">
                  <div className="p-1.5 mr-3 bg-yellow-400/20 rounded-full group-hover:bg-yellow-400/30 transition">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <p className="text-white/80 group-hover:text-white transition">lamahensang100@gmail.com</p>
                </div>
                <div className="flex items-start group">
                  <div className="p-1.5 mr-3 bg-yellow-400/20 rounded-full group-hover:bg-yellow-400/30 transition">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <p className="text-white/80 group-hover:text-white transition">9746969899</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced divider with gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-8"></div>

          {/* Copyright with subtle animation */}
          <div className="text-center text-sm text-white/70 hover:text-white transition">
            <p>© Copyright 2025 Hensang School. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;