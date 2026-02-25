'use client';

import { motion } from 'framer-motion';
import { Shield, ArrowRight, CheckCircle2, Lock, Eye, FileCheck } from 'lucide-react';
import Link from 'next/link';

export default function SecurityPage() {
  const features = [
    'Threat Detection & Response',
    'Vulnerability Management',
    'Security Compliance',
    'Identity & Access Management',
    'Data Encryption',
    'Security Auditing'
  ];

  const services = [
    {
      icon: Lock,
      title: 'Cybersecurity',
      desc: 'Advanced protection against cyber threats'
    },
    {
      icon: Eye,
      title: 'Monitoring',
      desc: '24/7 security operations center'
    },
    {
      icon: FileCheck,
      title: 'Compliance',
      desc: 'GDPR, ISO 27001, SOC 2 compliance'
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
          <span className="text-orange-500">Security</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-600 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Enterprise Solution
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Cyber <span className="text-emerald-600">Security</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Protect your digital assets with enterprise-grade security solutions. 
            Comprehensive defense against evolving cyber threats.
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
              <service.icon className="w-10 h-10 text-emerald-600 mb-4" />
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
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all"
          >
            Secure Your Business
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}