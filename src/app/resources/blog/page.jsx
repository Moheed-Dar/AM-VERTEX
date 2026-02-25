'use client';

import { motion } from 'framer-motion';
import { Rss, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const featuredPost = {
    title: 'The Future of Cloud Infrastructure: Trends to Watch in 2024',
    excerpt: 'Explore the emerging technologies and methodologies shaping the next generation of cloud computing, from edge computing to AI-driven automation.',
    author: 'Sarah Chen',
    date: 'Jan 20, 2024',
    readTime: '8 min read',
    category: 'Technology'
  };

  const posts = [
    {
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Best practices for designing and implementing microservices that can grow with your business.',
      author: 'Mike Johnson',
      date: 'Jan 18, 2024',
      readTime: '6 min read',
      category: 'Engineering'
    },
    {
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'How artificial intelligence is transforming the cybersecurity landscape.',
      author: 'Emma Davis',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
      category: 'Security'
    },
    {
      title: 'Data-Driven Decision Making Guide',
      excerpt: 'A comprehensive guide to leveraging analytics for better business decisions.',
      author: 'Alex Kumar',
      date: 'Jan 12, 2024',
      readTime: '7 min read',
      category: 'Analytics'
    },
    {
      title: 'The Rise of Low-Code Development',
      excerpt: 'How low-code platforms are democratizing software development.',
      author: 'Lisa Wang',
      date: 'Jan 10, 2024',
      readTime: '4 min read',
      category: 'Development'
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
          <span className="text-orange-500">Blog</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 text-pink-600 text-sm font-medium mb-6">
            <Rss className="w-4 h-4" />
            Blog
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Latest <span className="text-pink-600">Insights</span>
          </h1>
        </motion.div>

        {/* Featured Post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 text-white"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
            {featuredPost.category}
          </span>
          <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
          <p className="text-pink-100 mb-6 max-w-3xl">{featuredPost.excerpt}</p>
          <div className="flex items-center gap-6 text-sm text-pink-100">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {featuredPost.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {featuredPost.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {featuredPost.readTime}
            </span>
          </div>
        </motion.article>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 text-xs font-medium mb-3">
                {post.category}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{post.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}