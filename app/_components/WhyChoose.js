"use client";
import React from "react";
import { motion } from "framer-motion";

const reasons = [
	{
		title: "Eco-Friendly Practices",
		description: "Sustainable cabins and zero-waste amenities.",
		icon: "🌱",
	},
	{
		title: "Free Cancellation",
		description: "Flexible booking with no penalties.",
		icon: "✅",
	},
	{
		title: "Best Price Guarantee",
		description: "Lowest rates for your stay.",
		icon: "💰",
	},
	{
		title: "Nature-Centric Activities",
		description: "Yoga, walks, and stargazing included.",
		icon: "🌄",
	},
];

const WhyChoose = () => {
	return (
		<section className='py-16 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-4xl font-bold text-center text-gray-800 mb-4 font-playfair'
				>
					Why Choose Nature’s Corner
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='text-lg text-center text-gray-600 mb-12 font-poppins'
				>
					Experience the difference with our unique offerings and commitment to
					excellence.
				</motion.p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{reasons.map((reason, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className='bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center'
						>
							<motion.div
								whileHover={{ y: -5 }}
								transition={{ duration: 0.3 }}
								className='text-4xl mb-4'
							>
								{reason.icon}
							</motion.div>
							<h3 className='text-xl font-semibold text-gray-800 font-playfair'>
								{reason.title}
							</h3>
							<p className='text-sm text-gray-500 font-poppins mt-2'>
								{reason.description}
							</p>
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

export default WhyChoose;
