'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  LineChart, 
  Shield, 
  Cloud, 
  Smartphone,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const pillars = [
  {
    icon: Code,
    title: 'Engineering & IT',
    description: 'Scalable software architecture, bespoke AI implementations, and robust machine learning systems built to handle global enterprise demands.',
    features: ['Cloud-Native Development', 'Predictive AI Algorithms', 'Enterprise Data Security'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: Palette,
    title: 'Creative Studio',
    description: 'High-end graphics, cinematic video production, and architectural photography that defines and elevates your brand\'s visual identity across all platforms.',
    features: ['High-End Motion Graphics', 'Cinematic Brand Films', 'Global Visual Identity'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: LineChart,
    title: 'Digital Strategy',
    description: 'Data-driven marketing strategies and SEO optimization that propel your brand to the forefront of digital discovery.',
    features: ['SEO & Analytics', 'Growth Marketing', 'Conversion Optimization'],
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Military-grade security protocols and compliance standards that protect your digital assets and customer data.',
    features: ['Threat Detection', 'Compliance Management', 'Security Audits'],
    color: 'from-rose-500 to-orange-500',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Enterprise cloud solutions with seamless scalability, disaster recovery, and 99.99% uptime guarantee.',
    features: ['Multi-Cloud Strategy', 'DevOps Automation', 'Serverless Architecture'],
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    features: ['iOS & Android', 'React Native', 'Flutter Development'],
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
  },
];

export default function Pillars() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>What We Do Best</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Our Core{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Pillars
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive solutions spanning technology, creativity, and strategy to drive your business forward.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 cursor-pointer gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-500/10 dark:hover:shadow-slate-950/50">
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                {/* Icon Container */}
                <div className="relative mb-5">
                  <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className={`w-6 h-6 bg-gradient-to-br ${pillar.color} bg-clip-text text-transparent`} style={{ 
                      stroke: 'url(#' + pillar.title.replace(/\s+/g, '') + ')' 
                    }} />
                    <svg width="0" height="0">
                      <linearGradient id={pillar.title.replace(/\s+/g, '')} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={pillar.color.includes('blue') ? '#3B82F6' : pillar.color.includes('purple') ? '#A855F7' : pillar.color.includes('emerald') ? '#10B981' : pillar.color.includes('rose') ? '#F43F5E' : pillar.color.includes('indigo') ? '#6366F1' : '#F59E0B'} />
                        <stop offset="100%" stopColor={pillar.color.includes('cyan') ? '#06B6D4' : pillar.color.includes('pink') ? '#EC4899' : pillar.color.includes('teal') ? '#14B8A6' : pillar.color.includes('orange') ? '#F97316' : pillar.color.includes('violet') ? '#8B5CF6' : '#EA580C'} />
                      </linearGradient>
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
                  {pillar.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-5">
                  {pillar.features.map((feature, i) => (
                    <motion.li 
                      key={feature} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500"
                    >
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${pillar.color}`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center gap-1 text-sm font-medium text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
            <span className="pl-4 text-sm text-slate-600 dark:text-slate-400">Ready to transform your business?</span>
            <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}