'use client';

import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, MapPin, Clock, DollarSign, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const benefits = [
    'Competitive Salary',
    'Remote Work Options',
    'Health Insurance',
    'Learning Budget',
    'Flexible Hours',
    'Stock Options'
  ];

  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      department: 'Engineering'
    },
    {
      title: 'DevOps Engineer',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130k - $170k',
      department: 'Infrastructure'
    },
    {
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $140k',
      department: 'Design'
    },
    {
      title: 'Sales Manager',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£80k - £120k',
      department: 'Sales'
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
          <span className="text-orange-500">Careers</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 text-cyan-600 text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            Join Our Team
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Build Your <span className="text-cyan-600">Career</span> With Us
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Join a team of innovators and problem solvers. We're building the future of technology 
            and looking for passionate individuals to join us on this journey.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Open Positions</h2>
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-cyan-600 font-medium mb-1">{job.department}</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition-all">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}