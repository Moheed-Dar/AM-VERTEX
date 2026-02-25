'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Award, 
  Users, 
  Globe, 
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  Quote,
  TrendingUp,
  Clock,
  MapPin,
  Heart,
  Star
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { icon: Award, value: '50+', label: 'Awards', color: 'from-amber-400 to-orange-500', delay: 0, borderColor: 'border-amber-200 dark:border-amber-800' },
  { icon: Users, value: '200+', label: 'Team', color: 'from-blue-400 to-cyan-500', delay: 0.1, borderColor: 'border-blue-200 dark:border-blue-800' },
  { icon: Globe, value: '30+', label: 'Countries', color: 'from-purple-400 to-pink-500', delay: 0.2, borderColor: 'border-purple-200 dark:border-purple-800' },
  { icon: TrendingUp, value: '140%', label: 'Growth', color: 'from-emerald-400 to-teal-500', delay: 0.3, borderColor: 'border-emerald-200 dark:border-emerald-800' },
];

const milestones = [
  { year: '2018', title: 'Founded', desc: 'Started with a vision' },
  { year: '2020', title: 'Expansion', desc: 'Global reach achieved' },
  { year: '2022', title: 'Unicorn', desc: '$1B valuation' },
  { year: '2024', title: 'Leader', desc: 'Industry dominance' },
];

const values = [
  { icon: Target, title: 'Precision', desc: 'Every pixel matters', color: 'text-rose-500', bgColor: 'bg-rose-50 dark:bg-rose-950/30', borderColor: 'border-rose-200 dark:border-rose-800' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Beyond boundaries', color: 'text-amber-500', bgColor: 'bg-amber-50 dark:bg-amber-950/30', borderColor: 'border-amber-200 dark:border-amber-800' },
  { icon: Rocket, title: 'Velocity', desc: 'Move fast, break nothing', color: 'text-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-950/30', borderColor: 'border-blue-200 dark:border-blue-800' },
  { icon: Heart, title: 'Passion', desc: 'Love what we do', color: 'text-pink-500', bgColor: 'bg-pink-50 dark:bg-pink-950/30', borderColor: 'border-pink-200 dark:border-pink-800' },
];

// Fake + Real companies for infinite scroll
const companies = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Tesla', 'SpaceX',
  'OpenAI', 'Stripe', 'Shopify', 'Adobe', 'Salesforce', 'Oracle', 'IBM', 'Intel',
  'NVIDIA', 'AMD', 'Qualcomm', 'Uber', 'Airbnb', 'Spotify', 'Slack', 'Zoom',
  'Square', 'PayPal', 'Visa', 'Mastercard', 'Samsung', 'Sony', 'Toyota', 'BMW'
];

export default function About() {
  // Double the array for seamless infinite scroll
  const doubledCompanies = [...companies, ...companies];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-pink-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" 
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg mb-6"
          >
            <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Our Story</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            We Are{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                AM-VERTEX
              </span>
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8C50 2 100 2 150 8C200 14 250 14 298 8"
                  stroke="url(#about-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future where engineering excellence meets creative brilliance. 
            Since 2018, we&apos;ve been the catalyst for digital transformation.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Content */}
          <div className="lg:col-span-5 space-y-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <Quote className="w-12 h-12 text-blue-500/20 mb-4" />
              <p className="text-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-6">
                &quot;The most powerful innovations occur at the intersection of{' '}
                <span className="text-blue-600 dark:text-blue-400">technical engineering</span> and{' '}
                <span className="text-purple-600 dark:text-purple-400">creative artistry</span>.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Alex Rivera</div>
                  <div className="text-sm text-slate-500">Founder & CEO</div>
                </div>
              </div>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`relative p-5 rounded-2xl ${value.bgColor} ${value.borderColor} border shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden group`}
                >
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${value.color.replace('text-', 'from-').replace('500', '400')} to-${value.color.split('-')[1]}-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  
                  <value.icon className={`w-8 h-8 ${value.color} mb-3`} />
                  <div className="font-bold text-slate-900 dark:text-white mb-1">{value.title}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{value.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/team"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-semibold shadow-2xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <span>Meet Our Team</span>
                <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-slate-900/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visuals */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <Image
                src="https://foyr.com/learn/wp-content/uploads/2021/08/modern-office-design-1.png "
                alt="Our Office"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              
              {/* Floating Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>Global Headquarters</span>
                    </div>
                    <div className="text-2xl font-bold text-white">New York City, USA</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Row - Updated & Attractive */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`relative p-4 rounded-2xl bg-white dark:bg-slate-900 ${stat.borderColor} border shadow-lg overflow-hidden group cursor-pointer`}
                >
                  {/* Top Accent Line - Full Width */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />
                  
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-2 shadow-md group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-4 h-4" />
                  </div>
                  
                  {/* Reduced Text Size */}
                  <div className={`text-xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-0.5`}>
                    {stat.value}
                  </div>
                  
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline & Image Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 text-white shadow-xl cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">Our Journey</span>
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="relative pl-8"
                      >
                        <div className="absolute left-2 top-1.5 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-slate-800" />
                        <div className="flex items-baseline gap-3">
                          <span className="text-lg font-bold text-blue-400">{milestone.year}</span>
                          <div>
                            <div className="font-semibold text-sm">{milestone.title}</div>
                            <div className="text-xs text-slate-400">{milestone.desc}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Secondary Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <Image
                  src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/modern-office-design-for-a-large-conference-room.jpeg "
                  alt="Conference Room"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-semibold text-sm">Innovation Hub</div>
                  <div className="text-white/70 text-xs">Where ideas come alive</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Trusted By Section - Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Left Side - Static Text */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Trusted by 500+ Leaders</div>
                <div className="text-sm text-slate-500">Fortune 500 companies worldwide</div>
              </div>
            </div>

            {/* Right Side - Infinite Scroll Marquee */}
            <div className="flex-1 relative overflow-hidden mask-linear-gradient">
              {/* Gradient Masks for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling Container */}
              <div className="flex animate-marquee whitespace-nowrap">
                {doubledCompanies.map((company, index) => (
                  <div
                    key={`${company}-${index}`}
                    className="flex items-center gap-8 mx-8"
                  >
                    <span className="text-xl md:text-2xl font-bold text-slate-300 dark:text-slate-600 hover:text-slate-400 dark:hover:text-slate-500 transition-colors cursor-default">
                      {company}
                    </span>
                    {/* Separator Dot */}
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-50" />
                  </div>
                ))}
              </div>
            </div>
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
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        .mask-linear-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}