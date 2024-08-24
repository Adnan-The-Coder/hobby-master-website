"use client";
import { FiMail, FiInstagram, FiLinkedin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";

const Contactpage = () => {
  return (
    <>
      <Navbar2 />
      <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-100 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full p-4">
          <a href="mailto:syedadnanali0106@gmail.com" className="text-black contact-link bg-white p-4 rounded-lg flex items-center justify-center shadow-md transition duration-300 hover:bg-blue-500">
            <FiMail className="text-black contact-icon mr-2" size={30} />
            Email
          </a>
          <a href="https://www.instagram.com/hobbymaster24" className="text-black contact-link bg-white p-4 rounded-lg flex items-center justify-center shadow-md transition duration-300 hover:bg-gradient-to-l from-pink-900 via-orange-700 to-red-500" target="_blank" rel="noopener noreferrer">
            <FiInstagram className="contact-icon mr-2" size={30} />
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/hobbymaster24/" className="text-black contact-link bg-white p-4 rounded-lg flex items-center justify-center shadow-md transition duration-300 hover:bg-blue-400" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="contact-icon mr-2" size={30} />
            LinkedIn
          </a>
          <a href="https://whatsapp.com/channel/0029VacNUTs9sBI23zLCuO11" className="text-black contact-link bg-white p-4 rounded-lg flex items-center justify-center shadow-md transition duration-300 hover:bg-green-400" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="contact-icon mr-2" size={30} />
            WhatsApp
          </a>
          <a href="https://x.com/hobbymaster24" className="text-black contact-link bg-white p-4 rounded-lg flex items-center justify-center shadow-md transition duration-300 hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="contact-icon mr-2" size={30} />
            X(Twitter)
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactpage;
