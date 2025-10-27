import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b12] text-white">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-600/30 via-purple-600/20 to-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-fuchsia-600/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 md:pt-24">
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
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"> with AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-4 max-w-2xl text-center text-base text-white/70 md:text-lg"
        >
          Build, orchestrate, and scale automations across your stack. Intelligent triggers, no-code workflows, and realtime insights — all in one sleek platform.
        </motion.p>

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
      <div className="relative mt-10 h-[520px] w-full md:mt-14">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to blend with background without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
