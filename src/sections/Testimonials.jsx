import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Austin transformed our vision into a stunning, scroll-reactive website. Smooth, fast, and way ahead of schedule.",
    name: "Guillermo · Effy Exotics",
  },
  {
    quote:
      "He built a full civic workflow system that replaced five outdated tools — the dashboard UX alone is next-level.",
    name: "Catrina Godinez · City of Las Cruces",
  },
  {
    quote:
      "One of the few developers who really gets design, animation, and backend all in one brain. Super reliable.",
    name: "Freelance Client · Creative Director",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 text-white bg-transparent">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 leading-tight"
      >
        <span className="block text-sm uppercase tracking-widest text-[#cca050] font-medium">
          Client Feedback
        </span>
        <span className="block text-4xl md:text-6xl font-extrabold text-white mt-2 font-serif">
          Trusted by Teams & Creatives
        </span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#121620] p-6 rounded-2xl shadow-lg border border-white/10 hover:border-[#cca050]/40 transition-all"
          >
            <p className="text-lg text-gray-300 italic mb-4 leading-relaxed">“{t.quote}”</p>
            <p className="text-sm font-semibold text-[#cca050]">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
