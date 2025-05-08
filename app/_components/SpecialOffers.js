"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import offer1 from "@/public/offer1.jpg";
import offer2 from "@/public/offer2.jpg";
import offer3 from "@/public/offer3.jpg";

const offers = [
	{
		id: 1,
		title: "Weekend Wellness Retreat",
		description:
			"Enjoy a 2-night stay with yoga, breakfast, and a nature walk.",
		price: "$499",
		image: offer1,
		expires: "May 15, 2025",
	},
	{
		id: 2,
		title: "Early Bird Special",
		description: "Book 30 days in advance and save 20% on your stay.",
		price: "From $200/night",
		image: offer2,
		expires: "June 1, 2025",
	},
	{
		id: 3,
		title: "Family Getaway Package",
		description: "3-night stay with free bike rentals and bonfire nights.",
		price: "$799",
		image: offer3,
		expires: "May 31, 2025",
	},
];

const SpecialOffers = () => {
	return (
		<section className='py-16 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-4xl font-bold text-center text-gray-800 mb-4 font-playfair'
				>
					Special Offers
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='text-lg text-center text-gray-600 mb-12 font-poppins'
				>
					Discover exclusive deals to make your stay unforgettable.
				</motion.p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{offers.map((offer, index) => (
						<motion.div
							key={offer.id}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className='relative group bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow'
						>
							<motion.div
								whileHover={{
									y: -10,
									boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
								}}
								transition={{ duration: 0.3 }}
								className='relative w-32 h-32 mx-auto mt-6'
							>
								<Image
									src={offer.image}
									alt={offer.title}
									fill
									className='object-cover rounded-md'
									placeholder='blur'
									quality={80}
								/>
							</motion.div>
							<div className='p-6 text-center'>
								<h3 className='text-xl font-semibold text-gray-800 font-playfair'>
									{offer.title}
								</h3>
								<p className='text-sm text-gray-500 font-poppins mt-2'>
									{offer.description}
								</p>
								<p className='text-lg font-medium text-accent-600 mt-2 font-poppins'>
									{offer.price}
								</p>
								<p className='text-xs text-red-500 font-poppins mt-2'>
									Expires: {offer.expires}
								</p>
								<Link
									href='/cabins'
									className='inline-block mt-4 bg-accent-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-accent-600 transition-colors font-poppins'
								>
									Book Now
								</Link>
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

export default SpecialOffers;
