import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative py-20 px-4 text-white overflow-hidden bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
      >
        {/* Left: Text content */}
        <div className="text-left md:pr-4">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight font-serif text-[#cca050] relative inline-block">
            whoami
            <span className="absolute -bottom-1 left-0 w-3/4 h-1 bg-[#305c98] rounded" />
          </h2>

          <p className="text-lg leading-relaxed text-white mb-4">
            I’m <span className="font-semibold text-[#cca050] hover:text-[#305c98] transition-colors">Austin Allen</span> — a full-stack developer with a creative edge and a background in real estate photography. After helping care for my mother during her cancer treatment, I dove headfirst into code and found my passion in bringing ideas to life with the MERN stack.
          </p>

          <p className="text-lg leading-relaxed text-white mb-4">
            Whether I'm designing sleek UIs, building powerful backends, or optimizing performance under the hood, I live for that “<span className="italic text-[#cca050] hover:text-[#305c98] transition-colors">it just works</span>” moment. I focus on building fast, accessible, and human-centered web experiences.
          </p>

          <p className="text-lg leading-relaxed text-white mb-6">
            Outside of coding, I create electronic music, explore Webflow-style animations, and dream of using tech to help clean up government corruption in New Mexico. I believe creativity and community should drive everything we build.
          </p>

          <p className="text-lg leading-relaxed text-white">
            Curious what I’m building?{' '}
            <a
              href="#projects"
              className="underline text-[#cca050] hover:text-[#305c98] transition-colors"
            >
              Check out my projects
            </a>.
          </p>
        </div>

        {/* Right: Profile image */}
        <div className="flex justify-center md:justify-center mt-24">
          <div className="p-1.5 rounded-2xl bg-[#305c98] inline-block border-4 border-[#cca050] shadow-lg">
            <img
              src="/images/profile.jpg"
              alt="Austin Allen"
              className="rounded-xl w-full max-w-[320px]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
