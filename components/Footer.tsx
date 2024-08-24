import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub,FaYoutube,FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


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
            <p> <a href='mailto:syedadnanali0106@gmail.com'>Email: syedadnanali0106@gmail.com</a></p>
            {/* <p>Phone: 123-456-7890</p> */}
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <ul className="flex space-x-4">
              <li><a href="https://www.youtube.com/channel/UC9wt9ih0-acWfeWXLI5oDIQ?sub_confirmation=1" target='_blank' className="text-2xl text-white hover:text-red-800"><FaYoutube /></a></li>
              <li><a href="https://www.instagram.com/hobbymaster24" target='_blank' className="text-2xl text-white hover:text-pink-400"><FaInstagram /></a></li>
              {/* <li><a href="https://twitter.com/" target='_blank' className="text-2xl text-white hover:text-black"><FaXTwitter /></a></li> */}
              <li><a href="https://www.linkedin.com/in/hobby-master-real" target='_blank' className="text-2xl text-white hover:text-blue-700"><FaLinkedin /></a></li>
              <li><a href="https://github.com/Adnan00786/" target='_blank' className="text-2xl text-white hover:text-black"><FaGithub /></a></li>
              <li> <a href="https://whatsapp.com/channel/0029VacNUTs9sBI23zLCuO11" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-green-500"><FaWhatsapp className="contact-icon" size={25} /></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hobby Master. All rights reserved. <br /><br /><a target='_blanck' href="https://www.linkedin.com/in/syedadnanali99/"><strong>Developed by Adnan</strong></a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
