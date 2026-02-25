'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Github, ArrowRight, Sparkles, Users, Zap, Globe } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'Chief Executive Officer',
    bio: '15+ years of leadership in enterprise technology and scaling global SaaS platforms.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', email: 'alex@am-vertex.com' },
  },
  {
    name: 'Sarah Chen',
    role: 'Lead AI Engineer',
    bio: 'PhD in Neural Networks specializing in generative models and large-scale AI deployment.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    social: { linkedin: '#', github: '#', email: 'sarah@am-vertex.com' },
  },
  {
    name: 'Marcus Thorne',
    role: 'Senior Graphics Designer',
    bio: 'Award-winning designer with a decade of experience in immersive 3D graphics and UI/UX.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', email: 'marcus@am-vertex.com' },
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Operations',
    bio: 'Expert in scaling agile workflows and managing complex cross-functional product teams.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', email: 'elena@am-vertex.com' },
  },
  {
    name: 'David Park',
    role: 'Full Stack Developer',
    bio: 'Cloud architecture specialist focused on secure, distributed systems and real-time data.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    social: { linkedin: '#', github: '#', email: 'david@am-vertex.com' },
  },
  {
    name: 'Julia Smyth',
    role: 'UX Research Lead',
    bio: 'Dedicated to human-centric AI design and ensuring accessibility across all platforms.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', email: 'julia@am-vertex.com' },
  },
  {
    name: 'Michael Scott',
    role: 'Cloud Architect',
    bio: 'Leading the transition to serverless infrastructures and global scale data pipelines.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    social: { linkedin: '#', github: '#', email: 'michael@am-vertex.com' },
  },
  {
    name: 'Leila Vance',
    role: 'Data Scientist',
    bio: 'Specializes in predictive analytics and high-dimensional data visualization techniques.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    social: { linkedin: '#', twitter: '#', email: 'leila@am-vertex.com' },
  },
];

const stats = [
  { value: '50+', label: 'Team Members', icon: Users },
  { value: '12', label: 'Countries', icon: Globe },
  { value: '8', label: 'Years Active', icon: Zap },
];

export default function TeamPage() {
  return (
    <div className="pt-16 bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop"
            alt="Office"
            fill
            className="object-cover opacity-10 dark:opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-slate-50 dark:from-slate-950/90 dark:via-slate-950/95 dark:to-slate-950" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/20 rounded-full blur-[100px]" 
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 backdrop-blur-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm mb-6 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-default"
            >
              <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span className="font-medium tracking-wide">Our People</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Meet the{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Visionaries
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              The engineers, designers, and creators building the future of enterprise AI and graphics at AM-VERTEX.
            </p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 dark:from-blue-900/10 via-slate-50 dark:via-slate-950 to-slate-50 dark:to-slate-950" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  
                  {/* Social Links - Slide up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter} 
                        className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-200"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-200"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-xs mb-3 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 dark:from-slate-950 via-white dark:via-slate-900 to-slate-50 dark:to-slate-950" />
        
        {/* Background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[100px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-10 md:p-14 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-800 border border-slate-700 shadow-2xl relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Join the Team?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
              We're always looking for talented individuals who are passionate about the intersection of AI, design, and enterprise technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-3.5 bg-white text-slate-900 rounded-full font-semibold hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all inline-flex items-center gap-2 text-sm">
                View Openings
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3.5 border border-slate-600 text-white rounded-full font-medium hover:bg-slate-800 hover:border-slate-500 transition-all text-sm">
                Our Values
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}