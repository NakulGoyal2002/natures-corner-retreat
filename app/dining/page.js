'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DiningExperience() {
  // Bubble animation variants
  const bubbleVariants = {
    float: {
      y: [0, -30, 0],
      x: [0, 15, -15, 0],
      scale: [1, 1.3, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 3,
      },
    },
  };

  // Star animation variants
  const starVariants = {
    glow: {
      scale: [1, 1.6, 1],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2,
      },
    },
  };

  // Eco-icon (wheat stalk) animation
  const ecoIconVariants = {
    zoom: {
      scale: [1, 1.4, 1],
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-800 to-blue-600 flex items-center justify-center px-4 py-12 overflow-hidden relative">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-opacity-10"
        style={{ backgroundPosition: 'center' }}
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Bubbles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute w-10 h-10 bg-white bg-opacity-20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={bubbleVariants}
          animate="float"
        />
      ))}

      {/* Glowing Stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-3 h-3 bg-yellow-300 rounded-full"
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
        className="absolute top-10 left-10 text-green-400 text-6xl"
        variants={ecoIconVariants}
        animate="zoom"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm-6 6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm0 8c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm12-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm0 8c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"/>
        </svg>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl border border-white border-opacity-20 z-10"
        initial={{ opacity: 0, y: 50, rotateX: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Dining Experience at Nature Corner Retreat
        </motion.h1>
        <motion.p
          className="text-center text-lg text-gray-300 mb-8 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Savor organic, farm-to-table cuisine rooted in tradition, served with a commitment to sustainability.
        </motion.p>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* Breakfast Section */}
          <motion.div
            className="p-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            whileHover={{ scale: 1.02, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-2">Breakfast: A Wholesome Start</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              <li><strong>Aloo Paratha:</strong> Organic potatoes stuffed in whole-wheat flatbread, served with farm-fresh curd.</li>
              <li><strong>Poha:</strong> Flattened rice with peas, peanuts, and local spices, topped with fresh coriander.</li>
              <li><strong>Fresh Fruit Platter:</strong> Seasonal fruits from local orchards, paired with honey drizzle.</li>
            </ul>
          </motion.div>

          {/* Lunch/Dinner Section */}
          <motion.div
            className="p-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            whileHover={{ scale: 1.02, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-2">Lunch & Dinner: Soulful Thalis</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              <li><strong>Kumaoni Aloo Gutka:</strong> Spiced potatoes with Uttarakhandi herbs, served with organic puri.</li>
              <li><strong>Organic Dal Tadka:</strong> Lentils tempered with ghee, paired with jeera rice from local farms.</li>
              <li><strong>Pahadi Raita:</strong> Cucumber and mint yogurt, made with curd from our dairy partners.</li>
              <li><strong>Vegan Option:</strong> Chickpea curry with wild greens, gluten-free and nutrient-rich.</li>
            </ul>
          </motion.div>

          {/* Snacks Section */}
          <motion.div
            className="p-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            whileHover={{ scale: 1.02, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-2">Snacks: Light & Healthy</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              <li><strong>Roasted Makhana:</strong> Organic fox nuts roasted with Himalayan salt and spices.</li>
              <li><strong>Vegetable Pakoras:</strong> Seasonal veggies in chickpea flour batter, served with mint chutney.</li>
              <li><strong>Fruit Chaat:</strong> Spiced fruit salad with tamarind drizzle, zero added sugar.</li>
            </ul>
          </motion.div>

          {/* Beverages Section */}
          <motion.div
            className="p-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            whileHover={{ scale: 1.02, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-2">Beverages: Pure Refreshment</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              <li><strong>Masala Chai:</strong> Organic tea leaves with cardamom, served in compostable cups.</li>
              <li><strong>Fresh Juice:</strong> Seasonal fruits (e.g., orange, pomegranate), no preservatives.</li>
              <li><strong>Herbal Infusion:</strong> Tulsi and mint tea, sourced from our gardens.</li>
            </ul>
          </motion.div>

          {/* Eco-Commitment Section */}
          <motion.div
            className="p-4 rounded-lg bg-teal-900 bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gold-400 mb-2">Our Eco-Commitment</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              <li><strong>100% Organic:</strong> Ingredients sourced from local farms and our gardens.</li>
              <li><strong>Zero Plastic:</strong> Compostable serveware, no plastic packaging.</li>
              <li><strong>Low-Carbon Cooking:</strong> Solar-powered kitchens, minimal gas usage.</li>
              <li><strong>Local Sourcing:</strong> 90% ingredients from within 50km, supporting farmers.</li>
              <li><strong>Zero Waste:</strong> Food scraps composted for our organic gardens.</li>
            </ul>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}