'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Globe, 
  Shield, 
  Cpu, 
  Sparkles, 
  ChevronDown,
  Zap,
  TrendingUp,
  Users,
  Target,
  Rocket,
  Award,
  ArrowUpRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background - Same as before */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30" />
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              y: [0, 40, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-md border border-blue-200/50 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 shadow-lg shadow-blue-500/10"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Future-Ready Excellence</span>
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              <span className="text-slate-900 dark:text-white block">Multi-Disciplinary</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Innovation
                </span>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#9333EA" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
              <span className="text-slate-900 dark:text-white block mt-2">for the Modern</span>
              <span className="text-slate-500 dark:text-slate-400 block">Enterprise</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              Empowering global leaders through high-end Engineering, IT infrastructure, and cutting-edge Creative solutions. We bridge the gap between technology and art.
            </motion.p>

            {/* Small Attractive Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {/* Primary Button */}
              <Link
                href="/services"
                className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg overflow-hidden shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              {/* Secondary Button */}
              <Link
                href="/contact"
                className="group px-5 py-2.5 bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Portfolio</span>
              </Link>

              {/* Tertiary Button */}
              <Link
                href="/team"
                className="group px-5 py-2.5 text-slate-600 dark:text-slate-400 text-sm font-medium rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>Our Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Modern Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: Globe, value: '99.9%', label: 'Uptime', color: 'from-blue-500 to-cyan-500', iconBg: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-600 dark:text-blue-400' },
                { icon: Users, value: '500+', label: 'Clients', color: 'from-purple-500 to-pink-500', iconBg: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-600 dark:text-purple-400' },
                { icon: Cpu, value: '24/7', label: 'Support', color: 'from-emerald-500 to-teal-500', iconBg: 'bg-emerald-100 dark:bg-emerald-900/30', iconColor: 'text-emerald-600 dark:text-emerald-400' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative px-4 py-3 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="relative flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${stat.iconBg} ${stat.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{stat.value}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-bold text-slate-900 dark:text-white">2,000+</span> companies trust us
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Same as before */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:h-[650px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-blue-500/20 dark:border-blue-400/20"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-purple-500/20 dark:border-purple-400/20"
              />
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse" />
              
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <Image
                  src="https://thumbs.dreamstime.com/b/digital-globe-representation-glowing-blue-grid-continents-outlined-dark-background-futuristic-design-technology-concept-digital-355980483.jpg"
                  alt="Digital Globe"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain drop-shadow-2xl rounded-full"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 lg:-left-12 top-1/4 z-20"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        Online
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">All systems active</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 lg:-right-8 bottom-1/3 z-20"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Secure</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">256-bit encryption</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25"
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6" />
                    <div>
                      <div className="text-xl font-bold">+147%</div>
                      <div className="text-xs text-blue-100">Growth this year</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 p-2.5 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <Rocket className="w-5 h-5 text-blue-500" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 left-0 p-2.5 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <Award className="w-5 h-5 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 cursor-pointer hover:text-blue-500 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
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