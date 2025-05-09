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
		<div className='grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24'>
			<div className='relative scale-[1.15] -translate-x-3'>
				<Image
					src={image}
					fill
					className='object-cover'
					alt={`Cabin ${name}`}
				/>
			</div>

			<div>
				<h3 className='text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]'>
					Cabin {name}
				</h3>

				<p className='text-lg text-primary-300 mb-10'>
					<TextExpander>{description}</TextExpander>
				</p>

				<ul className='flex flex-col gap-4 mb-7'>
					<li className='flex gap-3 items-center'>
						<UsersIcon className='h-5 w-5 text-primary-600' />
						<span className='text-lg'>
							For up to <span className='font-bold'>{maxCapacity}</span> guests
						</span>
					</li>
					<li className='flex gap-3 items-center'>
						<MapPinIcon className='h-5 w-5 text-primary-600' />
						<span className='text-lg'>
							Located in the heart of{" "}
							<span className='font-bold'>Indian valleys</span>
						</span>
					</li>
					<li className='flex gap-3 items-center'>
						<EyeSlashIcon className='h-5 w-5 text-primary-600' />
						<span className='text-lg'>
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
							<span className='text-lg text-primary-200 font-raleway'>
								{feature.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
