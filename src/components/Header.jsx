import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b0b12]/70 px-4 py-3 backdrop-blur-xl"
        >
          <a href="#" className="group relative inline-flex items-center gap-2 text-white">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
            <span className="font-semibold tracking-tight">Flux Automation</span>
            <span className="pointer-events-none absolute -inset-x-2 -inset-y-1 -z-0 rounded-xl opacity-0 blur-lg transition group-hover:opacity-40 bg-gradient-to-r from-fuchsia-500/30 via-purple-500/20 to-indigo-500/30" />
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#" className="hover:text-white">Docs</a>
          </div>
          <a
            href="#pricing"
            className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:shadow-fuchsia-500/30"
          >
            Get Started
            <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-md transition hover:opacity-60 bg-white/10" />
          </a>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
