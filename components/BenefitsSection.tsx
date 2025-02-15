'use client';

import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import videoThumbnail from '@/public/images/electricalwork4.webp';

const benefits = [
  { title: 'Professional Installation', description: 'All installations are performed by certified electricians.' },
  { title: 'Fast Response Time', description: 'We prioritize quick response to service calls & minimizing downtime.' },
  { title: 'Quality Maintenance', description: 'Our maintenance services help extend the lifespan of your systems.' },
  { title: 'Flexible Scheduling', description: 'We work around your schedule, offering convenient service.' }
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image src={videoThumbnail} alt="Electrician at work" className="rounded-lg shadow-lg" />
          <button className="absolute bottom-4 left-4 bg-black/70 text-white flex items-center px-4 py-2 rounded-lg shadow-lg hover:bg-black/80">
            ▶ Watch Our Work Documentation
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What you’ll gain with Rejoice</h2>
          <p className="text-gray-600 mb-6">Choosing Rejoice means more than just getting a service, it means gaining peace of mind, efficiency, and expertise.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <FaCheckCircle className="text-blue-500 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
