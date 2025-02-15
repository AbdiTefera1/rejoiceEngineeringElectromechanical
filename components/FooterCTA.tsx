// components/FooterCTA.tsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterCTA = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Experience <br />
            Our Premium Services?
          </h2>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
            Contact Now +251 91 194 7946
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Footer Menu */}
          <div className="text-center">
            <nav className="grid grid-cols-2 gap-4">
              {['About', 'Projects', 'Services', 'Careers'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Company Info */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-2">Rejoice Engineering</h3>
            <p className="text-gray-400">Electromechanical Excellence</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Rejoice Engineering Electromechanical Works | <Link href="https://www.linkedin.com/in/abditefera/">Designed by Abdi Tefera</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;