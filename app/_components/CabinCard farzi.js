"use client";
import { UsersIcon, WifiIcon, SunIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CabinCard({ cabin }) {
	const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

	// Define a few features to preview on the card
	const previewFeatures = [];
	if (maxCapacity <= 3) {
		previewFeatures.push(
			{ name: "WiFi", icon: WifiIcon },
			{ name: "Eco Toiletries", icon: SunIcon }
		);
	} else if (maxCapacity >= 4 && maxCapacity <= 7) {
		previewFeatures.push(
			{ name: "WiFi", icon: WifiIcon },
			{ name: "Minibar", icon: SunIcon }
		);
	} else {
		previewFeatures.push(
			{ name: "WiFi", icon: WifiIcon },
			{ name: "Hot Tub", icon: SunIcon }
		);
	}

	return (
		<div className='flex flex-col border border-beige-200 rounded-xl shadow-lg overflow-hidden bg-white bg-opacity-90 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
			<div className='relative w-full h-48'>
				<Image
					src={image}
					fill
					alt={`Cabin ${name}`}
					className='object-cover'
					quality={90}
				/>
			</div>

			<div className='p-6'>
				<h3 className='text-2xl font-semibold text-forest-green mb-3 font-cormorant'>
					Cabin {name}
				</h3>

				<div className='flex gap-3 items-center mb-3'>
					<UsersIcon className='h-5 w-5 text-forest-green' />
					<p className='text-lg text-gray-700 font-raleway'>
						For up to <span className='font-bold'>{maxCapacity}</span> guests
					</p>
				</div>

				<div className='flex gap-3 mb-4'>
					{previewFeatures.map((feature, index) => (
						<div key={index} className='flex gap-2 items-center'>
							<feature.icon className='h-5 w-5 text-forest-green' />
							<span className='text-sm text-gray-600 font-raleway'>
								{feature.name}
							</span>
						</div>
					))}
				</div>

				<p className='flex gap-3 justify-end items-baseline mb-4'>
					{discount > 0 ? (
						<>
							<span className='text-2xl font-semibold text-forest-green'>
								₹{regularPrice - discount}
							</span>
							<span className='line-through text-gray-500'>
								₹{regularPrice}
							</span>
						</>
					) : (
						<span className='text-2xl font-semibold text-forest-green'>
							₹{regularPrice}
						</span>
					)}
					<span className='text-gray-600 font-raleway'>/ night</span>
				</p>

				<Link
					href={`/cabins/${id}`}
					className='block text-center bg-forest-green text-white py-3 rounded-full font-semibold hover:bg-forest-green-dark transition-colors font-raleway'
				>
					Details & Reservation &rarr;
				</Link>
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
				.bg-forest-green-dark {
					background-color: #1c3a3a;
				}
				.text-forest-green {
					color: #2f4f4f;
				}
				.border-beige-200 {
					border-color: #e8e4c9;
				}
			`}</style>
		</div>
	);
}

export default CabinCard;
