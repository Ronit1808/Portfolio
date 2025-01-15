import React from "react";
import { Github, Instagram , Linkedin, Mail, Download, Send } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="min-h-screen text-white px-4 sm:px-16 pt-2 sm:pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold">
              <TypeAnimation
                sequence={[
                  "Welcome to my workspace.",
                  1000,
                  "Where ideas come to life.",
                  1000,
                  "Where innovation meets design.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
              />
            </h1>
            <motion.div className="flex flex-wrap justify-center lg:justify-start gap-4" variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors duration-300"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base border border-blue-600 hover:bg-blue-600/10 rounded-lg flex items-center gap-2 transition-colors duration-300"
              >
                <Send className="w-5 h-5" />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start space-y-8"
          >
            {/* Name and Role */}
            <motion.div>
              <h2 className="text-5xl lg:text-6xl font-jost mt-2 font-semibold">
                Ronit Gupta
              </h2>
              <h3 className="text-xl font-jost mt-2 text-gray-400">
                Full Stack Developer
              </h3>
            </motion.div>

            {/* Bio */}
            <p className="text-gray-300 font-jost max-w-lg text-center lg:text-left">
            I am a passionate full stack developer with expertise in creating dynamic and responsive web applications. Skilled in modern frameworks like React for the frontend and Django for the backend, I specialize in building robust, scalable, and user-centric solutions. With hands-on experience in integrating APIs, managing databases, and optimizing performance, I enjoy transforming ideas into seamless digital experiences. My goal is to deliver efficient and innovative solutions that make an impact.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
            <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
