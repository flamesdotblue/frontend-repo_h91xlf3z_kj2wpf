import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'This platform transformed our operations. We ship faster and spend less time on repetitive tasks.',
    name: 'Ava Thompson',
    title: 'Head of Operations, NovaTech'
  },
  {
    quote:
      'The AI routing is next-level. Our alerts are smarter, and our team stays focused on impact.',
    name: 'Liam Carter',
    title: 'Engineering Manager, Orbit Labs'
  },
  {
    quote:
      'Setup was unbelievably quick. We automated onboarding flows in a single afternoon.',
    name: 'Maya Patel',
    title: 'People Ops, StellarHQ'
  },
  {
    quote:
      'From idea to production in days, not weeks. Plus, the UI is gorgeous and a joy to use.',
    name: 'Noah Williams',
    title: 'Founder, Shift Systems'
  }
];

const Testimonials = () => {
  return (
    <section className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-64 w-[70%] -translate-x-1/2 bg-gradient-to-t from-purple-600/20 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-5xl"
        >
          Loved by Modern Teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-center text-white/70"
        >
          Real stories from people who automated the boring, and built what matters.
        </motion.p>

        {/* Carousel */}
        <div className="relative mt-12 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 22, ease: 'linear' }}
            className="flex w-[200%]"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="mx-3 w-[calc(25%-0.75rem)] min-w-[280px] flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-3 flex items-center gap-1 text-fuchsia-300">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-white/80">“{t.quote}”</p>
                <div className="mt-4 text-sm text-white/60">
                  <span className="font-medium text-white/80">{t.name}</span> — {t.title}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
