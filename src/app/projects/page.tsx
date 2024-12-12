import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

const Page = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Main container with flex layout */}
      <div className="flex items-center">
        {/* Image section on the left */}
        <div className='circle-frame mr-60 mt-20 ml-10'>
          <Image  
            style={{ width: '300px', height: '300px' }} 
            className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110" 
            src="/pexels-negativespace-92904.jpg" 
            alt="Profile Picture" 
            width={250} 
            height={250} 
          />
        </div>

        {/* Text section on the right */}
        <div className="flex-1 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-5xl font-serif text-teal-500 mt-20">My Projects</h1>
          <p className="mt-2 text-justify  text-3xl">
            Dive into my collection of projects,<br/> each crafted with precision and a <br/> 
            passion for technology showcasing my <br/> expertise in web development, design, <br/> and beyond.
          </p>
        </div>
      </div>
      <div className="mt-16 text-center">
  <h2 className="text-7xl text-teal-600 font-serif pt-9 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn">My Projects</h2>
  <div className="grid grid-cols-3 gap-10 mt-20 ml-30">
    {/* Skill Images with Text */}
    {[ 

{ src: "/resumes-desk.jpg", alt: "Static Interactive Resume", label: "Static Interactive Resume", languages: "HTML,CSS,JS,TS", link: "https://milestone1-2-wheat-nine.vercel.app/" },
{ src: "/istockphoto-1054790144-1024x1024.jpg", alt: "Dynamic Resume Builder", label: "Dynamic Resume Builder", languages: "HTML,CSS,JS,TS", link: "https://milestone-3-mu-five.vercel.app/" },
{ src: "/resume-apply-work-form-concept.jpg", alt: "Editable Resume Builder", label: "Editable Resume Builder", languages: "HTML,CSS,JS,TS", link: "https://milestone-4-ebon.vercel.app/" },
{ src: "/Capture 1.PNG", alt: "GIAIC-ID CARD", label: "GIAIC-ID CARD", languages: "NEXT.JS,TAILWIND CSS", link: "https://giaic-id-card-peach.vercel.app/" },
{ src: "/Company-Portfolio.jpg", alt: "Company Portfolio", label: "Company Portfolio", languages: "HTML,CSS,JS", link: "https://company-portfolio-website-sz4l.vercel.app/" },
{ src: "/pexels-grizzlybear-965879.jpg", alt: "Number Guessing Game", label: "Number Guessing Game", languages: "HTML, CSS", link: "https://number-guessing-game-alpha-lake.vercel.app/" },


   
    ].map((skill, index) => (
      <div key={index} className="flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:scale-110">
        <div className="w-70 h-80 flex items-center justify-center shadow-[0_0_15px_10px] shadow-teal-500 rounded-lg overflow-hidden">
          <Image 
            src={skill.src} 
            alt={skill.alt} 
            width={250}  // Fixed width to make images uniform
            height={300} // Fixed height to make images uniform
            className="object-cover" // Object cover to maintain consistent crop while filling container
          />
        </div>
        <p className="mt-8 text-2xl text-white">{skill.label}</p>
        <p className="text-lg text-slate-500">{`${skill.languages}`}</p>
        <a 
          href={skill.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-2 px-4 py-3 text-lg font-mono bg-teal-600 text-white rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-teal-400">View Project</a>
      </div>
    ))}
  </div>
</div>  
      <div className="flex justify-center mt-16">
        <Link href="/contact">
          <button className="px-4 py-2 bg-black text-white text-2xl font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;