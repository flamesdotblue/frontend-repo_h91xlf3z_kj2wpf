import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#0b0b12] py-14 text-white/80">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 bg-gradient-to-b from-purple-600/20 to-transparent blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-white">
            <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
            <span className="font-semibold">Flux Automation</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/60 md:text-left">© {new Date().getFullYear()} Flux Automation, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
