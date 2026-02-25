'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Search, FileText, Video, Code } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: FileText,
      title: 'Getting Started',
      items: ['Quick Start Guide', 'Installation', 'Configuration', 'Authentication']
    },
    {
      icon: Code,
      title: 'API Reference',
      items: ['REST API', 'GraphQL', 'Webhooks', 'SDKs']
    },
    {
      icon: Video,
      title: 'Tutorials',
      items: ['Video Guides', 'Best Practices', 'Sample Projects', 'FAQ']
    }
  ];

  const quickLinks = [
    { title: 'API Status', desc: 'Check system status' },
    { title: 'Changelog', desc: 'Latest updates' },
    { title: 'Support', desc: 'Get help' },
    { title: 'Community', desc: 'Join discussion' }
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
          <span className="text-orange-500">Documentation</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 text-teal-600 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Documentation
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            How can we <span className="text-teal-600">help?</span>
          </h1>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <category.icon className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-teal-600 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href="#"
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500 transition-colors text-center"
            >
              <div className="font-semibold text-slate-900 dark:text-white mb-1">{link.title}</div>
              <div className="text-sm text-slate-500">{link.desc}</div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}