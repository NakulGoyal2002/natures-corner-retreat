"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    quote: 'An unforgettable stay! The yoga sessions and nature walks were magical.',
  },
  {
    name: 'James R.',
    rating: 5,
    quote: 'The cabins are luxurious, and the wild swim pond was a highlight!',
  },
  {
    name: 'Emily T.',
    rating: 4,
    quote: 'Perfect for a peaceful getaway. The staff were incredibly attentive.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-800 mb-4 font-playfair"
        >
          Guest Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-center text-gray-600 mb-12 font-poppins"
        >
          Hear from our guests about their unforgettable experiences.
        </motion.p>

        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          className="max-w-2xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 font-poppins italic">"{testimonial.quote}"</p>
              <p className="text-gray-800 font-semibold mt-4 font-playfair">{testimonial.name}</p>
            </motion.div>
          ))}
        </Carousel>
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

export default Testimonials;