"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cabinImage1 from "@/public/cabin1.jpg";
import cabinImage2 from "@/public/cabin2.jpg";
import cabinImage3 from "@/public/cabin3.jpg";
import { motion } from "framer-motion";

// export const metadata = {
// 	title: "Facilities",
// };

const facilities = [
	{
		title: "Complimentary High-Speed Wi-Fi",
		description:
			"Stay connected with free, high-speed Wi-Fi available throughout the property, perfect for remote work or sharing your retreat moments.",
	},
	{
		title: "Purified RO Water",
		description:
			"Enjoy safe and refreshing drinking water with our complimentary RO water dispensers in every cabin and common area.",
	},
	{
		title: "Gourmet Breakfast Buffet",
		description:
			"Start your day with a complimentary breakfast featuring organic, locally sourced ingredients and a variety of dietary options.",
	},
	{
		title: "Eco-Friendly Toiletries",
		description:
			"Pamper yourself with our complimentary, biodegradable bath products made from natural ingredients, gentle on you and the environment.",
	},
	{
		title: "Guided Nature Walks",
		description:
			"Explore the surrounding forests with free daily guided walks led by our expert naturalists, perfect for all fitness levels.",
	},
	{
		title: "Outdoor Yoga Sessions",
		description:
			"Rejuvenate with complimentary morning yoga classes held in our serene outdoor pavilion, suitable for beginners and experts.",
	},
	{
		title: "Bicycle Rentals",
		description:
			"Discover the retreat grounds at your own pace with free bicycle rentals, including helmets and trail maps.",
	},
	{
		title: "Evening Bonfire & Stargazing",
		description:
			"Unwind with complimentary evening bonfires, complete with marshmallow roasting and guided stargazing under the clear night sky.",
	},
	{
		title: "Access to Wild Swim Pond",
		description:
			"Cool off in our natural, chemical-free swim pond, available to all guests at no extra cost, surrounded by lush greenery.",
	},
	{
		title: "In-Room Coffee & Tea Station",
		description:
			"Enjoy complimentary gourmet coffee and herbal tea selections in your cabin, restocked daily for your convenience.",
	},
	{
		title: "Daily Housekeeping",
		description:
			"Relax in a pristine environment with free daily housekeeping, including fresh towels and linens as needed.",
	},
	{
		title: "Electric Vehicle Charging Stations",
		description:
			"Charge your electric vehicle for free at our on-site EV stations, supporting eco-friendly travel.",
	},
];

export default async function Page() {
	useEffect(() => {
		// Ensure Framer Motion is loaded
		import("framer-motion");
	}, []);

	return (
		<div className='bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-5xl font-bold text-center text-gray-800 mb-8'
				>
					Facilities at Nature's Corner Retreat
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='text-lg text-center text-gray-600 mb-12'
				>
					Discover the exceptional amenities we offer to make your stay
					unforgettable, all included with your booking.
				</motion.p>

				{/* Image Carousel */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className='mb-12'
				>
					<Carousel
						showThumbs={false}
						autoPlay
						infiniteLoop
						interval={5000}
						showStatus={false}
						className='rounded-lg shadow-lg'
					>
						<div>
							<Image
								src={cabinImage1}
								alt='Luxury Cabin'
								width={960}
								height={480}
								className='object-cover rounded-lg'
								placeholder='blur'
							/>
							<p className='legend'>Serene Luxury Cabins</p>
						</div>
						<div>
							<Image
								src={cabinImage2}
								alt='Nature Trails'
								width={960}
								height={480}
								className='object-cover rounded-lg'
								placeholder='blur'
							/>
							<p className='legend'>Explore Nature Trails</p>
						</div>
						<div>
							<Image
								src={cabinImage3}
								alt='Wild Swim Pond'
								width={960}
								height={480}
								className='object-cover rounded-lg'
								placeholder='blur'
							/>
							<p className='legend'>Relax by the Swim Pond</p>
						</div>
					</Carousel>
				</motion.div>

				{/* Facilities List */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{facilities.map((facility, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'
						>
							<h3 className='text-xl font-semibold text-accent-600 mb-2'>
								{facility.title}
							</h3>
							<p className='text-gray-600'>{facility.description}</p>
						</motion.div>
					))}
				</div>

				{/* Additional Offerings */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className='mt-12 text-center'
				>
					<h2 className='text-3xl font-bold text-gray-800 mb-4'>
						What We Offer
					</h2>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
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
