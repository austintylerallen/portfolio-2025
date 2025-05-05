import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import {
  SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiTailwindcss, SiRedux, SiGraphql, SiPostgresql,
  SiFirebase, SiFramer, SiGithub, SiNextdotjs,
  SiVite, SiWebpack, SiHeroku, SiJest, SiEslint,
  SiJsonwebtokens, SiPassport, SiRender
} from 'react-icons/si';
import { FaGulp, FaLock, FaTerminal, FaKey } from 'react-icons/fa';

const techStack = [
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-400" /> },
  { name: 'GSAP', icon: <FaGulp className="text-green-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-300" /> },
  { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'JWT', icon: <SiJsonwebtokens /> },
  { name: 'OAuth 2.0', icon: <FaKey /> },
  { name: 'Passport.js', icon: <SiPassport /> },
  { name: 'Bcrypt', icon: <FaLock /> },
  { name: 'Bash / Shell', icon: <FaTerminal /> },
  { name: 'Git / GitHub', icon: <SiGithub /> },
  { name: 'REST APIs', icon: <SiJsonwebtokens /> },
  { name: 'Jest', icon: <SiJest className="text-red-400" /> },
  { name: 'ESLint', icon: <SiEslint className="text-purple-400" /> },
  { name: 'Render', icon: <SiRender className="text-indigo-300" /> },
  { name: 'Heroku', icon: <SiHeroku className="text-purple-600" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
  { name: 'Webpack', icon: <SiWebpack className="text-blue-300" /> }
];

const Tech = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const smoothRotate = useSpring(rotate, { stiffness: 50, damping: 20 });

  return (
    <section
      id="tech"
      ref={ref}
      className="pt-0 pb-16 px-4 text-white text-center relative overflow-hidden bg-transparent"
    >
      <div className="relative w-80 h-80 lg:w-84 lg:h-84 mx-auto overflow-hidden z-0">
        <motion.img
          src="/images/devgraphic.png"
          alt="3D Glossy Developer Tech Visual"
          className="w-full h-full object-contain"
          style={{ rotate: smoothRotate }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, #000203 85%, #000203 100%)'
          }}
        />
      </div>

      <FadeInWhenVisible>
      <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="-mt-12 mb-12 z-10 relative text-center"
>
  <span className="block text-sm uppercase tracking-widest text-[#cca050] font-medium">
    Toolset & Technologies
  </span>
  <span className="block text-4xl md:text-6xl font-extrabold text-white mt-2 font-serif leading-tight">
    My Developer Stack
  </span>
</motion.h2>

      </FadeInWhenVisible>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        {techStack.map(({ name, icon }, i) => (
          <FadeInWhenVisible delay={i * 0.05} key={name}>
            <span className="bg-[#1f1f1f] hover:bg-[#2a2a2a] transition px-4 py-2 rounded-full text-sm font-medium shadow inline-flex items-center gap-2">

              {icon} {name}
            </span>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};

export default Tech;
