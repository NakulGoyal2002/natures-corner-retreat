"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import cabin1 from "@/public/cabin1.jpg";
import cabin2 from "@/public/cabin2.jpg";
import cabin3 from "@/public/cabin3.jpg";
import cabin4 from "@/public/cabin4.jpg";

const cabins = [
	{
		id: 3,
		name: "Cabin 001",
		tagline: "Cozy retreat with lake views",
		price: "₹2024/night",
		image: cabin1,
	},
	{
		id: 5,
		name: "Cabin 003",
		tagline: "Nestled in lush greenery",
		price: "₹5580/night",
		image: cabin2,
	},
	{
		id: 8,
		name: "Cabin 006",
		tagline: "Panoramic mountain vistas",
		price: "₹9450/night",
		image: cabin3,
	},
	{
		id: 10,
		name: "Cabin 008",
		tagline: "Tranquil riverfront escape",
		price: "₹17000/night",
		image: cabin4,
	},
];

const FeaturedCabins = () => {
	return (
		<section className='py-16 bg-gray-100'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-4xl font-bold text-center text-gray-800 mb-4 font-playfair'
				>
					Featured Cabins
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='text-lg text-center text-gray-600 mb-12 font-poppins'
				>
					Discover our handpicked selection of luxury cabins, designed for your
					perfect escape.
				</motion.p>

				{/* Cabins Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{cabins.map((cabin, index) => (
						<motion.div
							key={cabin.id}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className='relative group'
						>
							{/* Floating Image */}
							<motion.div
								whileHover={{
									y: -10,
									rotate: 2,
									boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
								}}
								transition={{ duration: 0.3 }}
								className='relative w-48 h-48 mx-auto'
							>
								<Image
									src={cabin.image}
									alt={cabin.name}
									fill
									className='object-cover rounded-lg'
									placeholder='blur'
									quality={80}
								/>
							</motion.div>

							{/* Cabin Details */}
							<div className='text-center mt-4'>
								<h3 className='text-xl font-semibold text-gray-800 font-playfair'>
									{cabin.name}
								</h3>
								<p className='text-sm text-gray-500 font-poppins'>
									{cabin.tagline}
								</p>
								<p className='text-lg font-medium text-accent-600 mt-2 font-poppins'>
									{cabin.price}
								</p>
								<Link
									href={`/cabins/${cabin.id}`}
									className='inline-block mt-4 text-accent-500 font-semibold hover:text-accent-600 font-poppins transition-colors'
								>
									View Details
								</Link>
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className='text-center mt-12'
				>
					<Link
						href='/cabins'
						className='inline-block bg-accent-500 text-white px-8 py-4 rounded-md font-semibold hover:bg-accent-600 transition-colors shadow-md hover:shadow-lg font-poppins'
					>
						Explore All Cabins
					</Link>
				</motion.div>
			</div>

			{/* Google Fonts */}
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

export default FeaturedCabins;
