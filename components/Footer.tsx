import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>Explore AI, 💻coding, and 🤖robotics with us! Learn from 🔐hacking tutorials, get creative with DIYs.
              🌟 Join us for innovation. Subscribe now!🔔</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
              <li><a href="#projects" className="text-white hover:text-gray-400">Projects</a></li>
              <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Hyderabad, India</p>
            <p> <a href='mailto:syedadnanali0106@gmail.com' className="hover:text-gray-400">Email: syedadnanali0106@gmail.com</a></p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><a href="/Privacy-Policy" target='_blanck' className="text-white hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="/Terms-conditions" target='_blanck' className="text-white hover:text-gray-400">Terms and Conditions</a></li>
              <li><a href="/Cancellation-Refund" target='_blanck' className="text-white hover:text-gray-400">Cancellation and Refund</a></li>
              <li><a href="/Shipping-Delivery" target='_blanck' className="text-white hover:text-gray-400">Shipping and Delivery</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hobby Master. All rights reserved. <br /><br /><a target='_blank' href="https://www.linkedin.com/in/syedadnanali99/"><strong>Developed by Adnan</strong></a></p>
        </div>
        <div className="mt-4 lg:mt-8 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center space-x-4 lg:space-x-6 text-white">
            <span className="text-lg font-bold">Follow Us</span>
            <a href="https://www.youtube.com/channel/UC9wt9ih0-acWfeWXLI5oDIQ?sub_confirmation=1" target='_blank' className="text-2xl text-white hover:text-red-800"><FaYoutube /></a>
            <a href="https://www.instagram.com/hobbymaster24" target='_blank' className="text-2xl text-white hover:text-pink-400"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/hobby-master-real" target='_blank' className="text-2xl text-white hover:text-blue-700"><FaLinkedin /></a>
            <a href="https://github.com/Adnan-The-Coder" target='_blank' className="text-2xl text-white hover:text-black"><FaGithub /></a>
            <a href="https://whatsapp.com/channel/0029VacNUTs9sBI23zLCuO11" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-green-500"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
