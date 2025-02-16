const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-white">
      {/* Mission Section */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          To deliver innovative engineering solutions that power progress while maintaining 
          the highest standards of safety, quality, and environmental responsibility.
        </p>
        <div className="my-8 flex justify-center">
          <div className="w-24 h-1 bg-blue-600 rounded-full" />
        </div>
      </div>

      {/* Vision Section */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Vision
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto">
          To be Africa's preferred partner in electromechanical engineering excellence
        </p>
        <div className="my-8 flex justify-center">
          <div className="w-24 h-1 bg-blue-600 rounded-full" />
        </div>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Integrity</h3>
          <p className="text-gray-600">
            Uncompromising ethics and transparency in all business operations
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
          <p className="text-gray-600">
            Pioneering solutions through cutting-edge technology and R&D
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainability</h3>
          <p className="text-gray-600">
            Environmentally responsible engineering practices
          </p>
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
    </section>
  );
};

export default AboutSection;