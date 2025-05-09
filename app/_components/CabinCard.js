import { UsersIcon, WifiIcon, SunIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CabinCard({ cabin }) {
	const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
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
		<div className='flex border-primary-800 border'>
			<div className='flex-1 relative'>
				<Image
					src={image}
					fill
					alt={`Cabin ${name}`}
					className='object-cover flex-1 border-r border-primary-800'
				/>
			</div>

			<div className='flex-grow'>
				<div className='pt-5 pb-4 px-7 bg-primary-950'>
					<h3 className='text-accent-500 font-semibold text-2xl mb-3'>
						Cabin {name}
					</h3>

					<div className='flex gap-3 items-center mb-2'>
						<UsersIcon className='h-5 w-5 text-primary-600' />
						<p className='text-lg text-primary-200'>
							For up to <span className='font-bold'>{maxCapacity}</span> guests
						</p>
					</div>
					<div className='flex gap-3 mb-4'>
						{previewFeatures.map((feature, index) => (
							<div key={index} className='flex gap-2 items-center'>
								<feature.icon className='h-5 w-5 text-forest-green' />
								<span className='text-sm text-primary-200 font-raleway'>
									{feature.name}
								</span>
							</div>
						))}
					</div>
					<p className='flex gap-3 justify-end items-baseline'>
						{discount > 0 ? (
							<>
								<span className='text-3xl font-[350]'>
									₹{regularPrice - discount}
								</span>
								<span className='line-through font-semibold text-primary-600'>
									₹{regularPrice}
								</span>
							</>
						) : (
							<span className='text-3xl font-[350]'>₹{regularPrice}</span>
						)}
						<span className='text-primary-200'>/ night</span>
					</p>
				</div>

				<div className='bg-primary-950 border-t border-t-primary-800 text-right'>
					<Link
						href={`/cabins/${id}`}
						className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
					>
						Details & reservation &rarr;
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CabinCard;
