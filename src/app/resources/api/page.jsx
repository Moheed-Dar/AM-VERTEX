'use client';

import { motion } from 'framer-motion';
import { Code2, ArrowRight, Copy, Check, Terminal } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function APIPage() {
  const [copied, setCopied] = useState(false);

  const codeExample = `curl -X GET "https://api.example.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;

  const endpoints = [
    { method: 'GET', path: '/users', desc: 'List all users' },
    { method: 'POST', path: '/users', desc: 'Create a new user' },
    { method: 'GET', path: '/users/:id', desc: 'Get user by ID' },
    { method: 'PUT', path: '/users/:id', desc: 'Update user' },
    { method: 'DELETE', path: '/users/:id', desc: 'Delete user' }
  ];

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-slate-500 mb-8"
        >
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <Link href="/resources" className="hover:text-orange-500">Resources</Link>
          <span>/</span>
          <span className="text-orange-500">API Reference</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-sky-600 text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            API Reference
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            API <span className="text-sky-600">Documentation</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Build powerful integrations with our RESTful API. Comprehensive documentation, 
            code examples, and SDKs for popular languages.
          </p>
        </motion.div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 rounded-2xl bg-slate-900 overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-4 bg-slate-800 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-sky-400" />
              <span className="text-slate-300 font-mono text-sm">Example Request</span>
            </div>
            <button
              onClick={copyCode}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm text-slate-300 font-mono">
              <code>{codeExample}</code>
            </pre>
          </div>
        </motion.div>

        {/* Endpoints */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Endpoints</h2>
          {endpoints.map((endpoint, index) => (
            <motion.div
              key={endpoint.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <span className={'px-3 py-1 rounded-lg text-xs font-bold ' + (
                endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                endpoint.method === 'PUT' ? 'bg-amber-100 text-amber-700' :
                'bg-red-100 text-red-700'
              )}>
                {endpoint.method}
              </span>
              <code className="text-slate-900 dark:text-slate-300 font-mono">{endpoint.path}</code>
              <span className="text-slate-500 ml-auto">{endpoint.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/resources/docs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition-all"
          >
            View Full Documentation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}