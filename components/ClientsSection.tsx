'use client';

import { FaStar, FaPhoneAlt, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const clients = [
  'MIDE ROCK INVESTIMENT GROUP',
  'ETHIO ELECTRIC',
  'CHALA INVESTIMENT GROUP',
  'ETHIO AFRICA',
  'NOORA RESORT'
];

export default function ClientsSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className='flex justify-start items-center gap-2 font-sans'>
            <FaBolt className='text-blue-600'/>
            <h3>our clients</h3>
        </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
            <div className='flex flex-col md:flex-row p-10 gap-7 justify-center'>
                <div>
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">Work & trusted by industry leaders</h2>
                    <div className="flex items-center space-x-2 text-blue-500 text-lg mb-4">
                        <span>4.5</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                        <span className="text-gray-600">589 Reviews</span>
                    </div>
                </div>
                <div>
                    <p className="text-gray-600 mb-6">
                        We are proud to have earned the trust of numerous companies across various industries.
                        Our commitment to delivering high-quality electrical solutions.
                    </p>
                    <div className="flex space-x-4">
                        <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                         Get in touch
                        </button>
                        <div className="flex items-center space-x-2">
                        <FaPhoneAlt className="text-blue-500" />
                        <span className="text-gray-900 font-semibold">+251 91 194 7946</span>
                        </div>
                    </div>
                </div>
            </div>          
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 opacity-60"
        >
          {clients.map((client, index) => (
            <span key={index} className="text-2xl font-semibold text-gray-500 uppercase">
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
