'use client';

import React from 'react';
import { ovo } from '../app/fonts';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 py-8 px-[12%]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className={`text-2xl font-bold text-black ${ovo.className}`}>Ahmed Abdelaziz</h3>
          <p className="text-sm">Project Manager & Civil Engineer</p>
        </div>
        
        <div className="flex gap-8 mb-4 md:mb-0">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#work" className="hover:text-black">Work</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>

      </div>
      <hr className="border-gray-200 my-6" />
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ahmed Abdelaziz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
