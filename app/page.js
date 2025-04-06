import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
import Script from "next/script";

export default function Page() {
	return (
		<main className='mt-24'>
			<Image
				src={bg}
				fill
				placeholder='blur'
				className='object-cover object-top'
				quality={80}
				alt='Mountains and forests with two cabins'
			/>

			<div className='relative z-10 text-center'>
				<h1 className='text-8xl text-primary-50 mb-10 tracking-tight font-normal'>
					Where Peace Meets Paradise.
				</h1>
				<Link
					href='/cabins'
					className='bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all'
				>
					Explore luxury cabins
				</Link>
			</div>
			{/* <div>
				<script
					defer
					src='https://app.fastbots.ai/embed.js'
					data-bot-id='cm95gqga111tdrik5z1q7vq4u'
				></script>
				<iframe
					style={{ width: "400px", height: "600px" }}
					src='https://app.fastbots.ai/embed/cm95gqga111tdrik5z1q7vq4u'
				></iframe>
			</div> */}
			{/* <div className='flex justify-center items-center h-screen'>
				<iframe
					src='https://app.fastbots.ai/embed/cm95gqga111tdrik5z1q7vq4u'
					style={{
						width: "400px",
						height: "600px",
						border: "none",
					}}
					allow='clipboard-write'
				></iframe>
			</div> */}
			<div style={floatingChatStyle}>
				{/* <script
					src='//code.tidio.co/jo0czodr7vp3gyivxuvzc6utzsqaecbx.js'
					async
				></script> */}
				<script
					defer
					src='https://app.fastbots.ai/embed.js'
					data-bot-id='cm95gqga111tdrik5z1q7vq4u'
				></script>
				{/* <iframe
					src='https://app.fastbots.ai/embed/cm95gqga111tdrik5z1q7vq4u'
					style={{
						width: "350px",
						height: "500px",
						border: "none",
						borderRadius: "12px",
					}}
					allow='clipboard-write'
				/> */}
			</div>
		</main>
	);
}
const floatingChatStyle = {
	position: "fixed",
	bottom: "20px",
	right: "20px",
	zIndex: 1000,
};
