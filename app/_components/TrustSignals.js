"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import visa from "@/public/visa.png";
import mastercard from "@/public/mastercard.png";
import ssl from "@/public/ssl.png";
import booking from "@/public/booking.png";

const partners = [
  { name: "Visa", image: visa, description: "Secure payments with Visa" },
  {
    name: "Mastercard",
    image: mastercard,
    description: "Trusted by millions globally",
  },
  {
    name: "SSL Certified",
    image: ssl,
    description: "Encrypted and secure transactions",
  },
  {
    name: "Booking.com",
    image: booking,
    description: "Partnered for seamless bookings",
  },
];

const TrustSignals = () => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  // Counter animation for "Trusted by Millions"
  useEffect(() => {
    const targetCount = 5; // Representing 5 million
    const duration = 2000; // 2 seconds
    const increment = targetCount / (duration / 50);

    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev >= targetCount) {
          clearInterval(counter);
          return targetCount;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(counter);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      controls.start({ backgroundPositionY: scrollPosition * 0.5 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-500 to-indigo-600"
        animate={controls}
        initial={{ backgroundPositionY: 0 }}
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl font-extrabold text-center text-white mb-4 font-lora"
        >
          Trusted by{" "}
          <span className="text-yellow-300">{Math.round(count)} Million+</span>{" "}
          Travelers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg text-center text-gray-200 mb-12 font-roboto"
        >
          Experience luxury and security with our trusted partners.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative bg-white bg-opacity-90 rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="relative w-24 h-12 mb-4">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  placeholder="blur"
                  quality={90}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 font-roboto">
                {partner.name}
              </h3>
              <div className="absolute inset-0 flex items-center justify-center bg-teal-500 bg-opacity-90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center px-4 font-roboto">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Roboto:wght@300;400;600&display=swap");
        .font-lora {
          font-family: "Lora", serif;
        }
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
        section {
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .group:hover .bg-opacity-90 {
          background-opacity: 0.95;
        }
      `}</style>
    </section>
  );
};

export default TrustSignals;
