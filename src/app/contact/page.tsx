'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';  
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState<string>(''); // State for submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status message before trying to send the email
    setStatusMessage('');

    // Send email using emailjs
    emailjs.send(
      'service_acl9l2a',        // Service ID
      'template_03mwo9y',       // Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      },
      'kO2kI8RX-5z7UgX4g'       // Public Key
    )
    .then((response) => {
      console.log('Message sent successfully', response);
      setStatusMessage('Your message has been sent successfully!'); // Success message
    })
    .catch((error) => {
      console.log('Failed to send message', error);
      setStatusMessage('Oops! Something went wrong. Please try again.'); // Error message
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black pt-20 gap-40 ">
      {/* Left Side - Image */}
      <div className="circle-frame mb-8 md:mb-0 mt-0">
        <Image
          src="/pexels-tracy-le-blanc-67789-607812.jpg"  // Corrected path and Image component usage
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
        <p className="text-2xl text-white text-center mt-6 mb-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
          I&apos;d love to hear from you!<br/> Fill out the form and let us connect
        </p>
        {/* Buttons Container */}
        <div className="flex justify-center space-x-9 mt-8">
          {/* Discover My Success Button */}
          <Link href="/guides">
            <button className="px-1 py-2 bg-black text-white text-lg font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
              <span className="relative">Discover my Success</span>
            </button>
          </Link>

          {/* Download Resume Button */}
          <Link href="https://milestone1-2-wheat-nine.vercel.app/">
            <button className="px-2 py-2 bg-black text-white text-lg font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
              <span className="relative">Download Resume</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/3 w-full bg-gray-900 p-6 rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-5xl font-bold text-teal-400 mb-6 text-center md:text-left">
          Get in Touch
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name Field */}
          <div className="relative">
            <label htmlFor="name" className="block text-lg font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-1 border border-gray-600 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="block text-lg font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-1 border border-gray-600 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white"
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <label htmlFor="message" className="block text-lg font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-1 border border-gray-600 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 text-2xl bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <div className="mt-4 text-center text-lg text-teal-400">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;