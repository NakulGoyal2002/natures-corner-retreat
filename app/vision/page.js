'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function OurVision() {
  // State for eco-icon carousel
  const [activeIcon, setActiveIcon] = useState(0);
  const ecoIcons = [
    { name: 'Leaf', svg: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.22-1.78L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>' },
    { name: 'Tree', svg: '<path d="M18 7c-1.1 0-2 .9-2 2v2h-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v4H8V9c0-1.1-.9-2-2-2S4 7.9 4 9v6h2v3H4v2h16v-2h-2v-3h2V9c0-1.1-.9-2-2-2zm-6 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>' },
    { name: 'Solar', svg: '<path d="M12 3v1.5M12 19.5V21M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h1.5M19.5 12h1.5M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5.99a6 6 0 0 0-5.99 6A6 6 0 0 0 12 18a6 6 0 0 0 5.99-6A6 6 0 0 0 12 5.99z"/>' },
  ];

  // Animation variants
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

  const progressVariants = {
    fill: { width: '100%', transition: { duration: 2, ease: 'easeOut' } },
  };

  // Intersection observer for progress bars
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-800 to-blue-600 flex flex-col items-center justify-center px-4 py-12 overflow-hidden relative">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/leaf-pattern.png')] bg-cover opacity-10"
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

      {/* Eco-Icon Carousel */}
      <motion.div
        className="absolute top-10 left-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIcon}
            className="text-green-400 text-6xl"
            variants={ecoIconVariants}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d={ecoIcons[activeIcon].svg} />
            </svg>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-2 mt-4">
          {ecoIcons.map((icon, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${activeIcon === index ? 'bg-gold-500' : 'bg-gray-400'}`}
              onClick={() => setActiveIcon(index)}
            />
          ))}
        </div>
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
          className="text-4xl md:text-6xl font-extrabold text-center text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Our Vision: A Sustainable Sanctuary
        </motion.h1>

        <motion.div
          className="space-y-6 text-white text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* Vision Text */}
          <motion.div
            className="p-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            whileHover={{ scale: 1.02, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
          >
            <p className="text-justify">
              At <strong>Nature Corner Retreat</strong>, we envision a world where luxury meets sustainability. Our sanctuary is built with natural wood, crafting furniture and cultural plates that celebrate our heritage. By powering <strong>80% of our operations with solar panels</strong>, we harness renewable energy, reducing our carbon footprint. Every year, we transplant <strong>500 native trees</strong>, nurturing biodiversity and preserving the lush forests around us.
            </p>
          </motion.div>

          <motion.div
            className="p-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            whileHover={{ scale: 1.02, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
          >
            <p className="text-justify">
              We stand firm against waste, embracing a <strong>zero-plastic policy</strong> by eliminating plastic bags and using biodegradable alternatives. Our kitchens serve only <strong>organic, farm-to-table cuisine</strong>, rooted in traditional recipes that nourish both body and soul. Junk food is replaced with wholesome, healthy dishes, reflecting our commitment to wellness and sustainability.
            </p>
          </motion.div>

          <motion.div
            className="p-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            whileHover={{ scale: 1.02, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
          >
            <p className="text-justify">
              Our mission is to achieve <strong>near-zero carbon emissions</strong> through innovative practices. From energy-efficient lighting to mindful resource use, we take repeated steps to minimize our environmental impact. Our vision extends beyond our retreat—we inspire guests to adopt eco-friendly habits, creating a ripple effect for a greener planet.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            className="text-center italic text-gold-400 text-xl p-4 border-l-4 border-gold-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p>
              <strong>Mission:</strong> To live in harmony with nature, preserving our planet for future generations through sustainable practices and cultural reverence.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            className="p-4 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-2">Our Core Values</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Eco-Friendliness:</strong> Prioritizing sustainable materials and renewable energy.</li>
              <li><strong>Cultural Heritage:</strong> Celebrating traditional designs and cuisine.</li>
              <li><strong>Health & Wellness:</strong> Offering organic, wholesome food for body and soul.</li>
              <li><strong>Innovation:</strong> Pioneering low-carbon solutions for a greener future.</li>
            </ul>
          </motion.div>

          {/* Guest Quote */}
          <motion.div
            className="text-center italic text-gray-300 p-4 border-t-2 border-b-2 border-teal-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p>
              “Staying at Nature Corner Retreat was transformative. The organic meals, eco-friendly cottages, and thriving greenery made me feel truly connected to nature.” — Priya Sharma, Guest
            </p>
          </motion.div>
        </motion.div>

        {/* Progress Bars */}
        <motion.div
          ref={ref}
          className="mt-8 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-teal-400 text-center">Our Eco Impact</h3>
          <div>
            <p className="text-sm text-gray-300">Renewable Energy Usage</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-green-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: '80%' } : { width: 0 }}
                transition={{ duration: 2 }}
              />
            </div>
            <p className="text-sm text-gray-300 text-right">80%</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Plastic-Free Operations</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-gold-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 2 }}
              />
            </div>
            <p className="text-sm text-gray-300 text-right">100%</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Trees Planted Annually</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-teal-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: '50%' } : { width: 0 }}
                transition={{ duration: 2 }}
              />
            </div>
            <p className="text-sm text-gray-300 text-right">500 Trees</p>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <p className="text-sm text-gray-300 italic">
            Image: A vibrant forest clearing with eco-friendly wooden cottages, solar panels shimmering in sunlight, and lush organic gardens. Cultural wooden plates adorn outdoor tables, surrounded by native plants and a soft green-gold glow, reflecting our sustainable vision.
          </p>
          <p className="text-sm text-gray-300 mt-2">
            <strong>AI Image Prompt:</strong> A dynamic forest clearing with wooden cottages, solar panels, and organic gardens. Include cultural wooden plates, native plants, and a green-gold glow (#10B981, #F59E0B). Use a 2D vibrant palette with glassmorphism overlay, faint leaf patterns, and glowing stars. Size: 800x400px, dynamic and eco-friendly.
          </p>
        </motion.div>

        {/* Why It's Unique */}
        <motion.div
          className="mt-8 text-center p-4 bg-teal-900 bg-opacity-50 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gold-400 mb-2">Why Our Vision Stands Out</h3>
          <p className="text-gray-300">
            Unlike generic hotel websites, our vision page combines cutting-edge React and Framer Motion for dynamic animations, Tailwind CSS for responsive design, and a nature-inspired aesthetic. The interactive eco-icon carousel, parallax background, and progress bars showcase technical innovation, while our zero-plastic, organic focus sets a new standard for eco-tourism.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}