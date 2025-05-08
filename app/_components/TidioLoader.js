"use client";

import { useEffect } from "react";

const TidioLoader = () => {
	useEffect(() => {
		// Load the Tidio script
		const script = document.createElement("script");
		script.src = "//code.tidio.co/jo0czodr7vp3gyivxuvzc6utzsqaecbx.js";
		script.async = true;
		document.body.appendChild(script);

		// Try repositioning after it loads
		const reposition = () => {
			const iframe = document.querySelector("iframe[title='chat widget']");
			if (iframe) {
				iframe.style.position = "fixed";
				iframe.style.bottom = "20px";
				iframe.style.left = "20px";
				iframe.style.right = "auto";
				iframe.style.zIndex = "9999";
			}
		};

		const interval = setInterval(() => {
			const iframe = document.querySelector("iframe[title='chat widget']");
			if (iframe) {
				reposition();
				clearInterval(interval);
			}
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return null;
};

export default TidioLoader;
