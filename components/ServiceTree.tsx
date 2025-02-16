import { 
    FaBolt, 
    FaIndustry, 
    FaSnowflake, 
    FaUserTie,
    FaPlug,
    FaCogs,
    FaTools
} from 'react-icons/fa';

const ServiceTree = () => {
    const servicesData = [
        {
            title: "Power System",
            icon: <FaBolt />,
            items: [
                "Diesel power plant erection, system installations and commissioning",
                "Transmission line construction",
                "Distribution network design and construction",
                "Generator ATS Supply, installation, and maintenance"
            ],
            bgColor: "bg-yellow-500"
        },
        {
            title: "Industrial System",
            icon: <FaIndustry />,
            items: [
                "Industrial design services",
                "Electrical system design and installation",
                "Pipe layout designs for water, steam, and compressed air",
                "Machinery selections, erection, system installation and commissioning",
                "Custom engineering distribution board constructions",
                "Power factor correction panel board constructions",
                "Preventive and Breakdown maintenance",
                "Energy auditing"
            ],
            bgColor: "bg-blue-500"
        },
        {
            title: "HVAC Systems",
            icon: <FaSnowflake />,
            items: [
                "Air conditioning system installations",
                "Refrigeration system installation",
                "Cold room constructions"
            ],
            bgColor: "bg-green-500"
        },
        {
            title: "Consultancy Services",
            icon: <FaUserTie />,
            items: [
                "A vast experience for international and local companies in private and governmental"
            ],
            bgColor: "bg-purple-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto relative">
                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
                        <FaCogs className="text-yellow-500" />
                        CORE SERVICES
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Delivering quality engineering services in the following areas
                    </p>
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
                                <div className={`${service.bgColor} p-6 rounded-lg shadow-lg transform 
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

export default ServiceTree;