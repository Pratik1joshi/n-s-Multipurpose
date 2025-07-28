"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending...');
    setError(false);
    setSuccess(false);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        body: form,
      });
      const data = await res.json();
      setLoading(false);
      if (data.success) {
        setStatus('Message sent successfully!');
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setStatus('Failed to send message.');
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch (error) {
      setLoading(false);
      setStatus('Something went wrong.');
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
        Send us a Message
      </h3>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <motion.div whileFocus={{ scale: 1.03 }}>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1 md:mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base text-gray-800 placeholder-gray-500 shadow-sm"
            placeholder="Your Name"
            required
            disabled={loading}
          />
        </motion.div>
        <motion.div whileFocus={{ scale: 1.03 }}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1 md:mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base text-gray-800 placeholder-gray-500 shadow-sm"
            placeholder="your@email.com"
            required
            disabled={loading}
          />
        </motion.div>
        <motion.div whileFocus={{ scale: 1.03 }}>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1 md:mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base text-gray-800 placeholder-gray-500 shadow-sm"
            placeholder="Tell us about your training interests..."
            required
            disabled={loading}
          ></textarea>
        </motion.div>
        <div className="relative">
          <motion.div whileHover={{ scale: 1.03 }}>
            <Button 
              type="submit"
              className={`cursor-pointer w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 py-2 md:py-3 text-sm md:text-base ${loading ? 'opacity-80' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </div>
              ) : 'Send Message'}
            </Button>
          </motion.div>
          {/* Status Messages */}
          <AnimatePresence>
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-16 left-0 right-0 flex items-center p-4 mb-4 text-sm rounded-lg bg-green-50 text-green-800 shadow-lg"
              >
                <CheckCircle className="flex-shrink-0 w-5 h-5 mr-2" />
                <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
              </motion.div>
            )}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-16 left-0 right-0 flex items-center p-4 mb-4 text-sm rounded-lg bg-red-50 text-red-800 shadow-lg"
              >
                <AlertCircle className="flex-shrink-0 w-5 h-5 mr-2" />
                <span className="font-medium">{status || 'Failed to send message. Please try again later.'}</span>
              </motion.div>
            )}
            {!error && !success && status && loading && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-16 left-0 right-0 flex items-center p-4 mb-4 text-sm rounded-lg bg-blue-50 text-blue-800 shadow-lg"
              >
                <Loader2 className="flex-shrink-0 w-5 h-5 mr-2 animate-spin" />
                <span className="font-medium">{status}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </motion.div>
  );
}
