'use client';

import { motion } from 'framer-motion';
import { Newspaper, ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';

export default function PressPage() {
  const pressReleases = [
    {
      title: 'Company Announces $50M Series C Funding',
      date: 'Jan 15, 2024',
      author: 'Sarah Johnson',
      excerpt: 'Leading investment firms back our mission to transform enterprise technology solutions.',
      category: 'Funding'
    },
    {
      title: 'New AI Platform Launch Sets Industry Standard',
      date: 'Dec 20, 2023',
      author: 'Michael Chen',
      excerpt: 'Revolutionary AI-powered platform delivers unprecedented efficiency gains for enterprise customers.',
      category: 'Product'
    },
    {
      title: 'Expansion into European Markets',
      date: 'Nov 10, 2023',
      author: 'Emma Williams',
      excerpt: 'Strategic expansion brings cutting-edge solutions to enterprise clients across Europe.',
      category: 'Expansion'
    },
    {
      title: 'Partnership with Fortune 500 Company',
      date: 'Oct 5, 2023',
      author: 'David Brown',
      excerpt: 'Major partnership agreement signals growing enterprise adoption of our solutions.',
      category: 'Partnership'
    }
  ];

  const mediaKit = [
    { title: 'Brand Guidelines', size: '2.4 MB' },
    { title: 'Press Kit', size: '15.8 MB' },
    { title: 'Executive Bios', size: '1.2 MB' },
    { title: 'Company Fact Sheet', size: '890 KB' }
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
          <span className="text-orange-500">Press</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950/30 border border-fuchsia-200 dark:border-fuchsia-800 text-fuchsia-600 text-sm font-medium mb-6">
            <Newspaper className="w-4 h-4" />
            Press Center
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            News & <span className="text-fuchsia-600">Press</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Latest updates, press releases, and media resources. For press inquiries, 
            please contact our communications team.
          </p>
        </motion.div>

        {/* Press Releases */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {pressReleases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 text-xs font-medium">
                  {item.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{item.excerpt}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <User className="w-4 h-4" />
                {item.author}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Media Kit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-8 rounded-2xl bg-fuchsia-600 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Media Resources</h2>
          <p className="text-fuchsia-100 mb-6">Download official brand assets, press kits, and company information.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mediaKit.map((item) => (
              <button
                key={item.title}
                className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-left"
              >
                <div className="font-semibold mb-1">{item.title}</div>
                <div className="text-sm text-fuchsia-200">{item.size} • PDF</div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}