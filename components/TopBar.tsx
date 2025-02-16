// components/TopBar.tsx
"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

const TopBar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll down
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scroll up
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed w-full top-0 z-50 bg-gray-900 transition-transform duration-300 ${
      hidden ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Contact Info */}
          <div className="flex items-center space-x-4 mb-2 md:mb-0 text-white">
            <div className="flex items-center">
              <span className="mr-2"><FaPhone/></span>
              <Link href="tel:+251994251980" className="hover:text-blue-400">+251-91-194-7946</Link>
              {/* <span className="mx-2">/</span>
              <a href="tel:+251980251994" className="hover:text-blue-400">+251-980-251-994</a> */}
            </div>
            <div className="hidden md:flex items-center">
              <span className="mr-2"><MdMail/></span>
              <Link href="mailto:994@ethionet.et" className="hover:text-blue-400">contact@rejoice.com</Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex items-center space-x-4 text-white">
            
              <span className='mr-2'><FaLocationPin/></span>
              <span>Bishoftu, Oromia, Ethiopia</span>
            
            <span className="mx-2">|</span>
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="#" className="hover:text-blue-400">ElectroMechanical</Link>
              <Link href="#" className="hover:text-blue-400">Power Source Installation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;