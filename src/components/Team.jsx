'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Github,
  Sparkles,
  ArrowUpRight,
  MapPin,
  Award,
  Zap,
  Users,
  Plus,
  Star,
  Heart,
  Globe2,
  ArrowRight,
  TrendingUp,
  Clock,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';

const team = [
  {
    name: 'Alex Rivera',
    role: 'Chief Executive Officer',
    bio: 'Visionary leader with 15+ years scaling global SaaS platforms and enterprise solutions.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    location: 'New York, USA',
    social: { linkedin: '#', twitter: '#', email: 'alex@am-vertex.com' },
    color: 'from-blue-500 via-cyan-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    tags: ['Strategy', 'Leadership', 'Vision']
  },
  {
    name: 'Sarah Chen',
    role: 'Lead AI Engineer',
    bio: 'PhD in Neural Networks. Pioneer in generative models and large-scale AI deployment.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    location: 'San Francisco, USA',
    social: { linkedin: '#', github: '#', email: 'sarah@am-vertex.com' },
    color: 'from-purple-500 via-pink-500 to-rose-500',
    bgColor: 'bg-purple-500/10',
    tags: ['AI/ML', 'Research', 'GenAI']
  },
  {
    name: 'Marcus Thorne',
    role: 'Creative Director',
    bio: 'Award-winning designer crafting immersive 3D experiences and visual identities.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    location: 'London, UK',
    social: { linkedin: '#', twitter: '#', email: 'marcus@am-vertex.com' },
    color: 'from-amber-500 via-orange-500 to-red-500',
    bgColor: 'bg-amber-500/10',
    tags: ['Design', '3D', 'Brand']
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Operations',
    bio: 'Expert in scaling agile workflows and cross-functional team management.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    location: 'Madrid, Spain',
    social: { linkedin: '#', twitter: '#', email: 'elena@am-vertex.com' },
    color: 'from-emerald-500 via-teal-500 to-cyan-500',
    bgColor: 'bg-emerald-500/10',
    tags: ['Operations', 'Agile', 'Scale']
  },
];

