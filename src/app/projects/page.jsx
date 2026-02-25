'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  FolderOpen,
  Layers,
  Cpu,
  Palette,
  LineChart
} from 'lucide-react';
import Image from 'next/image';

const categories = [
  { id: 'all', name: 'All Work', icon: Layers },
  { id: 'engineering', name: 'Engineering', icon: Cpu },
  { id: 'creative', name: 'Creative', icon: Palette },
  { id: 'strategy', name: 'Strategy', icon: LineChart },
];

const projects = [
  {
    id: 1,
    title: 'Neural Architecture 2.0',
    category: 'engineering',
    tags: ['AI & Machine Learning', 'Enterprise'],
    description: 'A complete overhaul of neural network efficiency for high-scale data processing. We achieved a 40% reduction in latency for global financial transactions using our proprietary vertex routing algorithm.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    borderColor: 'border-orange-200 dark:border-orange-800',
    stats: { metric: '40%', label: 'Latency Reduction' },
    featured: true
  },
  {
    id: 2,
    title: 'Lumina Brand Identity',
    category: 'creative',
    tags: ['Creative', 'Branding'],
    description: 'Reimagining a sustainable energy giant\'s visual language for the digital-first era. Complete brand overhaul including logo, typography, and design system.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    borderColor: 'border-purple-200 dark:border-purple-800',
    stats: { metric: '300%', label: 'Brand Recognition' },
    featured: false
  },
  {
    id: 3,
    title: 'Vault Protocol',
    category: 'engineering',
    tags: ['Engineering', 'Security'],
    description: 'Developing an unbreakable end-to-end encryption layer for government-level communication systems. Zero-trust architecture with quantum-resistant algorithms.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    borderColor: 'border-blue-200 dark:border-blue-800',
    stats: { metric: '256-bit', label: 'Encryption' },
    featured: false
  },
  {
    id: 4,
    title: 'Vertex Cinematics',
    category: 'creative',
    tags: ['Creative', 'Cinema'],
    description: 'High-end commercial production for a global automotive launch, featuring Unreal Engine integration and real-time ray tracing technology.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-200 dark:border-amber-800',
    stats: { metric: '4K', label: 'Real-time Rendering' },
    featured: false
  },
  {
    id: 5,
    title: 'Market Engine AI',
    category: 'strategy',
    tags: ['Strategy', 'Analytics'],
    description: 'Predictive modeling tool that helps retailers optimize inventory based on hyper-local weather patterns and consumer behavior analysis.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    stats: { metric: '85%', label: 'Accuracy' },
    featured: false
  },
  {
    id: 6,
    title: 'Orbit Mesh Network',
    category: 'engineering',
    tags: ['Engineering', 'Space Tech'],
    description: 'Architecting the protocol for decentralized satellite communication in low-earth orbit. Connecting the unconnected through space-based infrastructure.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=600&fit=crop',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
    borderColor: 'border-indigo-200 dark:border-indigo-800',
    stats: { metric: '12ms', label: 'Latency' },
    featured: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: {
      duration: 0.2
    }
  }
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Check if we should show CTA card (always show it at the end)
  const showCTA = filteredProjects.length > 0;

  return (
    <section className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium mb-6 shadow-sm"
          >
            <FolderOpen className="w-4 h-4 text-orange-500" />
            <span>Portfolio</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Engineering{' '}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Excellence
            </span>
            <br />
            through Creative Innovation.
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Discover how we transform complex challenges into world-class digital experiences 
            and robust engineering solutions for global enterprises.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat, index) => {
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all relative overflow-hidden ${isActive 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' 
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-orange-500 dark:hover:border-orange-500'
                  }`}
              >
                <cat.icon className={`w-4 h-4 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-orange-500'}`} />
                {cat.name}
                
                {/* Active indicator animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid with Animation */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.featured && activeCategory === 'all' ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${project.featured && activeCategory === 'all' ? 'h-80' : 'h-64'} overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && activeCategory === 'all' && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm text-slate-300 mb-4 line-clamp-2 ${project.featured && activeCategory === 'all' ? 'block' : 'opacity-0 group-hover:opacity-100 transition-opacity'}`}>
                    {project.description}
                  </p>

                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.stats.metric}
                      </div>
                      <div className="text-xs text-slate-400 leading-tight">
                        {project.stats.label}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
                    >
                      {project.featured && activeCategory === 'all' ? 'View Case Study' : 'Read Story'}
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </motion.div>
            ))}

            {/* CTA Card - Always shows at the end */}
            {showCTA && (
              <motion.div
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative h-64 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-6 flex flex-col justify-between overflow-hidden cursor-pointer group"
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Your project could be next.
                  </h3>
                  <p className="text-white/80 text-sm">
                    Ready to build something revolutionary? Let&apos;s discuss your engineering or creative vision.
                  </p>
                </div>

                <button className="flex items-center justify-center gap-2 w-full py-3 bg-white text-orange-600 rounded-xl font-bold hover:shadow-xl transition-all group-hover:scale-105">
                  Start Collaboration
                  <Sparkles className="w-4 h-4" />
                </button>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 border-4 border-white/10 rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <FolderOpen className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-slate-500 dark:text-slate-400">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Load More */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-semibold text-slate-700 dark:text-slate-300 hover:border-orange-500 dark:hover:border-orange-500 hover:text-orange-500 transition-all">
              Load More Projects
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-4 h-4 rotate-90" />
              </motion.span>
            </button>
          </motion.div>
        )}
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