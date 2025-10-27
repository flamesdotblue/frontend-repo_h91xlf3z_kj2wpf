import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    period: '/mo',
    highlight: false,
    features: ['100 runs / mo', '2 team members', 'Community support', 'Basic analytics']
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    highlight: true,
    features: ['5,000 runs / mo', 'Unlimited flows', 'Priority support', 'Advanced analytics']
  },
  {
    name: 'Scale',
    price: '$149',
    period: '/mo',
    highlight: false,
    features: ['50,000 runs / mo', 'SSO & SAML', 'Dedicated success', 'Custom limits']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-44 w-44 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-5xl"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-center text-white/70"
        >
          Start free and scale as your automations grow.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition ${
                tier.highlight
                  ? 'border-fuchsia-500/40 bg-gradient-to-br from-fuchsia-600/20 via-purple-600/10 to-indigo-600/20 shadow-xl shadow-fuchsia-500/20'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {tier.highlight && (
                <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_200px_at_50%_-20%,rgba(168,85,247,0.35),transparent)]" />
              )}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className="mb-1 text-white/60">{tier.period}</span>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-fuchsia-600/30 text-fuchsia-200 ring-1 ring-white/10">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                    tier.highlight
                      ? 'bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30'
                      : 'border border-white/15 bg-white/5 text-white/90 hover:border-white/25 hover:bg-white/10'
                  }`}
                >
                  {tier.highlight ? 'Start Pro' : 'Choose Plan'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
