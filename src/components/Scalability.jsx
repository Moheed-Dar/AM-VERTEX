'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Puzzle, 
  Headphones,
  CheckCircle2,
  Globe,
  TrendingUp,
  Clock,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Ironclad Security',
    description: 'ISO-certified protocols protecting every bit of data with military-grade encryption and compliance standards.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    stat: '256-bit',
    statLabel: 'Encryption'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Agile workflows that cut time-to-market by 40% without compromising on quality or security.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-200 dark:border-amber-800',
    stat: '40%',
    statLabel: 'Faster'
  },
  {
    icon: Puzzle,
    title: 'Seamless Integration',
    description: 'Plug-and-play API solutions for existing tech stacks with zero downtime migration.',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    borderColor: 'border-blue-200 dark:border-blue-800',
    stat: 'Zero',
    statLabel: 'Downtime'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated enterprise response teams worldwide with sub-5-minute response guarantees.',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50 dark:bg-rose-950/30',
    borderColor: 'border-rose-200 dark:border-rose-800',
    stat: '<5min',
    statLabel: 'Response'
  },
];

const mainStats = [
  { value: '99.99%', label: 'Uptime SLA', icon: Clock },
  { value: '500+', label: 'Enterprise Clients', icon: CheckCircle2 },
  { value: '50+', label: 'Countries Served', icon: Globe },
  { value: '$2B+', label: 'Revenue Generated', icon: TrendingUp },
];

export default function Scalability() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Enterprise Ready</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Built for{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Scalability
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just build solutions; we build infrastructures that withstand the test of time and scale.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative cursor-pointer"
            >
              <div className={`relative h-full p-6 rounded-2xl ${feature.bgColor} ${feature.borderColor} border backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl`}>
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
                
                {/* Top Line - X-axis padding removed, full width */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                {/* Icon & Stat */}
                <div className="relative flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-white dark:bg-slate-800 ${feature.borderColor} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 bg-gradient-to-br ${feature.color} bg-clip-text`} style={{
                      stroke: feature.color.includes('emerald') ? '#10B981' :
                              feature.color.includes('amber') ? '#F59E0B' :
                              feature.color.includes('blue') ? '#3B82F6' : '#F43F5E'
                    }} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.stat}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="relative text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Stats Bar - Modified & Attractive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 dark:from-slate-950/95 dark:via-slate-900/95 dark:to-slate-950/95 backdrop-blur-xl" />
          
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 p-[1px] rounded-3xl">
            <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-3xl" />
          </div>

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
            <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse delay-75" />
            <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-pink-400/30 rounded-full animate-pulse delay-150" />
            <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse delay-300" />
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-10">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Trusted by Industry Leaders</span>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {mainStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="relative text-center group cursor-pointer"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative p-4 rounded-2xl">
                    {/* Icon Container */}
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-3 group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                      <stat.icon className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors" />
                    </div>
                    
                    {/* Value - Reduced Size */}
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <span>Start Scaling Today</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
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