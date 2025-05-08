"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import attraction1 from "@/public/attraction1.jpg";
import attraction2 from "@/public/attraction2.jpg";
import attraction3 from "@/public/attraction3.jpg";

const attractions = [
	{
		name: "Emerald Lake",
		description: "A serene lake perfect for kayaking and picnics.",
		image: attraction1,
	},
	{
		name: "Pine Ridge Trails",
		description: "Hiking trails with breathtaking views.",
		image: attraction2,
	},
	{
		name: "Green Valley Market",
		description: "Local crafts and organic produce.",
		image: attraction3,
	},
];

const ExploreArea = () => {
	return (
		<section className='py-16 bg-gray-100'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-4xl font-bold text-center text-gray-800 mb-4 font-playfair'
				>
					Explore the Area
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='text-lg text-center text-gray-600 mb-12 font-poppins'
				>
					Discover the natural beauty and local attractions near Nature’s Corner
					Retreat.
				</motion.p>

				<Carousel
					showThumbs={false}
					autoPlay
					infiniteLoop
					interval={5000}
					showStatus={false}
					className='max-w-4xl mx-auto'
				>
					{attractions.map((attraction, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6 }}
							className='relative'
						>
							<div className='relative w-64 h-64 mx-auto'>
								<Image
									src={attraction.image}
									alt={attraction.name}
									fill
									className='object-cover rounded-md'
									placeholder='blur'
									quality={80}
								/>
							</div>
							<div className='text-center mt-4'>
								<h3 className='text-xl font-semibold text-gray-800 font-playfair'>
									{attraction.name}
								</h3>
								<p className='text-sm text-gray-500 font-poppins'>
									{attraction.description}
								</p>
							</div>
						</motion.div>
					))}
				</Carousel>
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

export default ExploreArea;
