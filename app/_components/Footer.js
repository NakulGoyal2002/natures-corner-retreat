"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className='bg-gray-700 text-white py-16 mt-24'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
					{/* About Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h3 className='text-2xl font-bold mb-4 text-yellow-300'>
							About Nature's Corner Retreat
						</h3>
						<p className='text-gray-200 mb-4'>
							Nestled in the Himalayan foothills, Nature's Corner Retreat offers
							a perfect blend of luxury and nature. Enjoy eco-friendly stays,
							wellness activities, and sustainable practices.
						</p>
						<ul className='space-y-3'>
							<li>
								<Link
									href='/about'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Our Story
								</Link>
							</li>
							<li>
								<Link
									href='/booking-system'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Booking System
								</Link>
							</li>
							<li>
								<Link
									href='/facilities'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Facilities
								</Link>
							</li>
							<li>
								<Link
									href='/sustainability'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Sustainability Initiatives
								</Link>
							</li>
						</ul>
					</motion.div>

					{/* Address & Contact Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h3 className='text-2xl font-bold mb-4 text-yellow-300'>
							Visit Us
						</h3>
						<p className='text-gray-200 mb-4'>
							Nature's Corner Retreat
							<br />
							Village Koti, Bageshwar Road
							<br />
							Almora, Uttarakhand 263601, India
						</p>
						<ul className='space-y-3'>
							<li>
								<a
									href='mailto:nakul.21239@knit.ac.in'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Email: nakul.21239@knit.ac.in
								</a>
							</li>
							<li>
								<a
									href='tel:+919298388243'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Phone: +91 92983 882
								</a>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Get Directions
								</Link>
							</li>
						</ul>
					</motion.div>

					{/* Quick Links Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<h3 className='text-2xl font-bold mb-4 text-yellow-300'>
							Quick Links
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='/'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/gallery'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Gallery
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='/testimonials'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Guest Reviews
								</Link>
							</li>
							<li>
								<Link
									href='/events'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Events & Retreats
								</Link>
							</li>
						</ul>
					</motion.div>

					{/* Social Media & Newsletter Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<h3 className='text-2xl font-bold mb-4 text-yellow-300'>
							Stay Connected
						</h3>
						<p className='text-gray-200 mb-4'>
							Follow us for updates, offers, and breathtaking views from the
							retreat.
						</p>
						<ul className='space-y-3 mb-6'>
							<li>
								<a
									href='https://www.instagram.com/naturescornerretreat'
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/naturescornerretreat'
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href='https://www.twitter.com/naturescorner'
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-200 hover:text-yellow-300 transition-colors'
								>
									Twitter
								</a>
							</li>
						</ul>
						<h4 className='text-lg font-semibold text-yellow-300 mb-2'>
							Newsletter
						</h4>
						<p className='text-gray-200'>
							<Link
								href='/newsletter'
								className='text-gray-200 hover:text-yellow-300 transition-colors'
							>
								Subscribe for exclusive offers and updates
							</Link>
						</p>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-12 pt-8 border-t border-green-600 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-gray-200 text-sm'>
						© {new Date().getFullYear()} Nature's Corner Retreat. All rights
						reserved.
					</p>
					<div className='flex space-x-4 mt-4 md:mt-0'>
						<Link
							href='/privacy'
							className='text-gray-200 hover:text-yellow-300 transition-colors text-sm'
						>
							Privacy Policy
						</Link>
						<Link
							href='/terms'
							className='text-gray-200 hover:text-yellow-300 transition-colors text-sm'
						>
							Terms of Service
						</Link>
						<Link
							href='/sitemap'
							className='text-gray-200 hover:text-yellow-300 transition-colors text-sm'
						>
							Sitemap
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
