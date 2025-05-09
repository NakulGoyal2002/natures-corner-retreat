"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const attractions = [
  {
    name: "Binsar Wildlife Sanctuary",
    distance: "30 km from Nature's Corner Retreat",
    description:
      "Nestled in the Kumaon Himalayas, Binsar Wildlife Sanctuary offers stunning views of snow-capped peaks, dense oak forests, and diverse wildlife like leopards, Himalayan bears, and over 200 bird species. It's a paradise for nature lovers.",
    activities: ["Trekking", "Bird Watching", "Photography"],
    image: "/binsar-sanctuary.jpg",
  },
  {
    name: "Kasar Devi Temple",
    distance: "8 km from Nature's Corner Retreat",
    description:
      "A sacred temple dating back to the 2nd century, Kasar Devi is known for its spiritual energy and serene surroundings. The temple is perched on a hill, offering panoramic views of the Himalayas and lush pine forests.",
    activities: ["Meditation", "Short Hikes", "Sunset Views"],
    image: "/kasar-devi-temple.jpg",
  },

  {
    name: "Jageshwar Dham",
    distance: "35 km from Nature's Corner Retreat",
    description:
      "A historic temple complex dedicated to Lord Shiva, Jageshwar Dham features over 100 ancient shrines set amidst towering deodar trees. The peaceful ambiance and intricate architecture make it a must-visit.",
    activities: ["Temple Visit", "History Exploration", "Nature Walks"],
    image: "/jageshwar-dham.jpg",
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExploreArea = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 font-playfair"
        >
          Explore the Area
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto font-poppins"
        >
          Discover the natural wonders and cultural gems near Nature’s Corner
          Retreat, nestled in the heart of the Kumaon Himalayas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-playfair">
                  {attraction.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3 font-poppins">
                  {attraction.distance}
                </p>
                <p className="text-gray-600 mb-4 font-poppins">
                  {attraction.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {attraction.activities.map((activity, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full font-poppins"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap");
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
    </section>
  );
};

export default ExploreArea;
