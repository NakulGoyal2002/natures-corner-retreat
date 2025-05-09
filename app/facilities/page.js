"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import {
  FaWifi,
  FaWater,
  FaUtensils,
  FaLeaf,
  FaHiking,
  FaSun,
  FaBicycle,
  FaFire,
  FaSwimmer,
  FaCoffee,
  FaBroom,
  FaChargingStation,
} from "react-icons/fa";

const facilities = [
  {
    title: "Complimentary High-Speed Wi-Fi",
    description:
      "Stay connected with free, high-speed Wi-Fi available throughout the property, perfect for remote work or sharing your retreat moments.",
    icon: <FaWifi className="text-3xl text-green-600" />,
  },
  {
    title: "Purified RO Water",
    description:
      "Enjoy safe and refreshing drinking water with our complimentary RO water dispensers in every cabin and common area.",
    icon: <FaWater className="text-3xl text-blue-600" />,
  },
  {
    title: "Gourmet Breakfast Buffet",
    description:
      "Start your day with a complimentary breakfast featuring organic, locally sourced ingredients and a variety of dietary options.",
    icon: <FaUtensils className="text-3xl text-orange-600" />,
  },
  {
    title: "Eco-Friendly Toiletries",
    description:
      "Pamper yourself with our complimentary, biodegradable bath products made from natural ingredients, gentle on you and the environment.",
    icon: <FaLeaf className="text-3xl text-green-600" />,
  },
  {
    title: "Guided Nature Walks",
    description:
      "Explore the surrounding forests with free daily guided walks led by our expert naturalists, perfect for all fitness levels.",
    icon: <FaHiking className="text-3xl text-brown-600" />,
  },
  {
    title: "Outdoor Yoga Sessions",
    description:
      "Rejuvenate with complimentary morning yoga classes held in our serene outdoor pavilion, suitable for beginners and experts.",
    icon: <FaSun className="text-3xl text-yellow-600" />,
  },
  {
    title: "Bicycle Rentals",
    description:
      "Discover the retreat grounds at your own pace with free bicycle rentals, including helmets and trail maps.",
    icon: <FaBicycle className="text-3xl text-red-600" />,
  },
  {
    title: "Evening Bonfire & Stargazing",
    description:
      "Unwind with complimentary evening bonfires, complete with marshmallow roasting and guided stargazing under the clear night sky.",
    icon: <FaFire className="text-3xl text-orange-600" />,
  },
  {
    title: "Access to Wild Swim Pond",
    description:
      "Cool off in our natural, chemical-free swim pond, available to all guests at no extra cost, surrounded by lush greenery.",
    icon: <FaSwimmer className="text-3xl text-blue-600" />,
  },
  {
    title: "In-Room Coffee & Tea Station",
    description:
      "Enjoy complimentary gourmet coffee and herbal tea selections in your cabin, restocked daily for your convenience.",
    icon: <FaCoffee className="text-3xl text-brown-600" />,
  },
  {
    title: "Daily Housekeeping",
    description:
      "Relax in a pristine environment with free daily housekeeping, including fresh towels and linens as needed.",
    icon: <FaBroom className="text-3xl text-gray-600" />,
  },
  {
    title: "Electric Vehicle Charging Stations",
    description:
      "Charge your electric vehicle for free at our on-site EV stations, supporting eco-friendly travel.",
    icon: <FaChargingStation className="text-3xl text-green-600" />,
  },
];

// Animation variants for the carousel images
const carouselImageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1.1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      scale: { duration: 1, ease: "easeInOut" },
    },
  },
  exit: { opacity: 0, scale: 0.8, y: -50, transition: { duration: 0.5 } },
};

export default function Page() {
  useEffect(() => {
    import("framer-motion");
  }, []);

  return (
    <div className="bg-green-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold text-center text-gray-800 mb-8 drop-shadow-lg"
        >
          Facilities at Nature's Corner Retreat
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto font-medium"
        >
          Discover the exceptional amenities we offer to make your stay
          unforgettable, all included with your booking.
        </motion.p>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={5000}
            showStatus={false}
            className="rounded-xl shadow-2xl h-[50vh] overflow-hidden"
            renderItem={(item, options) => (
              <motion.div
                variants={carouselImageVariants}
                initial="hidden"
                animate={options?.isSelected ? "visible" : "hidden"}
                exit="exit"
                className="h-full"
              >
                {item}
              </motion.div>
            )}
          >
            <div className="h-full">
              <Image
                src="/cabin1.jpg"
                alt="Luxury Cabin"
                width={960}
                height={540} // Adjusted height for 50vh (assuming a 16:9 aspect ratio)
                className="object-cover w-full h-full rounded-xl"
              />
              <p className="legend bg-opacity-70 bg-gray-800 text-white">
                Serene Luxury Cabins
              </p>
            </div>
            <div className="h-full">
              <Image
                src="/cabin2.jpg"
                alt="Nature Trails"
                width={960}
                height={540} // Adjusted height for 50vh (assuming a 16:9 aspect ratio)
                className="object-cover w-full h-full rounded-xl"
              />
              <p className="legend bg-opacity-70 bg-gray-800 text-white">
                Explore Nature Trails
              </p>
            </div>
            <div className="h-full">
              <Image
                src="/cabin3.jpg"
                alt="Wild Swim Pond"
                width={960}
                height={540} // Adjusted height for 50vh (assuming a 16:9 aspect ratio)
                className="object-cover w-full h-full rounded-xl"
              />
              <p className="legend bg-opacity-70 bg-gray-800 text-white">
                Relax by the Swim Pond
              </p>
            </div>
          </Carousel>
        </motion.div>

        {/* Facilities List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                rotate: index % 2 === 0 ? 1 : -1,
                transition: { duration: 0.3 },
              }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-3">
                {facility.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-3">
                  {facility.title}
                </h3>
              </div>
              <p className="text-gray-600">{facility.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 text-center bg-white py-8 px-6 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 drop-shadow-md">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            At Nature's Corner Retreat, we provide a holistic experience with
            complimentary amenities designed to enhance your connection with
            nature and ensure ultimate comfort. From sustainable practices to
            wellness-focused activities, every detail is crafted to make your
            stay memorable. Enjoy free access to our wild swim pond, guided
            nature walks, yoga sessions, and more, all set against the backdrop
            of our pristine natural surroundings.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
