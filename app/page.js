import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
import Script from "next/script";
import HeroSection from "./_components/HeroSection.js";
import FeaturedCabins from "./_components/FeaturedCabins.js";
import FacilitiesHighlights from "./_components/FacilitiesHighlights.js";
import FoodHighlightSection from "./_components/FoodHighlightSection.js"
import SpecialOffers from "./_components/SpecialOffers.js";
import Testimonials from "./_components/Testimonials.js";
import WhyChoose from "./_components/WhyChoose.js";
import ExploreArea from "./_components/ExploreArea.js";
import Sustainability from "./_components/Sustainability.js";
import TrustSignals from "./_components/TrustSignals.js";
import TidioLoader from "./_components/TidioLoader.js";
import Chatbot from "./_components/Chatbot.js";

export default function Page() {
	return (
		<main className='mt-7'>
			 {/* <Image
				fill
				src={bg}
				placeholder='blur'
				className='object-cover object-top'
				quality={80}
				alt='Mountains and forests with two cabins'
			/>  */}
			<div className='relative z-10 text-center'>
				<h1 className='text-8xl text-primary-50 mb-24 tracking-tight font-normal'>
					Where Peace Meets Paradise.
				</h1>
				<Link
					href='/cabins'
					className='bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all'
				>
					Explore luxury cabins
				</Link>
			</div>

			{/* <div style={floatingChatStyle}>
				<script
					defer
					src='https://app.fastbots.ai/embed.js'
					data-bot-id='cm95gqga111tdrik5z1q7vq4u'
				></script>
				<script
					src='//code.tidio.co/jo0czodr7vp3gyivxuvzc6utzsqaecbx.js'
					async
				></script>
			</div> */}
			<Chatbot />
			<div style={floatingChatStyleTidio}>
				<script
					src='//code.tidio.co/jo0czodr7vp3gyivxuvzc6utzsqaecbx.js'
					async
				></script>
			</div>

			<div style={floatingChatStyleFastbots}>
				<script
					defer
					src='https://app.fastbots.ai/embed.js'
					data-bot-id='cm95gqga111tdrik5z1q7vq4u'
				></script>
			</div>
			{/* <TidioLoader /> */}

			<HeroSection />
			<FeaturedCabins />
			<SpecialOffers />
			<FacilitiesHighlights />
			<FoodHighlightSection/>
			<WhyChoose />
			<ExploreArea />
			<Sustainability />
			<Testimonials />
			<TrustSignals />
		</main>
	);
}
// const floatingChatStyleTidio = {
// 	position: "fixed",
// 	bottom: "540px", // moved up above Fastbots (adjust based on height of widget)
// 	right: "20px",
// 	zIndex: 1000,
// };
// const floatingChatStyleFastbots = {
// 	position: "fixed",
// 	bottom: "20px", // appears lower
// 	right: "20px",
// 	zIndex: 1000,
// };

const floatingChatStyleTidio = {
	position: "fixed",
	bottom: "20px",
	left: "20px", // Move Tidio to the left side
	zIndex: 1000,
};

const floatingChatStyleFastbots = {
	position: "fixed",
	bottom: "20px",
	right: "20px", // Keep Fastbots on the right
	zIndex: 1000,
};

// const floatingChatStyle = {
// 	position: "fixed",
// 	bottom: "20px",
// 	right: "20px",
// 	zIndex: 1000,
// };
