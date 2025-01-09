import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-cover bg-right lg:bg-[15%] flex items-center">
      {/* About Section */}
      <div className="container mx-auto px-10 lg:px-24 flex flex-col lg:flex-row items-center lg:justify-between space-y-12 lg:space-y-0">
        <div className="flex flex-col text-center lg:text-left text-white">
          <h1 className="text-teal-500 text-5xl lg:text-7xl font-extrabold font-['Lato']">About Me</h1>
          <p className="lg:mt-4 max-w-lg lg:max-w-lg mx-auto lg:mx-0 text-lg lg:text-2xl text-justify">
            Welcome to my portfolio! I&apos;m Naila, a dedicated professional on a journey of continuous growth 
            and exploration in the world of technology.
          </p>
          <p className="lg:mt-4 max-w-lg lg:max-w-lg mx-auto lg:mx-0 text-lg lg:text-2xl text-justify">
            Driven by curiosity and innovation, I&apos;m mastering JavaScript, TypeScript, React, Next.js, HTML, and CSS
            through advanced courses in AI, Web 3.0, and the Metaverse.
            My experience as a content writer for a USA-based company fuels my passion for creating impactful stories in tech.
          </p>
          <p className="lg:mt-4 max-w-lg lg:max-w-lg mx-auto lg:mx-0 text-lg lg:text-2xl text-justify">
            Always eager for new challenges, I embrace opportunities to innovate and inspire. 
            Join me as I explore this exciting landscape!
          </p>
        </div>
           {/*Button Section */}
        <div className="flex justify-center lg:justify-start mt-8 space-x-6"></div>
          <Link href="/skills">
              <button className="px-8 py-3 bg-black text-white text-lg font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
                <span className="relative">My Skills</span>
              </button>
            </Link>

        <div className="circle-frame flex justify-center lg:justify-end">
          <Image
            src="/2024-02-13-02-09-13-384.jpg"
            width={300}
            height={300}
            alt="Profile Picture"
            className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          
        </div>
      </div>
      </div>
  )};
export default About;