// components/Hero.tsx
"use client";
import Header from './Header';

const Hero = () => {
  return (
    <section className="relative top-10 md:top-0 min-h-screen bg-engineering-pattern bg-cover bg-center">
      {/* Header <section className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900"> */}
      <Header />
      <div className='absolute inset-0 bg-gray-900/50 backdrop-blur-sm'>
        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-32 md:pt-48 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Rejoice Engineering & 
              <span className="text-blue-600"> Electromechanical Works</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your trusted partner in comprehensive engineering solutions. We specialize in precision electromechanical systems, industrial automation, and sustainable energy solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Our Services
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Animated Scrolling Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 border-4 border-blue-400 rounded-full flex items-start justify-center">
            <div className="w-2 h-4 bg-blue-400 rounded-full mt-2"></div>
          </div>
        </div> */}
      </div>     
    </section>
  );
};

export default Hero;