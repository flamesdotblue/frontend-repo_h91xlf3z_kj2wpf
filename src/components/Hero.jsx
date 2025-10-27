import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const phrases = [
  'Ship faster with autonomous workflows',
  'Reduce toil with AI decisioning',
  'Orchestrate anything with ease',
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-[#0b0b12] text-white">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-600/30 via-purple-600/20 to-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-fuchsia-600/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-36 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-500" />
          <span className="text-sm text-white/80">AI-powered automation for modern teams</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="text-center text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
        >
          Automate the Future
          <span className="bg-[linear-gradient(90deg,#f0abfc,45%,#a78bfa,65%,#818cf8)] bg-clip-text text-transparent"> with AI</span>
        </motion.h1>

        <div className="relative mt-4 h-8 md:h-9">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl px-2 text-center text-sm text-white/70 md:text-lg"
            >
              {phrases[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-500/20 transition hover:shadow-fuchsia-500/30"
          >
            <span className="absolute inset-0 -z-0 rounded-xl bg-white/10 opacity-0 blur-md transition group-hover:opacity-100" />
            <span className="relative z-10">Get Started</span>
          </a>
          <a
            href="#features"
            className="relative inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            Live Demo
          </a>
        </motion.div>
      </div>

      {/* Spline Scene */}
      <div className="relative mt-12 h-[560px] w-full md:mt-16">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to blend with background without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent" />
      </div>

      {/* Subtle bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-fuchsia-500/10 via-purple-500/5 to-transparent" />
    </section>
  );
};

export default Hero;
