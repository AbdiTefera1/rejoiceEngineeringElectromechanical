// components/ServicesSection.tsx
import { FaBolt } from 'react-icons/fa';
import { FiHome, FiBriefcase, FiAlertCircle } from 'react-icons/fi';

const ServicesSection = () => {
  return (
    <section className="pt-16 bg-white">
        <div className='flex justify-center items-center gap-2 font-sans mb-7'>
            <FaBolt className='text-blue-600'/>
            <h3>our services</h3>
        </div>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Electromechanical Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide a wide range of engineering solutions to meet your unique industrial and residential needs.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">10K+</div>
            <div className="text-gray-700">Satisfied Clients</div>
          </div>
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-700">Projects This Year</div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FiHome className="text-4xl mb-4 text-blue-600" />,
              title: 'Residential Services',
              description: 'From routine maintenance and system upgrades to installing new electromechanical solutions.',
              price: '2000',
              action: 'Book Consultation'
            },
            {
              icon: <FiBriefcase className="text-4xl mb-4 text-blue-600" />,
              title: 'Commercial Services',
              description: 'Ensure smooth operations for your business with our tailored industrial solutions.',
              price: '6000',
              action: 'Get Quote'
            },
            {
              icon: <FiAlertCircle className="text-4xl mb-4 text-blue-600" />,
              title: 'Emergency Repairs',
              description: 'Technical emergencies can happen anytime - our team provides rapid support 24/7.',
              price: '8000',
              action: 'Call Now'
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  ETB{service.price}
                </div>
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  {service.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;