"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import sustainability from "@/public/sustainability.jpg";

const Sustainability = () => {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  // Animate the progress circle
  useEffect(() => {
    const targetProgress = 85; // Representing 85% carbon footprint reduction
    const duration = 2000; // 2 seconds
    const increment = targetProgress / (duration / 50);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetProgress) {
          clearInterval(progressTimer);
          return targetProgress;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(progressTimer);
  }, []);

  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      controls.start({ backgroundPositionY: scrollPosition * 0.3 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="py-20 relative overflow-hidden bg-beige-100">
      <motion.div
        className="absolute inset-0 bg-leaf-pattern bg-opacity-10"
        animate={controls}
        initial={{ backgroundPositionY: 0 }}
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green to-transparent opacity-70"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <h2 className="text-5xl font-bold text-forest-green mb-6 font-cormorant leading-tight">
              Embracing a Greener Tomorrow
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-raleway">
              At Nature’s Corner Retreat, we weave sustainability into every
              experience—think solar-powered sanctuaries, organic farm-to-table
              dining, and zero-waste luxury. Let’s nurture the Earth together,
              one mindful stay at a time.
            </p>
            <div className="flex items-center mb-8">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full">
                  <circle
                    className="text-gray-300"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50%"
                    cy="50%"
                  />
                  <motion.circle
                    className="text-forest-green"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50%"
                    cy="50%"
                    strokeDasharray="251"
                    strokeDashoffset={251 - (progress / 100) * 251}
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-forest-green font-raleway">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>
              <p className="ml-4 text-gray-600 font-raleway">
                Carbon Footprint Reduction
              </p>
            </div>
            <a
              href="/sustainability"
              className="inline-block bg-forest-green text-white px-8 py-3 rounded-full font-semibold hover:bg-forest-green-dark transition-colors font-raleway"
            >
              Discover Our Impact
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative w-full h-96 flex justify-center items-center"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-beige-200 shadow-xl">
              <Image
                src={sustainability}
                alt="Sustainable practices at Nature’s Corner"
                fill
                className="object-cover"
                placeholder="blur"
                quality={90}
              />
            </div>
            <motion.div
              className="absolute w-16 h-16 bg-forest-green rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ top: "10%", left: "10%" }}
            >
              <span className="text-white text-2xl">🌿</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@400;700&family=Raleway:wght@300;400;600&display=swap");
        .font-cormorant {
          font-family: "Cormorant", serif;
        }
        .font-raleway {
          font-family: "Raleway", sans-serif;
        }
        .bg-beige-100 {
          background-color: #f5f5dc;
        }
        .bg-forest-green {
          background-color: #2f4f4f;
        }
        .bg-forest-green-dark {
          background-color: #1c3a3a;
        }
        .text-forest-green {
          color: #2f4f4f;
        }
        .border-beige-200 {
          border-color: #e8e4c9;
        }
        .bg-leaf-pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' opacity='0.1'%3E%3Cpath d='M100 20C60 20 20 60 20 100c0 40 40 80 80 80s80-40 80-80c0-40-40-80-80-80zm0 120c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z' fill='%232F4F4F'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default Sustainability;
