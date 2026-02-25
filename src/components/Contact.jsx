'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Cloud Infrastructure',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade solutions for the next generation of industry leaders. We are here to help you scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-dark-800 p-8 rounded-3xl border border-gray-200 dark:border-dark-700 shadow-xl">
              <div className="mb-8">
                <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
                  Get in Touch
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  We&apos;d love to hear from you
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Send us a message and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@enterprise.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  >
                    <option>Cloud Infrastructure</option>
                    <option>AI & Machine Learning</option>
                    <option>Creative Design</option>
                    <option>Digital Marketing</option>
                    <option>Cybersecurity</option>
                    <option>Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 hover:border-primary-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Global HQ</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  1200 Avenue of the Americas<br />
                  New York, NY 10036<br />
                  United States
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 hover:border-primary-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email Us</h4>
                <div className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  <p>General: info@am-vertex.com</p>
                  <p>Support: help@am-vertex.com</p>
                  <p>Sales: deals@am-vertex.com</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 hover:border-primary-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Call Us</h4>
                <div className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                  <p>Main: +1 (555) 000-1234</p>
                  <p>Fax: +1 (555) 000-5678</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 hover:border-primary-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://www.shutterstock.com/image-vector/world-map-technology-style-dark-260nw-1606504939.jpg"
                alt="Location Map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span className="font-medium">New York, USA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}