// Timeline.jsx
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2016–2022',
    title: 'Real Estate Photographer',
    description:
      'Founded and ran a successful photography business in New Mexico, specializing in residential and commercial real estate media with rapid next-day delivery.',
  },
  {
    year: '2023',
    title: 'Full-Stack Developer in Training',
    description:
      'Completed the University of Denver’s IDX Full-Stack Coding Bootcamp while serving as a full-time caregiver — built MERN-stack apps and honed problem-solving under pressure.',
  },
  {
    year: '2024',
    title: 'Freelance Developer & Civic Tech Builder',
    description:
      'Launched CivicStack: a full-featured municipal platform with dashboards, role-based auth, audit logs, and live metrics. Also developed production-grade client sites with React, Node.js, and Tailwind.',
  },
  {
    year: '2025',
    title: 'Building & Seeking Impactful Work',
    description:
      'Currently building civic and community-focused tools while actively seeking full-time or contract roles in full-stack or mission-driven development.',
  },
];


export default function Timeline() {
  return (
    <section className="py-20 px-6 text-white bg-transparent">
     <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <span className="block text-sm tracking-widest uppercase text-[#cca050] font-medium">
    Professional Timeline
  </span>
  <span className="block text-4xl md:text-6xl font-extrabold text-white mt-2 leading-tight font-serif">
    The Road So Far
  </span>
</motion.h2>

      <div className="max-w-3xl mx-auto border-l border-white/20 pl-6 space-y-12">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[1.15rem] top-1.5 w-4 h-4 bg-[#112240] rounded-full border-2 border-white" />
            <h3 className="text-xl font-semibold">{item.year} — {item.title}</h3>
            <p className="text-gray-400 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