const benefits = [
  { icon: Zap, title: 'Remote First', desc: 'Work from anywhere in the world', color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/20' },
  { icon: Award, title: 'Top 1% Pay', desc: 'Compensation above market rate', color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20' },
  { icon: Heart, title: 'Unlimited PTO', desc: 'Take time when you need it', color: 'text-rose-400', bgColor: 'bg-rose-500/10', borderColor: 'border-rose-500/20' },
  { icon: Sparkles, title: 'Latest Tech', desc: 'Cutting-edge tools & hardware', color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/20' },
];

const stats = [
  { value: '4.9', label: 'Team Rating', suffix: '/5', icon: Star, color: 'from-amber-400 to-orange-500', bgColor: 'bg-amber-50 dark:bg-amber-950/30', borderColor: 'border-amber-200 dark:border-amber-800' },
  { value: '15+', label: 'Countries', suffix: '', icon: Globe2, color: 'from-blue-400 to-cyan-500', bgColor: 'bg-blue-50 dark:bg-blue-950/30', borderColor: 'border-blue-200 dark:border-blue-800' },
  { value: '50+', label: 'Combined Years', suffix: ' Exp', icon: Clock, color: 'from-purple-400 to-pink-500', bgColor: 'bg-purple-50 dark:bg-purple-950/30', borderColor: 'border-purple-200 dark:border-purple-800' },
  { value: '100%', label: 'Remote', suffix: '', icon: Zap, color: 'from-emerald-400 to-teal-500', bgColor: 'bg-emerald-50 dark:bg-emerald-950/30', borderColor: 'border-emerald-200 dark:border-emerald-800' },
];

function TeamCard({ member, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-full cursor-pointer"
    >
      <div className="relative h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`} />
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        <div className="relative h-72 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-all duration-700 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white text-xs font-medium"
          >
            <MapPin className="w-3 h-3" />
            {member.location}
          </motion.div>

          <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/20 backdrop-blur-md border border-amber-500/30">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-amber-300">5.0</span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="flex justify-center gap-3">
              {Object.entries(member.social).map(([platform, url], i) => {
                const icons = { linkedin: Linkedin, twitter: Twitter, github: Github, email: Mail };
                const Icon = icons[platform];
                const colors = {
                  linkedin: 'hover:bg-blue-600 hover:text-white',
                  twitter: 'hover:bg-sky-500 hover:text-white',
                  github: 'hover:bg-slate-800 hover:text-white',
                  email: 'hover:bg-rose-500 hover:text-white'
                };
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className={`p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white ${colors[platform]} transition-all shadow-lg`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative p-5">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${member.bgColor} border border-slate-200 dark:border-white/10 mb-3`}>
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.color} animate-pulse`} />
            <span className={`text-xs font-bold bg-gradient-to-r ${member.color} bg-clip-text text-transparent uppercase tracking-wider`}>
              {member.role}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {member.name}
          </h3>
          
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">
            {member.bio}
          </p>

          <div className="flex flex-wrap gap-2">
            {member.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-400 font-medium border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`} />
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-purple-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-pink-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" 
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <Users className="w-4 h-4 text-purple-500" />
            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">World-Class Talent</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Meet the{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Visionaries
              </span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 400 20"
                fill="none"
              >
                <motion.path
                  d="M2 15C100 5 300 5 398 15"
                  stroke="url(#visionary-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="visionary-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9333EA" />
                    <stop offset="50%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The brilliant minds engineering the future of enterprise AI and creative technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Updated Stats Section - Attractive Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative p-5 rounded-2xl ${stat.bgColor} ${stat.borderColor} border shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden group`}
              >
                {/* Top Accent Line - Full Width */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-white dark:bg-slate-800 ${stat.borderColor} border flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-5 h-5 bg-gradient-to-br ${stat.color} bg-clip-text`} style={{
                      stroke: stat.color.includes('amber') ? '#F59E0B' :
                              stat.color.includes('blue') ? '#3B82F6' :
                              stat.color.includes('purple') ? '#A855F7' : '#10B981'
                    }} />
                  </div>
                  
                  {/* Value - Reduced Size */}
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}<span className="text-lg">{stat.suffix}</span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section - Updated with Dark Mode Classes */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-3xl transform -skew-y-1" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] rounded-3xl opacity-50" />
          
          <div className="absolute -top-20 left-1/4 w-96 h-96 bg-purple-500/30 dark:bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-blue-500/30 dark:bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative p-10 md:p-16 rounded-3xl overflow-hidden border border-slate-700/50 dark:border-slate-800/50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-white text-xs font-medium mb-6"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span>Join 500+ Innovators</span>
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                >
                  Ready to shape the{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    future?
                  </span>
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-300 dark:text-slate-400 mb-8 leading-relaxed"
                >
                  We&apos;re building something extraordinary. Join our team of visionaries, creators, and engineers pushing the boundaries of what&apos;s possible.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-3"
                >
                  <button className="group px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2 text-sm shadow-lg">
                    <span>Explore Careers</span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-all">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </button>
                  <button className="px-6 py-3 border border-white/30 dark:border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 dark:hover:bg-white/5 transition-all flex items-center gap-2 text-sm backdrop-blur-sm">
                    <Globe2 className="w-4 h-4" />
                    <span>Remote Roles</span>
                  </button>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-5 rounded-xl ${benefit.bgColor} backdrop-blur-sm border ${benefit.borderColor} hover:bg-white/10 dark:hover:bg-white/5 transition-all cursor-pointer ${index === 0 ? 'col-span-2' : ''}`}
                  >
                    <benefit.icon className={`w-8 h-8 ${benefit.color} mb-3`} />
                    <div className="font-bold text-white mb-1">{benefit.title}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-500">{benefit.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-10 right-10 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-white/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl shadow-purple-500/30 flex items-center justify-center hover:shadow-purple-500/50 transition-all"
      >
        <ArrowUpRight className="w-5 h-5 rotate-[-45deg]" />
      </motion.button>
    </section>
  );
}