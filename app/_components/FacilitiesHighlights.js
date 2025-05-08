"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const facilities = [
  {
    title: 'Free Wi-Fi',
    description: 'High-speed internet throughout the retreat.',
    icon: '📶',
  },
  {
    title: 'Guided Nature Walks',
    description: 'Daily walks with expert naturalists.',
    icon: '🌲',
  },
  {
    title: 'Wild Swim Pond',
    description: 'Natural, chemical-free swimming.',
    icon: '🏊',
  },
  {
    title: 'Outdoor Yoga',
    description: 'Morning sessions in serene surroundings.',
    icon: '🧘',
  },
];

const FacilitiesHighlights = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-800 mb-4 font-playfair"
        >
          Our Amenities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-center text-gray-600 mb-12 font-poppins"
        >
          Enjoy complimentary facilities designed for your comfort and connection with nature.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-4xl mb-4"
              >
                {facility.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 font-playfair">{facility.title}</h3>
              <p className="text-sm text-gray-500 font-poppins mt-2">{facility.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/facilities"
            className="inline-block bg-accent-500 text-white px-8 py-4 rounded-md font-semibold hover:bg-accent-600 transition-colors font-poppins"
          >
            See All Facilities
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap');
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default FacilitiesHighlights;