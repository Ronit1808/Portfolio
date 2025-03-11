import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6 text-white" />,
      url: "https://github.com/Ronit1808",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
      url: "https://www.linkedin.com/in/ronit-gupta-219003209/",
    },
    {
      name: "Gmail",
      icon: <Mail className="w-6 h-6 text-red-500" />,
      url: "mailto:ronit1808@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Contact me for collaboration
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl font-jost mx-auto">
          Have a question or want to work together? Drop me a message, and I’ll
          get back to you as soon as possible.
        </p>
      </motion.div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center lg:text-left">
            <p className="text-gray-300 text-base sm:text-lg font-jost">
              Thank you for taking the time to check out my portfolio. Feel free
              to contact me if you're interested in hiring me or if you'd like
              me to build a product for you.
            </p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 transition-all rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          action="https://formspree.io/f/xqaajovr"
          method="POST"
          className="bg-gray-800 p-4 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 p-3 w-full bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 p-3 w-full bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-2 p-3 w-full bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
