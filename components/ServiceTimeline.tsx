"use client";
import { 
    FaBolt, 
    FaIndustry, 
    FaSnowflake, 
    FaUserTie,
    FaPlug,
    FaCogs,
    FaTools
} from 'react-icons/fa';
import { MdAutoMode, MdRouter } from "react-icons/md";
import {motion} from 'framer-motion';

const ServiceTimeline = () => {
    const servicesData = [
        {
            title: "Power System Services",
            icon: <FaBolt />,
            // items: [
            //     "Diesel power plant erection, system installations and commissioning",
            //     "Transmission line construction",
            //     "Distribution network design and construction",
            //     "Generator ATS Supply, installation, and maintenance"
            // ],
            items: [
                "Diesel power plant erection, system installation, and commissioning",
                "Transmission line construction",
                "Distribution network design and construction",
                "Generator ATS (Automatic Transfer Switch) supply, installation, and maintenance",
                "Medium Voltage (MV) and Low Voltage (LV) power distribution system design",
                "Overhead and underground power line installation",
                "Transformers installation (pole-mounted, indoor net stations, compact transformers)",
                "Power factor correction and energy auditing"
              ],
            bgColor: "bg-yellow-500"
        },
        {
            title: "Industrial Electromechanical Services",
            icon: <FaIndustry />,
            items: [
                "Industrial design services",
                "Electrical system design and installation for industries",
                "Pipe layout designs for water, steam, and compressed air",
                "Machinery selection, erection, system installation, and commissioning",
                "Custom engineering distribution board construction",
                "Power factor correction panel board construction",
                "Preventive and breakdown maintenance for industrial systems",
                "Electrical installation for various industries (factories, hotels, hospitals, universities, mixed-use buildings, etc.)",
                "Rural electrification and commissioning"
              ],
            bgColor: "bg-blue-500"
        },
        {
            title: "HVAC & Refrigeration Systems",
            icon: <FaSnowflake />,
            items: [
                "Air conditioning system installations",
                "Refrigeration system installation",
                "Cold room constructions"
            ],
            bgColor: "bg-green-500"
        },
        {
            title: "Electromechanical & Automation Services",
            icon: <MdAutoMode />,
            items: [
                "Installation of ATS and interface boards",
                "Generator installation, erection, and maintenance",
                "Motor winding, erection, and maintenance",
                "Public street light erection and installation",
                "Building management system (BMS) installation",
                "Factory automation, robotics, and SCADA-based control systems"
            ],
            bgColor: "bg-gray-500"
        },
        {
            title: "Telecom, Networking & IT Services",
            icon: <MdRouter />,
            items: [
                "Telecom equipment installation & configuration (BTS, antennas, power cabinets, etc.)",
                "Networking design, installation, testing, and configuration",
                "CCTV installation for security monitoring",
                "Fiber optic cable installation and termination"
            ],
            bgColor: "bg-[#B22222]"
        },
        {
            title: "Consultancy Services",
            icon: <FaUserTie />,
            items: [
                "Power system design and engineering consultancy",
                "Industrial and electrical system optimization",
                "Energy efficiency auditing and consulting",
                "Project management for electromechanical projects",
                "Advisory services for governmental and private organizations"
            ],
            bgColor: "bg-purple-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-2 md:p-8">
            
            <div className="max-w-6xl mb-44 mt-40 mx-auto relative">
                {/* Title */}
                {/* <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
                        <FaCogs className="text-blue-500" />
                        CORE SERVICES
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Delivering quality engineering services in the following areas
                    </p>
                </div> */}

                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-yellow-400" />
                            <FaCogs className="text-3xl text-blue-600 animate-spin-slow" />
                            <div className="h-px w-12 bg-gradient-to-r from-yellow-400 to-blue-600" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                            <span className="bg-blue-600  bg-clip-text text-transparent">
                                CORE SERVICES
                            </span>
                        </h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-600 font-medium mt-4"
                        >
                            Delivering Quality Engineering Excellence Across Multiple Disciplines
                        </motion.p>
                    </motion.div>

                    <div className="mt-8 flex justify-center">
                        <div className="w-24 h-1 bg-blue-600 rounded-full" />
                    </div>
                </div>

                {/* Central Line (Power Pole) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gray-300"></div>

                {servicesData.map((service, index) => (
                    <div key={index} className="relative mb-24">
                        {/* Connection Point */}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            w-8 h-8 ${service.bgColor} rounded-full z-10 flex items-center justify-center text-white`}>
                            {service.icon}
                            <div className={`absolute w-12 h-12 ${service.bgColor} rounded-full 
                                opacity-30 -left-2 -top-2 animate-ping`}></div>
                        </div>

                        {/* Content Container */}
                        <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}>
                            <div className={`w-5/12 ${index % 2 === 1 && 'ml-auto'}`}>
                                <div className={`${service.bgColor} p-3 md:p-6 rounded-lg shadow-lg transform 
                                    transition-all duration-300 hover:scale-105`}>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        {service.icon}
                                        {service.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {service.items.map((item, idx) => (
                                            <li key={idx} className="text-white text-sm flex items-start gap-2">
                                                <div className="mt-1">
                                                    {index % 2 === 0 ? <FaPlug className="w-3 h-3" /> : <FaTools className="w-3 h-3" />}
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceTimeline;