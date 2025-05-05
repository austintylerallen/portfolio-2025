import './index.css';
import { motion } from 'framer-motion';
// import useLenisScroll from './lenis';
import Navbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Tech from './sections/Tech';
import Contact from './sections/Contact';
import Timeline from './sections/Timeline';         // ✅ NEW
import Testimonials from './sections/Testimonials'; // ✅ NEW
import Starfield from './components/Starfield';

const darkRainbowColors = [
  '#8e44ad', // deep purple
  '#305c98', // navy blue
  '#16a085', // muted teal
  '#cca050', // soft gold
  '#c0392b', // rich red
  '#8e44ad', // loop
];

function App() {
  const name = 'Austin Allen';

  return (
    <main className="text-white relative overflow-x-hidden">
      <Starfield />
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: "url('/images/skyherosection.jpg')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="flex flex-wrap justify-center gap-1 md:gap-2 text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-md">
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                animate={{
                  color: darkRainbowColors,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                  delay: index * 0.2, // wave effect
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          <p className="mt-4 text-lg md:text-xl font-light max-w-xl drop-shadow">
            I build immersive full-stack experiences that blend design, code, and creativity.
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="tech">
        <Tech />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
