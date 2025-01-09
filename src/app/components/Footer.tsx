import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineMail} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-2 mt-6">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-2xl">Connect with me:</p>
        <div className="flex justify-center space-x-6">
          
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={40} />
          </a>
          
          {/* YouTube Link */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <CiYoutube size={40} />
          </a>

          {/* LinkedIn Link */}
          <a
            href="httpa://www.linkedin.com/in/naila-solanki-a77425337"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={40} />
          </a>

          {/* Email Link */}
          <a
            href="mailto:rozsolanki2@gmail.com"
            className="hover:text-gray-600 flex gap-1 items-center"
          >
            <MdOutlineMail size={40} />
          </a>
        </div>
        
        {/* Footer text */}
        <p className="mt-4 text-lg">&copy; 2024 Naila Solanki. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;