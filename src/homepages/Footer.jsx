import React from 'react';
import logo from '../image/target.png';
import logo1 from '../image/hands.png';
import logo2 from '../image/task.png';

const Footer = () => {
  return (
    <div className="relative pt-12">
      {/* Curved top section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="url(#footerGradient)" 
            opacity="1"
          ></path>
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#410445" />
              <stop offset="50%" stopColor="#A5158C" />
              <stop offset="75%" stopColor="#FF2DF1" />
              <stop offset="100%" stopColor="#F6DC43" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Footer content */}
      <footer className="bg-gradient-to-r from-[#410445] via-[#A5158C] to-[#FF2DF1] text-white pt-8 pb-4 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Logo and social section */}
            <div className="flex flex-col space-y-4 min-w-[300px]">
              <div className="flex items-center space-x-4">
                <img src={logo} className="w-12 h-12" alt="School Logo" />
                <span className="text-xl font-bold">Hensang School</span>
              </div>
              <p className="text-sm">"Helping Students Grow into Leaders of today and Tomorrow."</p>
              <div>
                <p className="font-medium mb-2">Follow us</p>
                <div className="flex space-x-4">
                  <img src={logo1} className="w-8 h-8" alt="Social Media 1" />
                  <img src={logo2} className="w-8 h-8" alt="Social Media 2" />
                </div>
              </div>
            </div>

            {/* Useful links section */}
            <div className="min-w-[300px]">
              <h1 className="text-xl font-bold mb-4">Useful links</h1>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  About us
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Program
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Admission
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  News/events
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Student forums
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Payment notice
                </li>
              </ul>
            </div>

            {/* Contact section */}
            <div className="min-w-[300px]">
              <h1 className="text-xl font-bold mb-4">CONTACT US</h1>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p>Sunsari, Ithari</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <p>lamahensang100@gmail.com</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <p>9746969899</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/30 my-6"></div>

          {/* Copyright */}
          <div className="text-center text-sm">
            <p>© Copyright 2025 Hensang School. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;