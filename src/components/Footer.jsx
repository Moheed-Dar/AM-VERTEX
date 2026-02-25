'use client';

import { motion } from 'framer-motion';
import {
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Heart
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  solutions: [
    { name: 'Cloud Infrastructure', href: '/solutions/cloud' },
    { name: 'Managed Services', href: '/solutions/managed' },
    { name: 'AI Automation', href: '/solutions/ai' },
    { name: 'Network Security', href: '/solutions/security' },
    { name: 'Data Analytics', href: '/solutions/analytics' },
  ],
  company: [
    { name: 'About Us', href: '/company/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/company/careers' },
    { name: 'Partners', href: '/company/partners' },
    { name: 'Press Kit', href: '/company/press' },
  ],
  resources: [
    { name: 'Documentation', href: '/resources/docs' },
    { name: 'API Reference', href: '/resources/api' },
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Case Studies', href: '/resources/cases' },
    { name: 'Community', href: '/resources/community' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-slate-800' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Top Section - Newsletter Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden shadow-2xl"
        >
          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

          <div className="relative flex flex-col items-center text-center md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Newsletter</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Stay Ahead of the Curve</h3>
              <p className="text-slate-400 text-sm max-w-md">
                Get weekly insights on AI, cloud infrastructure, and enterprise technology delivered to your inbox.
              </p>
            </div>

            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all backdrop-blur-sm"
              />
              <button className="w-full sm:w-auto px-6 py-3.5 bg-white text-slate-900 rounded-xl font-semibold hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
                <span>Subscribe</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                  <Image
                    src="/img3.png"
                    alt="AM-VERTEX Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AM-VERTEX
                  </span>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider uppercase">
                    Enterprise Solutions
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed"
            >
              Pioneering enterprise solutions through precision engineering and scalable architecture. Building the future, today.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 group cursor-default">
                <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 group cursor-default">
                <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">hello@am-vertex.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 group cursor-default">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">+923063333557</span>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * categoryIndex }}
                >
                  <h4 className="font-bold text-slate-900 dark:text-white mb-5 uppercase tracking-wider text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * linkIndex }}
                      >
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        >
                          <span className="relative overflow-hidden">
                            <span className="block group-hover:-translate-y-full transition-transform duration-300">{link.name}</span>
                            <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-300 text-blue-600 dark:text-blue-400">{link.name}</span>
                          </span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm"
            >
              <>
                © {new Date().getFullYear()} AM-VERTEX
              </>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 ${social.color} hover:text-white transition-all duration-300 shadow-md hover:shadow-xl`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all z-50 group"
      >
        <ArrowUpRight className="w-5 h-5 rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
      </motion.button>
    </footer>
  );
}