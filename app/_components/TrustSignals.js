"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import visa from "@/public/visa.png";
import mastercard from "@/public/mastercard.png";
import ssl from "@/public/ssl.png";
import booking from "@/public/booking.png";

const partners = [
	{ name: "Visa", image: visa },
	{ name: "Mastercard", image: mastercard },
	{ name: "SSL Certified", image: ssl },
	{ name: "Booking.com", image: booking },
];

const TrustSignals = () => {
	return (
		<section className='py-16 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-4xl font-bold text-center text-gray-800 mb-4 font-playfair'
				>
					Trusted by Millions
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='text-lg text-center text-gray-600 mb-12 font-poppins'
				>
					Book with confidence through our secure platform and trusted partners.
				</motion.p>

				<div className='flex flex-wrap justify-center gap-8'>
					{partners.map((partner, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							whileHover={{ y: -5 }}
							className='relative w-32 h-16'
						>
							<Image
								src={partner.image}
								alt={partner.name}
								fill
								className='object-contain'
								placeholder='blur'
								quality={80}
							/>
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

export default TrustSignals;
