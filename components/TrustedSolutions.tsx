// components/TrustedSolutions.tsx
import electricaingroup from '@/public/images/groupofelectrician.webp'
import electricianmaintain from '@/public/images/electricianMaintaining.webp'
import electwarn from '@/public/icons/ElectricWarning.png'
import hydroconversion from '@/public/icons/HydroConversion.png'
import smarthome from '@/public/icons/SmartHome.png'
import batterycharge from '@/public/icons/BatteryCharge.png'
import Image from 'next/image';
import { FaBolt } from 'react-icons/fa'

const TrustedSolutions = () => {
    return (
      <section className="pt-16 bg-white">
        <div className='flex justify-center items-center gap-2 font-sans mb-7'>
            <FaBolt className='text-blue-600'/>
            <h3>why choose us</h3>
        </div>
        <div className="container mx-auto px-4 flex lg:flex-row flex-col gap-4">
            <div>
                {/* Section Heading with Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10 items-center">
                    {/* Image Column */}
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                    {/* Image Placeholder - Replace with actual image */}
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        {/* <div className="relative h-96 rounded-2xl overflow-hidden"> */}
                            <Image 
                                src={electricaingroup}
                                alt="Industrial Electrical Installation"
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        {/* </div> */}
                    </div>
                    </div>
        
                    {/* Text Content */}
                    <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Trusted Electromechanical Solutions for Industrial & Residential Excellence
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Rejoice Engineering delivers precision-engineered solutions for complex 
                        electrical and mechanical systems, ensuring optimal performance and safety.
                    </p>
                    </div>
                </div>
        
                {/* Stats Section with Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {/* Image Placeholder */}
                    <div className="bg-gray-100 rounded-2xl flex items-center justify-center min-h-64">
                        {/* <div className="relative h-96 rounded-2xl overflow-hidden"> */}
                            <Image 
                                src={electricianmaintain}
                                alt="Industrial Electrical Installation"
                                
                                className="object-cover w-full"
                            />
                        {/* </div> */}
                    </div>
        
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 gap-8">
                    <div className="bg-blue-50 p-8 rounded-2xl">
                        <div className="text-5xl font-bold text-blue-600 mb-2">99%</div>
                        <div className="text-gray-700 text-lg font-medium">Safety Compliance Rate</div>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-2xl">
                        <div className="text-5xl font-bold text-blue-600 mb-2">12K+</div>
                        <div className="text-gray-700 text-lg font-medium">Successful Installations</div>
                    </div>
                    </div>
                </div>
            </div>
          
          {/* Features Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                number: '01',
                title: 'Reliability',
                description: '24/7 emergency support with guaranteed response time',
                image: electwarn
              },
              {
                number: '02',
                title: 'Expertise',
                description: 'AED-certified technicians & ISO 9001 certified processes',
                image: hydroconversion
              },
              {
                number: '03',
                title: 'Safety',
                description: 'Risk-free installations with 5-layer safety checks',
                image: smarthome
              },
              {
                number: '04',
                title: 'Efficiency',
                description: 'Energy-optimized systems reducing OPEX by 30-40%',
                image: batterycharge
              }
            ].map((feature) => (
              <div key={feature.number} className="group h-max relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all">
                {/* Image Container */}
                <div className="bg-gray-100 flex items-center  justify-between text-gray-400 p-4 pb-14">
                <div className="text-blue-600 font-bold text-xl mr-3">{feature.number}.</div>
                    {/* <div className="relative h-96 rounded-2xl overflow-hidden"> */}
                        <Image 
                            src={feature.image}
                            alt={feature.title}
                            className="object-cover"
                            width={64} 
                            height={64} 
                        />
                    {/* </div> */}
                </div>
                
                {/* Text Overlay */}
                <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedSolutions;