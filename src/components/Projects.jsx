import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import wristlyimg from "../assets/Wristly-img.jpg";
import getitimg from "../assets/Getit-img.jpg";
import blogmagicimg from "../assets/Blogmagic-img.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Wristly",
      tech: ["React", "Tailwind", "React Router" ,"Netlify"],
      description:
        "Wristly is a sleek and modern e-commerce frontend application designed for wristwatch enthusiasts. It offers a seamless user experience with visually appealing designs, developed using the latest web technologies.",
      image: wristlyimg,
      githubLink: "https://github.com/Ronit1808/Wristly",
      liveLink: "https://wristly.netlify.app/",
    },
    {
      id: 2,
      title: "GETIT",
      tech: ["React", "Tailwind", "Django", "Django RestFramework" ,"Razorpay API" , "Netlify" , "Render"],
      description:
        "E-Commerce Website for Gaming Accessories. This project is a full-stack e-commerce website where users can buy gaming accessories. The application provides a seamless shopping experience with a modern user interface and secure backend functionality.",
      image: getitimg,
      githubLink: "https://github.com/Ronit1808/GETIT-Frontend",
      liveLink: "https://getit1.netlify.app",
    },
    {
      id: 3,
      title: "BlogMagic",
      tech: ["React", "Django", "Django RestFramework" , "Google Gemini AI", "PostgreSQL" , "Netlify" , "Render"],
      description:
        "BlogMagic is an AI-powered blogging application that simplifies the process of creating, editing, and managing blogs. The app leverages modern technologies and AI to enable users to craft engaging content effortlessly.",
      image: blogmagicimg,
      githubLink: "https://github.com/Ronit1808/BlogMagic",
      liveLink: "https://blogmagic.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore some of the projects I’ve worked on, showcasing my full-stack development skills and problem-solving abilities.
        </p>
      </div>

      {/* Projects Container */}
      <div className="flex sm:px-10 flex-col gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex flex-col lg:flex-row items-center gap-8 p-6 rounded-lg ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Text Section */}
            <div className="flex-1 lg:text-left">
              <h3 className="text-2xl sm:text-4xl font-bold py-2 mb-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">{project.title}</h3>
              <p className="text-gray-200 text-sm sm:text-lg font-jost my-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-white/20 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Links */}
              <div className="flex gap-4 justify-center mt-4">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github size={20} />
                  Source Code
                </motion.a>
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink size={20} />
                  Live Link
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
