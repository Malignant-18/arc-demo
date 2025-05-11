import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="text-primary-400" size={28} />
              <h3 className="text-lg font-bold text-white">ALUMNI CONNECT CELL</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting generations of Model Engineers across the globe, fostering networking, mentorship, 
              and knowledge sharing opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Activities', 'Gallery', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Alumni Directory', 'Events Calendar', 'Donations', 'Job Portal', 'Newsletter'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Govt. Model Engineering College<br />
                  Thrikkakara, Kochi - 682021<br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+91-484-2575370" className="text-gray-400 hover:text-primary-400 transition-colors">
                  +91-484-2575370
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:alumni@mec.ac.in" className="text-gray-400 hover:text-primary-400 transition-colors">
                  alumni@mec.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Alumni Connect Cell, Model Engineering College. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;