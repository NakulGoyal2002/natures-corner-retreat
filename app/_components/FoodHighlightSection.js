'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FoodHighlightSection() {
  // Bubble animation variants
  const bubbleVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      scale: [1, 1.2, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2,
      },
    },
  };

  // Star animation variants
  const starVariants = {
    glow: {
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 1.5,
      },
    },
  };

  // Eco-icon (wheat stalk) animation
  const ecoIconVariants = {
    zoom: {
      scale: [1, 1.3, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative w-full py-16 bg-gradient-to-br from-green-900 via-teal-800 to-blue-600 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-opacity-10"
        style={{ backgroundPosition: 'center' }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Bubbles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute w-8 h-8 bg-white bg-opacity-20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={bubbleVariants}
          animate="float"
        />
      ))}

      {/* Glowing Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={starVariants}
          animate="glow"
        />
      ))}

      {/* Animated Eco-Icon (Wheat Stalk) */}
      <motion.div
        className="absolute top-8 left-8 text-green-400 text-5xl md:text-6xl"
        variants={ecoIconVariants}
        animate="zoom"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm-6 6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm0 8c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm12-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm0 8c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"/>
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Savor Nature’s Finest Cuisine
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-300 mb-8 italic max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Organic, traditional, and sustainable — our breakfast is a celebration of health and flavor.
        </motion.p>

        <motion.div
          className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-3xl border border-white border-opacity-20"
          initial={{ opacity: 0, y: 50, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
        >
          {/* Breakfast Highlights */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-3">Best Breakfast Highlights</h3>
            <ul className="list-disc list-inside text-white space-y-2 text-sm md:text-base">
              <li><strong>Aloo Paratha:</strong> Organic potatoes in whole-wheat flatbread, served with farm-fresh curd.</li>
              <li><strong>Poha:</strong> Flattened rice with local spices, peanuts, and fresh coriander.</li>
              <li><strong>Fresh Fruit Platter:</strong> Seasonal fruits with honey drizzle, sourced from local orchards.</li>
            </ul>
          </motion.div>

          {/* Eco-Commitment */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-3">Our Eco-Promise</h3>
            <ul className="list-disc list-inside text-white space-y-2 text-sm md:text-base">
              <li><strong>Zero Junk Food:</strong> Only wholesome, traditional dishes, no processed foods.</li>
              <li><strong>100% Organic:</strong> Ingredients from local farms and our gardens.</li>
              <li><strong>Sustainable Dining:</strong> Zero plastic, solar-powered kitchens, local sourcing.</li>
            </ul>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link href="/dining">
              <motion.button
                className="bg-gold-500 text-white font-bold py-3 px-6 rounded-full hover:bg-gold-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Menu
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          className="mt-8 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-sm text-gray-300 italic">
            Image: A vibrant breakfast table in a forest clearing, with organic Aloo Paratha and Poha on cultural wooden plates, surrounded by lush greenery and solar lanterns.
          </p>
          <p className="text-sm text-gray-300 mt-2">
            <strong>AI Image Prompt:</strong> A forest breakfast setup with wooden tables, organic Aloo Paratha and Poha on cultural plates, solar lanterns, and lush greenery. Use a green-gold palette (#10B981, #F59E0B), glassmorphism overlay, faint leaf patterns, and glowing stars. Size: 800x400px, vibrant and eco-friendly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}