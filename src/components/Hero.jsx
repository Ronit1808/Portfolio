import React from "react";
import { Github, Linkedin, Mail, Download, Send } from "lucide-react";
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
      className="min-h-screen text-white px-4 sm:px-16 sm:pt-16"
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
            <div className="h-24 flex items-center">
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
                  className="bg-gradient-to-l from-gray-700 to-gray-400 bg-clip-text text-transparent"
                />
              </h1>
            </div>

            <motion.div
              className="flex flex-wrap justify-center pt-8 lg:justify-start gap-4"
              variants={itemVariants}
            >
              <a
                href="/RonitGupta_Dev.pdf"
                download="RonitGupta_Dev.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-3 sm:px-6 bg-gradient-to-r text-sm sm:text-base from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.button>
              </a>

              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-3 sm:px-6 bg-gradient-to-r text-sm sm:text-base from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition duration-300 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Contact Me
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start space-y-8"
          >
            {/* Name and Role */}
            <motion.div>
              <h2 className="text-5xl lg:text-6xl font-jost mt-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                Ronit Gupta.
              </h2>
              <h3 className="text-xl font-jost mt-2 text-gray-400">
                Full Stack Developer
              </h3>
            </motion.div>

            {/* Bio */}
            <p className="text-gray-300 font-jost max-w-lg text-center lg:text-left">
              I am a passionate full stack developer with expertise in creating
              dynamic and responsive web applications. Skilled in modern
              frameworks like React.js and Next.js for the frontend and Django and express.js for the
              backend, I specialize in building robust, scalable, and
              user-centric solutions. With hands-on experience in integrating
              APIs, managing databases, and optimizing performance, I enjoy
              transforming ideas into seamless digital experiences. My goal is
              to deliver efficient and innovative solutions that make an impact.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/Ronit1808"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/ronit-gupta-219003209/"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:ronit1808@gmail.com"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Email Contact"
                target="_blank"
                rel="noopener noreferrer"
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
