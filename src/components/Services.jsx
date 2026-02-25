'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Share2, 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  ArrowUpRight,
  Layers,
  Sparkles
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Search Engineering',
    subtitle: 'SEO',
    description: 'Advanced algorithmic optimization to ensure your enterprise stays at the forefront of digital discovery.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    borderColor: 'border-blue-200 dark:border-blue-800',
  },
  {
    icon: Share2,
    title: 'Omni-Channel Marketing',
    subtitle: 'Marketing',
    description: 'Integrated marketing strategies that synchronize brand messaging across every digital touchpoint.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    borderColor: 'border-purple-200 dark:border-purple-800',
  },
  {
    icon: Target,
    title: 'Strategic Branding',
    subtitle: 'Branding',
    description: 'Crafting premium brand architectures that resonate with global audiences and command market authority.',
    color: 'from-rose-500 to-orange-500',
    bgColor: 'bg-rose-50 dark:bg-rose-950/30',
    borderColor: 'border-rose-200 dark:border-rose-800',
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    subtitle: 'Analytics',
    description: 'Data-driven insights and predictive modeling to accelerate your business growth trajectory.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
  },
  {
    icon: Users,
    title: 'UX Research',
    subtitle: 'Research',
    description: 'Human-centered design research that ensures your products meet real user needs and expectations.',
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
    borderColor: 'border-indigo-200 dark:border-indigo-800',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    subtitle: 'Performance',
    description: 'Lightning-fast load times and seamless user experiences that keep your customers engaged.',
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-200 dark:border-amber-800',
  },
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between  mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium mb-4"
            >
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Specialized Services</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Beyond our core pillars,{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                tactical execution
              </span>
            </h2>
          </motion.div>
          
          <motion.a
            href="/services"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <span>View All Services</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 cursor-pointer gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className={`relative h-full p-6 rounded-2xl ${service.bgColor} ${service.borderColor} border backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-500/10`}>
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
                
                {/* Top Accent Line - X-axis padding removed, full width */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                {/* Icon & Subtitle Row */}
                <div className="relative flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-white dark:bg-slate-800 ${service.borderColor} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-5 h-5 bg-gradient-to-br ${service.color} bg-clip-text`} style={{ 
                      stroke: service.color.includes('blue') ? '#3B82F6' : 
                              service.color.includes('purple') ? '#A855F7' :
                              service.color.includes('rose') ? '#F43F5E' :
                              service.color.includes('emerald') ? '#10B981' :
                              service.color.includes('indigo') ? '#6366F1' : '#F59E0B'
                    }} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white dark:bg-slate-800 ${service.borderColor} border text-slate-500 dark:text-slate-400`}>
                    {service.subtitle}
                  </span>
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="relative text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Action Link */}
                <div className="relative flex items-center justify-between">
                  <span className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Explore Service
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white dark:bg-slate-800 ${service.borderColor} border flex items-center justify-center group-hover:bg-gradient-to-r ${service.color} group-hover:border-transparent transition-all duration-300`}>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '150+', label: 'Projects Delivered', icon: Sparkles },
            { value: '98%', label: 'Client Satisfaction', icon: Target },
            { value: '50+', label: 'Expert Team', icon: Users },
            { value: '24/7', label: 'Support Available', icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
            >
              <stat.icon className="w-6 h-6 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
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