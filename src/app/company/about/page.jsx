'use client';

import { motion } from 'framer-motion';
import { Building2, ArrowRight, Users, Target, Award, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '200+', label: 'Team Members' },
    { number: '50+', label: 'Countries Served' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'Empowering businesses through innovative technology solutions that drive growth and transformation.'
    },
    {
      icon: Award,
      title: 'Our Vision',
      desc: 'To be the global leader in digital transformation, setting new standards for excellence and innovation.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      desc: 'Operating across 50+ countries, delivering localized solutions with global expertise.'
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
          <Link href="/company" className="hover:text-orange-500">Company</Link>
          <span>/</span>
          <span className="text-orange-500">About Us</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 text-indigo-600 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            About Us
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Building the <span className="text-indigo-600">Future</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            We are a team of passionate technologists dedicated to transforming businesses 
            through innovative digital solutions. Since 2014, we've been at the forefront 
            of technology innovation.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
              <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <value.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center p-8 rounded-2xl bg-indigo-600 text-white"
        >
          <Users className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation.
          </p>
          <Link
            href="/company/careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}