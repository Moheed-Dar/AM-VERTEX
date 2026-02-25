'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Code, 
  Sparkles, 
  Rocket, 
  ArrowRight, 
  Lightbulb,
  Star,
  Clock,
  Globe,
  Shield,
  Award,
  Zap,
  Heart,
  CheckCircle2,
  ArrowUpRight,
  Palette,
  Cpu,
  Brain,
  TrendingUp,
  Search,
  Video
} from 'lucide-react';

const technicalServices = [
  {
    icon: Code,
    title: 'Software Development',
    subtitle: 'Engineering',
    description: 'Custom enterprise solutions built with scalable architecture, microservices, and modern frameworks.',
    features: ['Cloud Native', 'DevOps', 'API Development'],
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    gradient: 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20'
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    subtitle: 'AI/ML',
    description: 'Advanced neural networks and automated decision systems that transform data into intelligence.',
    features: ['NLP', 'Computer Vision', 'Predictive Analytics'],
    color: 'from-purple-500 to-pink-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    iconColor: 'text-purple-400',
    gradient: 'bg-gradient-to-br from-purple-600/20 to-pink-600/20'
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    subtitle: 'Data Science',
    description: 'Predictive models and data-driven insights to uncover patterns and forecast growth.',
    features: ['Deep Learning', 'AutoML', 'Neural Networks'],
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    gradient: 'bg-gradient-to-br from-emerald-600/20 to-teal-600/20'
  },
];

const creativeServices = [
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Visual identities that captivate audiences and build lasting recognition.',
    color: 'from-rose-500 to-orange-400',
    bgColor: 'bg-rose-500/10'
  },
  {
    icon: Video,
    title: 'Media Production',
    description: 'Cinematic storytelling that engages and converts viewers.',
    color: 'from-amber-500 to-yellow-400',
    bgColor: 'bg-amber-500/10'
  },
  {
    icon: Search,
    title: 'SEO Mastery',
    description: 'Dominate search rankings with data-driven optimization.',
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: TrendingUp,
    title: 'Growth Marketing',
    description: 'Strategic campaigns that scale your business exponentially.',
    color: 'from-indigo-500 to-blue-400',
    bgColor: 'bg-indigo-500/10'
  },
];

const enterpriseFeatures = [
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock access to dedicated expert teams',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Instant scaling across 50+ regions worldwide',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade encryption & compliance',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  },
  {
    icon: Award,
    title: 'SLA Guaranteed',
    description: '99.9% uptime with performance benchmarks',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
];

const stats = [
  { value: '99.9%', label: 'Uptime', icon: Zap },
  { value: '500+', label: 'Clients', icon: Heart },
  { value: '50+', label: 'Countries', icon: Globe },
  { value: '24/7', label: 'Support', icon: Clock },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <div className="pt-16 bg-slate-50 dark:bg-slate-950">
      {/* Hero Section - What We Offer */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover opacity-10 dark:opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/95 to-slate-50 dark:from-slate-950/90 dark:via-slate-950/95 dark:to-slate-950" />
          
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/20 rounded-full blur-[100px]" 
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge - What We Offer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 backdrop-blur-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm mb-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-default shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span className="font-medium tracking-wide">What We Offer</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 leading-tight tracking-tight">
              Services Built for{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Empowering your vision with cutting-edge engineering and boundless creativity. We transform ideas into reality.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Link
                href="#technical"
                className="group px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-semibold hover:shadow-2xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 hover:scale-105 transition-all flex items-center gap-2 text-sm"
              >
                <Rocket className="w-4 h-4" />
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all text-sm backdrop-blur-sm"
              >
                Get Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600"
        >
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="flex items-center gap-3 justify-center group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                  <stat.icon className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Services */}
      <section id="technical" className="py-20 relative bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 dark:from-blue-900/20 via-slate-50 dark:via-slate-950 to-slate-50 dark:to-slate-950" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-4">
              <Code className="w-3.5 h-3.5" />
              <span className="tracking-wider">TECHNICAL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              Engineering Excellence
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
              Build robust, scalable solutions with our expert engineering team using cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {technicalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`h-full p-6 rounded-2xl bg-white dark:bg-slate-900/80 ${service.borderColor} border backdrop-blur-sm hover:shadow-2xl transition-all overflow-hidden`}>
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`w-11 h-11 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>

                    <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold mb-3 border border-slate-200 dark:border-slate-700">
                      <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${service.iconColor} opacity-60`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Services */}
      <section className="py-20 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-semibold mb-4">
              <Palette className="w-3.5 h-3.5" />
              <span className="tracking-wider">CREATIVE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              Creative Studio
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
              Design experiences that captivate and convert your audience into loyal customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {creativeServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl transition-all cursor-pointer backdrop-blur-sm"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features - Why Choose Us */}
      <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Badge - Why Choose Us */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold mb-4">
              <Star className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span className="tracking-wider">WHY CHOOSE US</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              Enterprise Grade Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
              The infrastructure and support required by world-class organizations to scale globally.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group p-5 rounded-2xl bg-white dark:bg-slate-900/80 ${feature.border} border hover:bg-slate-50 dark:hover:bg-slate-800 transition-all backdrop-blur-sm`}
              >
                <div className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-3 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-semibold hover:shadow-2xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 hover:scale-105 transition-all text-sm group"
            >
              <Lightbulb className="w-4 h-4 text-amber-400 dark:text-amber-500 transition-colors" />
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}