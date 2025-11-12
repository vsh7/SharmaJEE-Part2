import { Book, Phone, Mail, MapPin, Instagram, Youtube, MessageSquare, Linkedin, LinkedinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/Footer/logo.svg" alt="logo" width={200} height={100} />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering students to achieve their JEE dreams through expert guidance, 
              comprehensive study materials, and proven teaching methodologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/who_vaibhav_vsh7?igsh=MW9heHRzeTB1YndwaQ==" target="_blank" className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 group">
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://youtube.com/@sharmajee.vsh7?si=jUyLNt8AhixaO66O" target="_blank" className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-colors duration-300 group">
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=919599579007&text=Hi this is helpline Number of SharmaJEE" target="_blank" className="bg-green-600 p-3 rounded-lg hover:bg-green-700 transition-colors duration-300 group">
                <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/vaibhavvsh7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="bg-blue-600 p-3 rounded-lg hover:bg-blue -700 transition-colors duration-300 group">
                <LinkedinIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            <p className="mt-6 py-4 text-center text-blue-50 text-sm sm:text-base md:text-lg font-semibold tracking-wide 
  bg-gradient-to-r from-[#0b1f3a] via-[#102f5a] to-[#0b1f3a] 
  rounded-lg shadow-md shadow-blue-900/40 
  border border-blue-800/30
  hover:shadow-blue-600/40 transition-all duration-500 ease-in-out">
   It is <span className="text-sky-200 font-bold">Education Venture</span> by{' '}
  <a
    href="https://vsh7.com"
    className="text-white hover:text-cyan-100 hover:underline transition-colors duration-300 font-extrabold"
    target="_blank"
    rel="noopener noreferrer"
  >
    VSH7 Technology
  </a>
  
</p>


          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Me', path: '/about' },
                { name: 'Courses', path: '/courses' },
                { name: 'Results', path: '/results' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'FAQ', path: '/faq' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+91 9599579007</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@sharmajee.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <a href='https://maps.app.goo.gl/dCVqgknHXKmvFKcE9' target="_blank">3rd Floor, Orchid City Center,
Sector 53, Gurgoan.</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SharmaJEE. All rights reserved. Empowering future engineers.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://courses.sharmajee.com/privacypolicy" target="_blank" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="https://courses.sharmajee.com/termsofuse" target="_blank" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="https://courses.sharmajee.com/refundpolicy" target="_blank" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Refund Policy
              </a>
              <a href="https://courses.sharmajee.com/contactus" target="_blank" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
