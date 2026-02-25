'use client';

import { motion } from 'framer-motion';
import { Handshake, ArrowRight, Star, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

export default function PartnersPage() {
  const partnerTypes = [
    {
      icon: Zap,
      title: 'Technology Partners',
      desc: 'Integrate your solutions with our platform to deliver enhanced value to customers.',
      benefits: ['API Access', 'Co-marketing', 'Technical Support', 'Revenue Sharing']
    },
    {
      icon: Globe,
      title: 'Channel Partners',
      desc: 'Expand your portfolio with our industry-leading solutions and grow your business.',
      benefits: ['Sales Training', 'Lead Sharing', 'Marketing Resources', 'Competitive Margins']
    },
    {
      icon: Star,
      title: 'Strategic Alliances',
      desc: 'Join forces to drive innovation and solve complex business challenges together.',
      benefits: ['Joint Development', 'Executive Sponsorship', 'Global Reach', 'Innovation Labs']
    }
  ];

  const partners = [
    'Microsoft', 'AWS', 'Google Cloud', 'Salesforce', 'Oracle', 'IBM', 'SAP', 'Adobe'
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
          <Link href="/company" className="hover:text-orange-500">Company</Link>
          <span>/</span>
          <span className="text-orange-500">Partners</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 text-violet-600 text-sm font-medium mb-6">
            <Handshake className="w-4 h-4" />
            Partner Program
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Grow <span className="text-violet-600">Together</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Join our partner ecosystem and unlock new opportunities. Together, we can deliver 
            exceptional value to customers worldwide.
          </p>
        </motion.div>

        {/* Partner Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <type.icon className="w-10 h-10 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{type.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{type.desc}</p>
              <ul className="space-y-2">
                {type.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Star className="w-4 h-4 text-violet-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Trusted By Industry Leaders</h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {partners.map((partner) => (
              <div key={partner} className="text-xl font-bold text-slate-400 dark:text-slate-600">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white rounded-full font-semibold hover:bg-violet-700 transition-all"
          >
            Become a Partner
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}