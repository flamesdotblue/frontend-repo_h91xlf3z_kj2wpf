import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const items = [
  {
    q: 'How does your AI decide which actions to take?',
    a: 'Our inference engine uses context-aware routing based on event payloads, historical outcomes, and configurable guardrails. You can inspect decisions in the run logs and override with rules when needed.'
  },
  {
    q: 'Is it secure enough for enterprise workloads?',
    a: 'Yes. Data is encrypted in transit, tokens are stored with KMS-backed secrets, and audit trails are immutable. Role based access control ensures least-privilege across teams.'
  },
  {
    q: 'Can I bring my own models or APIs?',
    a: 'Absolutely. Connect custom endpoints via webhooks or SDKs. You can also register your own model endpoints and reference them inside flows as first-class actions.'
  },
  {
    q: 'What happens if a step fails mid-run?',
    a: 'Every execution is checkpointed. Automatic retries with exponential backoff are built-in, and you can enable compensating actions or human-in-the-loop approvals.'
  }
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-32 w-[70%] -translate-x-1/2 bg-gradient-to-b from-fuchsia-600/20 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-5xl"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-center text-white/70"
        >
          Everything you need to know about building and scaling automations.
        </motion.p>

        <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="group">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5"
                >
                  <div>
                    <h3 className="text-base font-semibold md:text-lg">{item.q}</h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden pt-2 text-sm text-white/70 md:text-base"
                        >
                          {item.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-lg border border-white/10 p-2 text-white/70"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
