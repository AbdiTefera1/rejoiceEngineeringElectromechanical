import Image from 'next/image';
import installation from "@/public/icons/installation1.png"
import corporate from "@/public/icons/battery1.png"
import emergency from "@/public/icons/images1.png"
import { FaBolt } from 'react-icons/fa';

const projects = [
  {
    title: "Emergency backup power",
    company: "TechCorp",
    image: emergency,
  },
  {
    title: "Corporate office lighting",
    company: "GlobalBank",
    image: corporate,
  },
  {
    title: "Industrial system installation",
    company: "FashionHub",
    image: installation,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <div className='flex justify-center items-center gap-2 font-sans mb-7'>
            <FaBolt className='text-blue-600'/>
            <h3>case studies</h3>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
          Our Success Stories
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our transformative engineering solutions for leading organizations.
        </p>
        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          View All Projects →
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative rounded-lg overflow-hidden">
              <Image 
                src={project.image} 
                alt={`${project.title} for ${project.company}`}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-blue-600 font-medium flex items-center gap-2">
                <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">
                  {project.company}
                </span>
              </p>
            </div>
            
            <button className="mt-6 w-full bg-white border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Case Study Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}