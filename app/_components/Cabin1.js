"use client";
import React from "react";
import TextExpander from "@/app/_components/TextExpander";
import {
	EyeSlashIcon,
	MapPinIcon,
	UsersIcon,
	WifiIcon,
	SunIcon,
	StarIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Cabin({ cabin }) {
	const { id, name, maxCapacity, regularPrice, discount, image, description } =
		cabin;

	// Define features based on maxCapacity
	const features = [];
	if (maxCapacity <= 3) {
		features.push(
			{ name: "High-Speed WiFi", icon: WifiIcon },
			{ name: "Eco-Friendly Toiletries", icon: SunIcon },
			{ name: "Bottled Water", icon: StarIcon }
		);
	} else if (maxCapacity >= 4 && maxCapacity <= 7) {
		features.push(
			{ name: "High-Speed WiFi", icon: WifiIcon },
			{ name: "Eco-Friendly Toiletries", icon: SunIcon },
			{ name: "Bottled Water", icon: StarIcon },
			{ name: "Minibar", icon: StarIcon },
			{ name: "Nature-Guided Tours", icon: MapPinIcon }
		);
	} else {
		features.push(
			{ name: "High-Speed WiFi", icon: WifiIcon },
			{ name: "Eco-Friendly Toiletries", icon: SunIcon },
			{ name: "Bottled Water", icon: StarIcon },
			{ name: "Minibar", icon: StarIcon },
			{ name: "Nature-Guided Tours", icon: MapPinIcon },
			{ name: "Private Hot Tub", icon: StarIcon },
			{ name: "Personal Chef Service", icon: StarIcon },
			{ name: "Complimentary Yoga Sessions", icon: SunIcon }
		);
	}

	return (
		<div className='relative bg-gradient-to-b from-forest-green to-beige-100 py-10 px-6'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-12 border border-beige-200 rounded-xl shadow-lg bg-white bg-opacity-90 p-8'>
					<div className='relative w-full h-96 rounded-lg overflow-hidden'>
						<Image
							src={image}
							fill
							className='object-cover'
							alt={`Cabin ${name}`}
							quality={90}
						/>
					</div>

					<div>
						<h3 className='text-5xl font-bold text-forest-green mb-6 font-cormorant'>
							Cabin {name}
						</h3>

						<p className='text-lg text-gray-700 mb-8 font-raleway'>
							<TextExpander>{description}</TextExpander>
						</p>

						<ul className='flex flex-col gap-4 mb-8'>
							<li className='flex gap-3 items-center'>
								<UsersIcon className='h-6 w-6 text-forest-green' />
								<span className='text-lg text-gray-700 font-raleway'>
									For up to <span className='font-bold'>{maxCapacity}</span>{" "}
									guests
								</span>
							</li>
							<li className='flex gap-3 items-center'>
								<MapPinIcon className='h-6 w-6 text-forest-green' />
								<span className='text-lg text-gray-700 font-raleway'>
									Located in the heart of{" "}
									<span className='font-bold'>Indian Valleys</span>
								</span>
							</li>
							<li className='flex gap-3 items-center'>
								<EyeSlashIcon className='h-6 w-6 text-forest-green' />
								<span className='text-lg text-gray-700 font-raleway'>
									Privacy <span className='font-bold'>100%</span> guaranteed
								</span>
							</li>
						</ul>

						<h4 className='text-2xl font-semibold text-forest-green mb-4 font-cormorant'>
							Features & Facilities
						</h4>
						<ul className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
							{features.map((feature, index) => (
								<li key={index} className='flex gap-3 items-center'>
									<feature.icon className='h-6 w-6 text-forest-green' />
									<span className='text-lg text-gray-700 font-raleway'>
										{feature.name}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* <div className='mt-12 bg-forest-green text-white rounded-xl p-6 text-center'>
					<h4 className='text-2xl font-semibold mb-4 font-cormorant'>
						Contact Us
					</h4>
					<p className='text-lg font-raleway mb-2'>
						For inquiries, reach out to Nakul Goyal, our retreat manager.
					</p>
					<p className='text-lg font-raleway mb-2'>
						Email:{" "}
						<a
							href='mailto:nakul.goyal@naturescorner.com'
							className='underline hover:text-beige-200'
						>
							nakul.goyal@naturescorner.com
						</a>
					</p>
					<p className='text-lg font-raleway'>
						Phone:{" "}
						<a
							href='tel:+919876543210'
							className='underline hover:text-beige-200'
						>
							+91 98765 43210
						</a>
					</p>
				</div> */}
			</div>

			<style jsx global>{`
				@import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@400;700&family=Raleway:wght@300;400;600&display=swap");
				.font-cormorant {
					font-family: "Cormorant", serif;
				}
				.font-raleway {
					font-family: "Raleway", sans-serif;
				}
				.bg-forest-green {
					background-color: #2f4f4f;
				}
				.text-forest-green {
					color: #2f4f4f;
				}
				.bg-beige-100 {
					background-color: rgb(70, 70, 54);
				}
				.border-beige-200 {
					border-color: #e8e4c9;
				}
				.text-beige-200 {
					color: #e8e4c9;
				}
			`}</style>
		</div>
	);
}
