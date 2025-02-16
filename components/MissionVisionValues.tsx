"use client";
import React from 'react';
import { 
    FaBusinessTime, 
    FaEye, 
    FaGem,
    FaUserFriends,
    FaHandshake,
    FaMedal,
    FaCogs,
    // FaGlobeAfrica,
    // FaUsers
} from 'react-icons/fa';

import {motion} from 'framer-motion';

const MissionVisionValues = () => {
    const coreValues = [
        {
            title: "Innovation",
            icon: <FaUserFriends className="text-3xl" />,
            description: "Pioneering solutions through cutting-edge technology and R&D"
        },
        {
            title: "Integrity",
            icon: <FaHandshake className="text-3xl" />,
            description: "Uncompromising ethics and transparency in all business operations"
        },
        {
            title: "Sustainability",
            icon: <FaMedal className="text-3xl" />,
            description: "Environmentally responsible engineering practices"
        },
        // {
        //     title: "Socially Responsible",
        //     icon: <FaGlobeAfrica className="text-3xl" />,
        //     description: "We care and protect environment, contribute for the overall development of our society and we do engage in ethical business and do business ethically."
        // },
        // {
        //     title: "Togetherness",
        //     icon: <FaUsers className="text-3xl" />,
        //     description: "We always perform in synergy and teamwork internally and work in collaboration with ecosystem players so as to grow together."
        // }
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto mt-24">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-yellow-400"></div>
                            <FaCogs className="text-3xl text-blue-600 animate-spin-slow" />
                            <div className="h-px w-12 bg-gradient-to-r from-yellow-400 to-blue-600"></div>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                            <span className="bg-blue-600 bg-clip-text text-transparent">
                                ABOUT US
                            </span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-600 font-medium mt-4"
                        >
                            Pioneering Electromechanical Excellence Since 2010
                        </motion.p>
                    </motion.div>
                    
                    <div className="mt-8 flex justify-center">
                        <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                </div>
                {/* Mission Section */}
                <div className="bg-blue-500 rounded-lg p-6 mb-8 transform transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-6">
                        <div className="bg-white p-4 rounded-full">
                            <FaBusinessTime className="text-4xl text-blue-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Mission</h2>
                            <p className="text-white text-lg">
                            To deliver innovative engineering solutions that power progress while maintaining 
                            the highest standards of safety, quality, and environmental responsibility.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="bg-blue-500 rounded-lg p-6 mb-12 transform transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-6">
                        <div className="bg-white p-4 rounded-full">
                            <FaEye className="text-4xl text-blue-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Vision</h2>
                            <p className="text-white text-lg">
                            To be Africa&apos;s preferred partner in electromechanical engineering excellence
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="bg-blue-500 rounded-lg p-8 mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-white p-4 rounded-full">
                            <FaGem className="text-4xl text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-lg p-6 transform transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-blue-500">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-blue-700">
                                        {value.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* History Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
                    <p className="text-gray-600">
                        Founded in 2010, Rejoice Engineering has grown from a local contractor 
                        to a pan-African engineering solutions provider. Our milestones include:
                    </p>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        2015 - Expanded to 3 African countries
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        2018 - Achieved ISO 9001 certification
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        2022 - Surpassed 500 completed projects
                        </li>
                    </ul>
                    </div>
                    <div className="bg-gray-100 h-64 rounded-xl overflow-hidden">
                    {/* Add your company image here */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        [Company History Timeline Infographic]
                    </div>
                    </div>
                </div>

                {/* Accreditation Badges */}
                <div className="mt-16 flex flex-wrap gap-8 justify-center items-center">
                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                    [ISO 9001]
                    </div>
                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                    [ECA]
                    </div>
                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                    [SHEQ]
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVisionValues;