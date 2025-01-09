import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="container mx-auto p-20">
      {/* Skills Section */}
      <div className="mt-16 text-center">
        <h2 className="text-7xl text-teal-600 font-serif pt-8 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-20 ml-10 ">
          {[
            { src: "/img-1.png", alt: "JavaScript", label: "JavaScript" },
            { src: "/img-3.png", alt: "HTML", label: "HTML" },
            { src: "/img-5.png", alt: "CSS", label: "CSS" },
            { src: "/img-4.png", alt: "TypeScript", label: "TypeScript" },
            { src: "/img-7.png", alt: "VS Code", label: "VS Code" },
            { src: "/img-9.png", alt: "Node.js", label: "Node.js" },
            { src: "/img-6.png", alt: "Next.js", label: "Next.js" },
            { src: "/img-10.png", alt: "React", label: "React" },
            { src: "/img-11.png", alt: "Tailwind", label: "Tailwind" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:scale-110"
            >
              <div className="w-28 h-28 flex items-center justify-center shadow-[0_0_15px_10px] shadow-teal-500 rounded-lg">
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="mt-5 mb-8 text-2xl text-white">{skill.label}</p>
            </div>
          ))}
        </div>

        {/* Explore My projects Button */}
        <div className="mt-12 text-center">
          <Link href="/projects">
            <button className="px-6 py-4 bg-black text-white text-lg font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
              <span className="relative">My Projects</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;