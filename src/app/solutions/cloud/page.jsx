'use client';

import { motion } from 'framer-motion';
import { Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CloudInfrastructurePage() {
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
          <Link href="/services" className="hover:text-orange-500">Solutions</Link>
          <span>/</span>
          <span className="text-orange-500">Cloud Infrastructure</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-blue-600 text-sm font-medium mb-6">
            <Cloud className="w-4 h-4" />
            Enterprise Solution
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Cloud <span className="text-blue-600">Infrastructure</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Scalable, secure, and high-performance cloud infrastructure tailored for enterprise workloads. 
            Migrate, optimize, and scale with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            '99.99% Uptime SLA',
            'Auto-scaling Architecture',
            'Multi-region Deployment',
            'Disaster Recovery',
            'Cost Optimization',
            '24/7 Monitoring'
          ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}