'use client';

import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function CasesPage() {
  const cases = [
    {
      company: 'TechCorp Industries',
      industry: 'Manufacturing',
      title: 'Digital Transformation Success',
      description: 'How we helped a leading manufacturer increase efficiency by 40% through cloud migration and IoT implementation.',
      results: [
        { icon: TrendingUp, value: '40%', label: 'Efficiency Gain' },
        { icon: DollarSign, value: '$2M', label: 'Cost Savings' },
        { icon: Users, value: '50%', label: 'Productivity Boost' }
      ]
    },
    {
      company: 'FinanceFlow',
      industry: 'Fintech',
      title: 'Secure Banking Platform',
      description: 'Building a secure, scalable banking platform that processes millions of transactions daily.',
      results: [
        { icon: TrendingUp, value: '99.99%', label: 'Uptime' },
        { icon: Users, value: '1M+', label: 'Active Users' },
        { icon: DollarSign, value: '300%', label: 'ROI' }
      ]
    },
    {
      company: 'HealthPlus',
      industry: 'Healthcare',
      title: 'AI-Powered Diagnostics',
      description: 'Implementing machine learning solutions to improve diagnostic accuracy and patient outcomes.',
      results: [
        { icon: TrendingUp, value: '95%', label: 'Accuracy' },
        { icon: Users, value: '500K', label: 'Patients Helped' },
        { icon: DollarSign, value: '60%', label: 'Cost Reduction' }
      ]
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
          <Link href="/resources" className="hover:text-orange-500">Resources</Link>
          <span>/</span>
          <span className="text-orange-500">Case Studies</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-50 dark:bg-lime-950/30 border border-lime-200 dark:border-lime-800 text-lime-600 text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            Case Studies
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Success <span className="text-lime-600">Stories</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover how leading organizations have transformed their business with our solutions.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <motion.article
              key={caseStudy.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-600 text-sm font-medium">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{caseStudy.title}</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">{caseStudy.company}</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{caseStudy.description}</p>
                  <button className="inline-flex items-center gap-2 text-lime-600 font-semibold hover:gap-3 transition-all">
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex gap-6 lg:border-l lg:border-slate-200 lg:dark:border-slate-800 lg:pl-8">
                  {caseStudy.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <result.icon className="w-6 h-6 text-lime-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">{result.value}</div>
                      <div className="text-sm text-slate-500">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}