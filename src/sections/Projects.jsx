// import React, { useRef, useState, useEffect } from 'react';
// import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
// // import useLenisScroll from '../lenis'; // disabled for now

// const projects = [
//   {
//     title: 'Effy Exotics',
//     description: 'Immersive, scroll-reactive e-commerce for a boutique cannabis lifestyle brand.',
//     highlights: [
//       'Hero parallax + vertical gallery',
//       'Sanity CMS → instant edits',
//       'Dutchie API checkout',
//       'Full-page Framer-Motion transitions',
//     ],
//     stack: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'Sanity', 'Dutchie API'],
//     role: 'Solo Front-End & Motion Dev',
//     year: 2025,
//     img: '/images/effy-exotics-preview.png',
//     gradient: 'from-[#bf9a31] to-[#1a1a1a]',
//     accent: 'text-pink-200',
//     link: 'https://effyexotics.com',
//     repo: 'https://github.com/your-github/effy-exotics',
//   },
//   {
//     title: 'CivicStack',
//     description: 'Municipal admin portal replacing five legacy tools with one responsive SPA.',
//     highlights: [
//       'Drag-and-drop Kanban',
//       'Role-based dashboards',
//       'WebSocket notifications + audit log',
//       'CSV / PDF export',
//     ],
//     stack: ['React', 'Node', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind', 'JWT'],
//     role: 'Full-Stack Lead',
//     year: 2025,
//     img: '/images/civicstack-preview.png',
//     gradient: 'from-[#15202e] to-[#1f1f1f]',
//     accent: 'text-[#cca050]',
//     link: 'https://civicstack-demo.onrender.com',
//     repo: 'https://github.com/your-github/civicstack',
//   },
//   {
//     title: 'Procrastinot',
//     description: 'A playful productivity app built to manage to-dos in themed lanes with drag-and-drop status control.',
//     highlights: [
//       'Status-based task sorting (To-Do, Working, Completed)',
//       'Firebase authentication and real-time updates',
//       'Responsive layout with dynamic theme styling',
//       'Animated transitions for task movement',
//     ],
//     stack: ['React', 'TailwindCSS', 'Firebase', 'Framer Motion'],
//     role: 'Full-Stack Developer',
//     year: 2024,
//     img: '/images/procrastinot-preview.png',
//     gradient: 'from-[#7e3af2] to-[#111827]',
//     accent: 'text-purple-300',
//     link: 'https://procrastinot-demo.com',
//     repo: 'https://github.com/your-github/procrastinot',
//   },
//   {
//     title: 'MythWeaver',
//     description: 'A choose-your-own-adventure platform where users can write and explore stories by genre, bookmark favorites, and shape narratives with dynamic prompts.',
//     highlights: [
//       'Genre-based story filtering for writers and readers',
//       'User reviews tied to stories and profiles',
//       'Interactive story flow with user-driven prompts',
//       'Profile management with bookmarked & to-read lists',
//     ],
//     stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JWT'],
//     role: 'Full-Stack Developer',
//     year: 2024,
//     img: '/images/mythweaver-preview.png',
//     gradient: 'from-[#14532d] to-[#0f172a]',
//     accent: 'text-green-300',
//     link: 'https://mythweaver-demo.com',
//     repo: 'https://github.com/your-github/mythweaver',
//   },
// ];

// export default function Projects() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const itemRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = Number(entry.target.getAttribute('data-index'));
//             setActiveIndex(index);
//           }
//         });
//       },
//       {
//         root: null,
//         threshold: 0.5,
//       }
//     );

