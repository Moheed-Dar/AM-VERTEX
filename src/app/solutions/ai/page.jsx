'use client';

import { motion } from 'framer-motion';
import { Brain, ArrowRight, CheckCircle2, Bot, LineChart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AIPage() {
  const features = [
    'Custom AI Model Development',
    'Natural Language Processing',
    'Computer Vision Solutions',
    'Predictive Analytics',
    'MLOps & Model Management',
    'AI Strategy Consulting'
  ];

  const services = [
    {
      icon: Bot,
      title: 'Conversational AI',
      desc: 'Intelligent chatbots and virtual assistants'
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics',
      desc: 'Data-driven insights and forecasting'
    },
    {
      icon: Sparkles,
      title: 'Generative AI',
      desc: 'Content generation and creative AI solutions'
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-slate-500 mb-8"
        >
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-orange-500">Solutions</Link>
          <span>/</span>
          <span className="text-orange-500">Artificial Intelligence</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-600 text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Enterprise Solution
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Artificial <span className="text-rose-600">Intelligence</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Transform your business with cutting-edge AI solutions. From machine learning to deep learning, 
            we build intelligent systems that drive innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-10 h-10 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <CheckCircle2 className="w-5 h-5 text-rose-500 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 transition-all"
          >
            Explore AI Solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}