import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-cover bg-right lg:bg-[15%] flex items-center"
    >
      <div className="container mx-auto px-10 lg:px-24 flex flex-col lg:flex-row items-center lg:justify-between space-y-12 lg:space-y-0">
        {/* Text Section */}
        <div
          className="flex flex-col text-center lg:text-left text-white"
          data-aos="fade-up"
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            I am
          </h1>
          <h2 className="text-teal-500 text-5xl lg:text-7xl font-extrabold font-['Lato']">
            Naila Solanki
          </h2>
          <p className=" lg:mt-4 max-w-lg lg:max-w-lg mx-auto lg:mx-0 text-lg lg:text-2xl text-justify">
            Welcome to my portfolio! Fueled by a passion for Technology and Education, 
            I&apos;m dedicated to crafting solutions that inspire, empower, and spark change. 
            Together, let&apos;s unlock new possibilities and shape the future.
          </p>

          {/* More About Me Button */}
          <div className="flex justify-center lg:justify-start mt-8 space-x-6">
            <Link href="/about">
              <button className="px-8 py-3 bg-black text-white text-lg font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
                <span className="relative">About Me</span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 bg-black text-white text-lg font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
                <span className="relative">Hire Me</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="circle-frame flex justify-center lg:justify-end">
          <Image
            className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 transform hover:rotate-y-180"
            src="/2024-02-13-02-09-13-384.jpg"
            alt="Profile Picture"
            width={300} // Larger width
            height={300} // Larger height
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;