//     itemRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       itemRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <section className="relative h-screen w-full text-white flex overflow-hidden bg-transparent">
//       <motion.h2
//         initial={{ opacity: 0, y: -10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="absolute top-12 inset-x-0 mx-auto text-center z-20 text-5xl font-bold tracking-wide uppercase text-white"
//       >
//         Curated Work
//       </motion.h2>
//       {/* Left: Scrollable Screenshots */}
//       <div className="relative w-1/2 h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar z-10">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             ref={(el) => (itemRefs.current[index] = el)}
//             data-index={index}
//             className="h-screen snap-start flex items-center justify-center"
//           >
//             <motion.div
//               initial={{ opacity: 0.5, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ scale: 1.02, rotate: 1 }}
//               transition={{ type: 'spring', stiffness: 200, damping: 20 }}
//               className={`w-[85%] max-w-xl rounded-2xl p-4 shadow-xl border border-white/10 bg-gradient-to-br ${project.gradient}`}
//             >
//               <img
//                 src={project.img}
//                 alt={project.title}
//                 loading="lazy"
//                 className="rounded-xl border border-white/20 w-full shadow"
//               />
//             </motion.div>
//           </div>
//         ))}
//       </div>

//       {/* Right: Pinned Text Panel */}
//       <div className="w-1/2 h-full sticky top-0 flex items-center justify-center px-10 bg-transparent z-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={projects[activeIndex]?.title}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="max-w-md"
//           >
//             <div className="mb-2 text-sm text-gray-400">
//               {projects[activeIndex].role} · {projects[activeIndex].year}
//             </div>
//             <h3 className={`text-2xl font-semibold mb-3 ${projects[activeIndex].accent}`}>
//               {projects[activeIndex].title}
//             </h3>
//             <p className="text-gray-300 text-sm mb-4">
//               {projects[activeIndex].description}
//             </p>
//             <ul className="list-disc ml-5 mb-4 text-sm space-y-1">
//               {projects[activeIndex].highlights.map((h, i) => (
//                 <li key={i}>{h}</li>
//               ))}
//             </ul>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {projects[activeIndex].stack.map((tag) => (
//                 <span key={tag} className="bg-white/10 px-3 py-1 rounded-full text-xs">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <div className="flex gap-4">
//               <a
//                 href={projects[activeIndex].link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-teal-400 hover:underline font-medium"
//               >
//                 Live Site →
//               </a>
//               <a
//                 href={projects[activeIndex].repo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:underline font-medium"
//               >
//                 Code ↗
//               </a>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }


