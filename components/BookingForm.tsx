"use client"

import React, { useState } from 'react';
import { FaBolt, FaCalendar, FaClock, FaPhone } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    agreed: false
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-6 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <FaBolt className="w-6 h-6 text-blue-400"/>
            <span className="text-blue-400 font-medium">contact us</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to experience our
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text"> service?</span>
          </h1>
          
          <p className="text-gray-300">
            Book a service appointment or just reach out manually to our contact.
          </p>

          <div className="pt-8 space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 rounded-full bg-gray-700/50">
                <FaPhone className="w-5 h-5"/>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p>+251 91 194 7946</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 rounded-full bg-gray-700/50">
                <MdMail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p>contact@rejoice.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            {/* <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%23FFB800' stroke-width='2'%3E%3Cpath d='M21 10H3M21 6H3M21 14H3M21 18H3'/%3E%3C/svg%3E" 
                 alt="icon" 
                 className="w-6 h-6" /> */}
            <h2 className="text-2xl font-semibold">Booking your service today!</h2>
          </div>

          <p className="text-gray-600 mb-8">
            At Rejoice, we pride ourselves on delivering reliable, high-quality solutions tailored to meet your specific requirements.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input
                  type="text"
                  placeholder="e.g. Michael"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input
                  type="text"
                  placeholder="e.g. Oeng"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="e.g. hello@rejoice.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="e.g. + 251 97 297 874"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick the date</label>
                <div className="relative">
                  <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Choose your time</label>
                <div className="relative">
                  <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="time"
                    className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-gray-300 text-blue-400 focus:ring-blue-400"
                onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I have read and accepted terms and privacy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition duration-300 transform hover:scale-[1.02]"
            >
              Book my service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;