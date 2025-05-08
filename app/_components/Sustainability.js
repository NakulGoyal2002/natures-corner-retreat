"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sustainability from "@/public/sustainability.jpg";

const Sustainability = () => {
	return (
		<section className='py-16 bg-gradient-to-b from-white to-gray-100'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h2 className='text-4xl font-bold text-gray-800 mb-4 font-playfair'>
							Our Commitment to Sustainability
						</h2>
						<p className='text-lg text-gray-600 mb-6 font-poppins'>
							At Nature’s Corner Retreat, we prioritize the planet with
							eco-friendly practices, from solar-powered cabins to zero-waste
							toiletries. Join us in preserving the beauty of nature for future
							generations.
						</p>
						<a
							href='/sustainability'
							className='inline-block bg-accent-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-600 transition-colors font-poppins'
						>
							Learn More
						</a>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='relative w-full h-96'
					>
						<Image
							src={sustainability}
							alt='Sustainable practices at Nature’s Corner'
							fill
							className='object-cover rounded-lg'
							placeholder='blur'
							quality={80}
						/>
					</motion.div>
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

export default Sustainability;
