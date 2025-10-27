import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Shield, Settings } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch Automations Fast',
    desc: 'Deploy production-ready workflows in minutes with our visual builder and smart templates.'
  },
  {
    icon: Zap,
    title: 'Intelligent Triggers',
    desc: 'React to events across your stack with AI-based routing and context-aware decisions.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    desc: 'Granular permissions, SOC2-friendly logging, and end-to-end encryption in transit.'
  },
  {
    icon: Settings,
    title: 'Composable Blocks',
    desc: 'Drag-and-connect actions across tools like Slack, Notion, GitHub, and custom webhooks.'
  }
];

const steps = [
  {
    id: 1,
    title: 'Connect',
    text: 'Link your tools and data sources securely.'
  },
  {
    id: 2,
    title: 'Design',
    text: 'Compose flows with AI-assisted suggestions.'
  },
  {
    id: 3,
    title: 'Automate',
    text: 'Run instantly with scalable, serverless execution.'
  },
  {
    id: 4,
    title: 'Measure',
    text: 'Monitor KPIs in realtime and iterate rapidly.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i } })
};

const FeaturesWorkflow = () => {
  return (
    <section id="features" className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-5xl"
        >
          Built for Speed and Scale
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-center text-white/70"
        >
          Everything you need to orchestrate powerful automations with confidence.
        </motion.p>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-600/20 to-indigo-600/20 blur-2xl transition group-hover:scale-110" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 p-3 text-fuchsia-300 ring-1 ring-inset ring-white/10">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Steps */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl font-semibold md:text-4xl"
          >
            Your Flow, Supercharged
          </motion.h3>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8">
            <div className="absolute inset-0 opacity-40 [background:radial-gradient(1200px_400px_at_50%_10%,rgba(139,92,246,0.15),transparent)]" />
            <motion.ol
              initial={{ x: '-20%' }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: 'spring', stiffness: 60, damping: 18 }}
              className="relative z-10 grid grid-cols-1 items-start gap-8 md:grid-cols-4"
            >
              {steps.map((s, i) => (
                <li key={s.id} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="flex flex-col items-start"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600/30 to-indigo-600/30 text-fuchsia-200 ring-1 ring-white/10">
                      {s.id}
                    </div>
                    <h4 className="text-lg font-semibold">{s.title}</h4>
                    <p className="mt-1 text-sm text-white/70">{s.text}</p>
                  </motion.div>
                  {i !== steps.length - 1 && (
                    <div className="mt-6 hidden h-[2px] w-full bg-gradient-to-r from-fuchsia-500/40 via-purple-400/30 to-indigo-400/40 md:block" />
                  )}
                </li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesWorkflow;
