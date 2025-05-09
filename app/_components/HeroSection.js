"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import bg from "@/public/bg.png";

const HeroSection = () => {
	const [scrollY, setScrollY] = useState(0);

	// Parallax effect for background image
	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Background Image with Parallax */}
			<div
				className='absolute inset-0 z-0'
				style={{
					transform: `translateY(${scrollY * 0.1}px)`,
				}}
			>
				<Image
					src={bg}
					fill
					placeholder='blur'
					className='object-cover object-center'
					quality={90}
					alt="Nature's Corner Retreat - Serene Cabin Landscape"
					priority
				/>
				<div className='absolute inset-0 bg-black/40' />{" "}
				{/* Overlay for contrast */}
			</div>

			{/* Content */}
			<div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto'>
				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4'
				>
					Discover Tranquility at Nature's Corner Retreat
				</motion.h1>

				{/* Subheadline */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					className='text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8'
				>
					Escape to luxury cabins nestled in pristine nature, where peace meets
					paradise.
				</motion.p>

				{/* Search Form */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
					className='bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-2xl max-w-2xl mx-auto'
				>
					<form
						action='/cabins'
						className='grid grid-cols-1 sm:grid-cols-3 gap-4'
					>
						<div>
							<label
								htmlFor='location'
								className='block text-sm font-medium text-gray-700'
							>
								Location
							</label>
							<input
								type='text'
								id='location'
								value="Nature's Corner Retreat"
								disabled
								className='mt-1 w-full p-3 rounded-md border-gray-300 bg-gray-100 text-gray-700 cursor-not-allowed'
							/>
						</div>
						<div>
							<label
								htmlFor='checkin'
								className='block text-sm font-medium text-gray-700'
							>
								Check-In Date
							</label>
							<input
								type='date'
								id='checkin'
								name='checkin'
								required
								className='mt-1 w-full p-3 rounded-md border-gray-300 focus:ring-accent-500 focus:border-accent-500'
							/>
						</div>
						<div>
							<label
								htmlFor='guests'
								className='block text-sm font-medium text-gray-700'
							>
								Guests
							</label>
							<input
								type='number'
								id='guests'
								name='guests'
								min='1'
								placeholder='1'
								required
								className='mt-1 w-full p-3 rounded-md border-gray-300 focus:ring-accent-500 focus:border-accent-500'
							/>
						</div>
						<div className='sm:col-span-3 mt-4'>
							<button
								type='submit'
								className='w-full py-3 px-6 bg-accent-500 text-white rounded-md font-semibold hover:bg-accent-600 transition-colors shadow-md hover:shadow-lg'
							>
								Find Your Cabin
							</button>
						</div>
					</form>
				</motion.div>

				{/* CTA for Exploration */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
					className='mt-8'
				>
					{/* <Link
						href='/cabins'
						className='inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-accent-700 transition-colors'
					>
						Explore Our Cabins
					</Link> */}
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
