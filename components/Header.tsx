"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/rejoicelogo.svg"
import logowbg from "@/public/rejoicelogowbg.svg"

const navItems = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About Us",
    link: "/about"
  },
  // {
  //   name: "Projects",
  //   link: "/projects"
  // },
  {
    name: "Services",
    link: "/services"
  },
  // {
  //   name: "Blog",
  //   link: "/blog"
  // },
  {
    name: "Contact",
    link: "/contact"
  }
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md top-0'
        : 'bg-blue-700 top-16 md:top-8'
    }`}>
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <Link href="/" className={`font-bold text-2xl transition-all ${
            isScrolled ? '' : 'text-white'
            }`}>
              {isScrolled ? <Image alt='Rejoice logo' src={logo}/> : <Image alt='Rejoice logo' src={logowbg}/>}
                
                {/* <span>
                Rejoice Engineering
                </span> */}
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`hover:border-b-2 transition-colors ${
                    isScrolled ? 'text-gray-700 border-gray-900' : 'text-white border-[#f2f2f2]'
                  } ${
                    item.name === 'Blog' || item.name === 'Home' ? 'font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* <button className={`ml-4 px-6 py-2 rounded-full transition-all ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white text-blue-600 hover:bg-gray-100'
            }`}>
              LOGIN
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 `}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`block text-gray-700 hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* <button className="w-full mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              LOGIN
            </button> */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;