import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const projects = [
  {
    title: 'Austin Tyler Photography',
    description: 'A polished portfolio site for real estate photography services with service packages and booking CTA.',
    highlights: [
      'Fully responsive design with scroll animations',
      'Custom photo galleries for each property type',
      'Tailored content management and SEO optimization',
      'Call-to-action funnel for client bookings',
    ],
    stack: ['React', 'TailwindCSS', 'Framer Motion'],
    role: 'Solo Developer & Designer',
    year: 2025,
    img: '/images/austintylerphoto-preview.png',
    gradient: 'from-[#305c98] to-[#1a1a1a]',
    accent: 'text-blue-300',
    link: 'https://austintylerphoto.com',
    repo: 'https://github.com/austintylerallen/austintylerphotography',
  },
  {
    title: 'Effy Exotics',
    description: 'Immersive, scroll-reactive e-commerce for a boutique cannabis lifestyle brand.',
    highlights: [
      'Hero parallax + vertical gallery',
      'Sanity CMS → instant edits',
      'Dutchie API checkout',
      'Full-page Framer-Motion transitions',
    ],
    stack: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'Sanity', 'Dutchie API'],
    role: 'Solo Front-End & Motion Dev',
    year: 2025,
    img: '/images/effy-exotics-preview.png',
    gradient: 'from-[#bf9a31] to-[#1a1a1a]',
    accent: 'text-pink-200',
    link: 'https://effyexotics.com',
    repo: 'https://github.com/your-github/effy-exotics',
  },
  {
    title: 'CivicStack',
    description: 'Municipal admin portal replacing five legacy tools with one responsive SPA.',
    highlights: [
      'Drag-and-drop Kanban',
      'Role-based dashboards',
      'WebSocket notifications + audit log',
      'CSV / PDF export',
    ],
    stack: ['React', 'Node', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind', 'JWT'],
    role: 'Full-Stack Lead',
    year: 2025,
    img: '/images/civicstack-preview.png',
    gradient: 'from-[#15202e] to-[#1f1f1f]',
    accent: 'text-[#cca050]',
    link: 'https://civicstack-demo.onrender.com',
    repo: 'https://github.com/austintylerallen/civicstack',
  },
  {
    title: 'Procrastinot',
    description: 'A playful productivity app built to manage to-dos in themed lanes with drag-and-drop status control.',
    highlights: [
      'Status-based task sorting (To-Do, Working, Completed)',
      'Firebase authentication and real-time updates',
      'Responsive layout with dynamic theme styling',
      'Animated transitions for task movement',
    ],
    stack: ['React', 'TailwindCSS', 'Firebase', 'Framer Motion'],
    role: 'Full-Stack Developer',
    year: 2024,
    img: '/images/procrastinot-preview.png',
    gradient: 'from-[#7e3af2] to-[#111827]',
    accent: 'text-purple-300',
    link: 'https://procrastinot-austin.onrender.com',
    repo: 'https://github.com/austintylerallen/procrastinot-austin',
  },
  {
    title: 'MythWeaver',
    description: 'A choose-your-own-adventure platform where users can write and explore stories by genre, bookmark favorites, and shape narratives with dynamic prompts.',
    highlights: [
      'Genre-based story filtering for writers and readers',
      'User reviews tied to stories and profiles',
      'Interactive story flow with user-driven prompts',
      'Profile management with bookmarked & to-read lists',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JWT'],
    role: 'Full-Stack Developer',
    year: 2024,
    img: '/images/mythweaver-preview.png',
    gradient: 'from-[#14532d] to-[#0f172a]',
    accent: 'text-green-300',
    link: 'https://mythweaver-demo.com',
    repo: 'https://github.com/your-github/mythweaver',
  },
];


export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="relative h-screen w-full text-white flex bg-transparent">

  <div className="mx-auto max-w-screen-xl h-full flex items-stretch gap-2 px-4">


      {/* Section Title */}
      <FadeInWhenVisible direction="up" delay={0.2}>
  <motion.h2
    className="absolute top-12 inset-x-0 mx-auto z-20 text-center leading-tight"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <span className="block text-sm uppercase tracking-widest text-[#cca050] font-medium">
      Selected Projects
    </span>
    <span className="block text-4xl md:text-6xl font-extrabold text-white mt-1 font-serif">
      Solutions in Motion
    </span>
  </motion.h2>
</FadeInWhenVisible>


      {/* Left: Scrollable Screenshots */}
      <div className="relative w-[55%] h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar z-10">


        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            className="h-screen snap-start flex items-center justify-center"
          >
            <FadeInWhenVisible delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className={`w-[85%] max-w-xl rounded-2xl p-4 shadow-xl border border-white/10 bg-gradient-to-br ${project.gradient}`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="rounded-xl border border-white/20 w-full shadow"
                />
              </motion.div>
            </FadeInWhenVisible>
          </div>
        ))}
      </div>

      {/* Right: Pinned Text Panel */}
      <div className="w-[48%] h-full sticky top-0 flex items-center justify-start px-4 bg-transparent z-10">

        <FadeInWhenVisible direction="right" key={projects[activeIndex]?.title}>
          <motion.div
            key={projects[activeIndex]?.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg"
          >
            <div className="mb-2 text-sm text-gray-400">
              {projects[activeIndex].role} · {projects[activeIndex].year}
            </div>
            <h3 className={`text-2xl font-semibold mb-3 ${projects[activeIndex].accent}`}>
              {projects[activeIndex].title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {projects[activeIndex].description}
            </p>
            <ul className="list-disc ml-5 mb-4 text-sm space-y-1">
              {projects[activeIndex].highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[activeIndex].stack.map((tag) => (
                <span key={tag} className="bg-white/10 px-3 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={projects[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline font-medium"
              >
                Live Site →
              </a>
              <a
                href={projects[activeIndex].repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline font-medium"
              >
                Code ↗
              </a>
            </div>
          </motion.div>
        </FadeInWhenVisible>
      </div>
      </div>


    </section>
  );
}
