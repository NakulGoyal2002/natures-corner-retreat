import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent-400">About Nature's Corner Retreat</h3>
            <p className="text-gray-300 mb-4">
              Experience luxury and tranquility at Nature's Corner Retreat, where nature meets comfort.
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/booking-system" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Booking System
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Cabin Amenities
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Sustainability Initiatives
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent-400">Our Partners</h3>
            <p className="text-gray-300 mb-4">
              We collaborate with top-tier hotels and services to enhance your experience.
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.mountainviewretreat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  Mountain View Retreat
                </a>
              </li>
              <li>
                <a
                  href="https://www.foresthavenlodge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  Forest Haven Lodge
                </a>
              </li>
              <li>
                <a
                  href="https://www.lakesideresort.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  Lakeside Resort
                </a>
              </li>
              <li>
                <a
                  href="https://www.ecoluxurygetaways.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  Eco Luxury Getaways
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent-400">Support</h3>
            <p className="text-gray-300 mb-4">
              We're here to assist you with all your booking and stay-related queries.
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@naturescornerretreat.com"
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  Email: support@naturescornerretreat.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18001234567"
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  Phone: +1-800-123-4567
                </a>
              </li>
              <li>
                <Link href="/help" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Help & Support Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-accent-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Nature's Corner Retreat. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-accent-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-accent-500 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;