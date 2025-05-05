import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 text-white text-center"
      style={{ backgroundColor: '#000203' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10 leading-tight"
      >
        <span className="block text-sm uppercase tracking-widest text-[#cca050] font-medium">
          Let’s Connect
        </span>
        <span className="block text-4xl md:text-6xl font-extrabold text-white mt-2 font-serif">
          Get in Touch
        </span>
      </motion.h2>

      <FadeInWhenVisible direction="up" delay={0.2}>
        <p className="mb-10 max-w-xl mx-auto text-lg text-gray-300">
          Interested in collaborating, hiring, or just saying hi? I’m always open to new projects, civic impact work, or creative challenges.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible direction="up" delay={0.4}>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:austintallen07@gmail.com"
            className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
          >
            <FaEnvelope /> Email Me
          </a>
          <a
            href="https://linkedin.com/in/austintylerallen1234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-white hover:text-black transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/austintylerallen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-white hover:text-black transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Contact;
