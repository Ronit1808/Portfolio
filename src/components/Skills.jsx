import React from 'react';
import { motion } from 'framer-motion';
import Html from '../assets/html-5.png';
import Css from '../assets/css-3.png';
import Js from '../assets/js.png';
import react from '../assets/reactjs.png';
import Node from '../assets/nodejs.png';
import django from '../assets/Django.png';
import Postgres from '../assets/postgre.png';
import djangorest from '../assets/djangorest.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import python from '../assets/python.png';
import Tailwind3 from '../assets/Tailwind3.png';

const Skills = () => {
  const tools = [
    { name: 'Html', icon: Html },
    { name: 'CSS', icon: Css },
    { name: 'JavaScript', icon: Js },
    { name: 'React', icon: react },
    { name: 'TailwindCSS', icon: Tailwind3 },
    { name: 'NodeJS', icon: Node },
    { name: 'Python', icon: python },
    { name: 'Django', icon: django },
    { name: 'DRF', icon: djangorest },
    { name: 'PostgreSQL', icon: Postgres },
    { name: 'Github', icon: github },
    { name: 'Git', icon: git },
  ];

  return (
    <section id='skills' className="min-h-screen text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 font-jost text-white">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-jost max-w-2xl mx-auto">
            A curated collection of tools and technologies I use to build engaging, functional, and scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center gap-3">
                {/* Icon */}
                <img className="w-16 h-16 object-contain" src={tool.icon} alt={tool.name} />
                {/* Name */}
                <h3 className="text-sm sm:text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
