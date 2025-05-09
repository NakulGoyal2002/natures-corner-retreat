"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PaperAirplaneIcon,
  XMarkIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

// Large dataset of questions and answers (expanded to 100+ entries)
const chatbotData = [
  // Booking and Availability (Existing)
  {
    keywords: [
      "book",
      "booking",
      "reserve",
      "reservation",
      "available",
      "availability",
    ],
    response: [
      "I can help you with booking a cabin! To start, please select your dates and the number of guests. You can do this on the Cabins page by clicking 'Explore Luxury Cabins'. Would you like to know more about the booking process or visit the Cabins page?",
      {
        quickReplies: [
          { text: "Booking Process", value: "booking process" },
          { text: "Check Availability", value: "check availability" },
          { text: "Visit Cabins Page", value: "navigate cabins" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["booking process"],
    response: [
      "Here’s how you can book a cabin at Nature’s Corner Retreat:\n1. Visit the 'Cabins' page and select your preferred cabin.\n2. Use the date selector to choose your stay dates.\n3. Enter the number of guests and any special requests.\n4. Log in to your account and confirm your reservation.\n5. You’ll receive a confirmation email with all the details.\nWould you like to know about pricing, cancellation policies, or visit the Cabins page?",
      {
        quickReplies: [
          { text: "Pricing", value: "pricing" },
          { text: "Cancellation Policies", value: "cancellation" },
          { text: "Visit Cabins Page", value: "navigate cabins" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["check availability"],
    response: [
      "To check availability, please visit the 'Cabins' page, select your preferred cabin, and use the date selector to see if your desired dates are available. If the dates are booked, they’ll be marked as unavailable. Would you like to visit the Cabins page now?",
      {
        quickReplies: [
          { text: "Visit Cabins Page", value: "navigate cabins" },
          { text: "Booking Process", value: "booking process" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Pricing and Discounts (Existing)
  {
    keywords: ["price", "pricing", "cost", "rate", "rates"],
    response: [
      "The pricing for our cabins varies based on size and season. Small cabins (up to 3 guests) start at ₹5,000 per night, medium cabins (4-7 guests) start at ₹8,000 per night, and large cabins (8+ guests) start at ₹12,000 per night. Discounts are often available for longer stays or special offers. Would you like to know about current special offers or visit the Cabins page for more details?",
      {
        quickReplies: [
          { text: "Special Offers", value: "special offers" },
          { text: "Visit Cabins Page", value: "navigate cabins" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["special offers", "discount", "deal"],
    response: [
      "We currently have the following special offers:\n- 10% off for stays longer than 5 nights.\n- A complimentary nature-guided tour for bookings made this month.\n- 15% off for returning guests (use code RETURN15 at checkout).\nWould you like to book now or learn more about our cabins?",
      {
        quickReplies: [
          { text: "Book Now", value: "book" },
          { text: "Cabin Features", value: "cabin features" },
          { text: "Visit Cabins Page", value: "navigate cabins" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Cabin Features and Amenities (Existing)
  {
    keywords: ["cabin features", "amenities", "facilities", "feature"],
    response: [
      "Our cabins are designed for luxury and sustainability. Small cabins (up to 3 guests) include high-speed WiFi, eco-friendly toiletries, and bottled water. Medium cabins (4-7 guests) add a minibar and nature-guided tours. Large cabins (8+ guests) offer a private hot tub, personal chef service, and complimentary yoga sessions. Would you like to know more about a specific cabin type or visit the Facilities page?",
      {
        quickReplies: [
          { text: "Small Cabins", value: "small cabins" },
          { text: "Medium Cabins", value: "medium cabins" },
          { text: "Large Cabins", value: "large cabins" },
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["small cabins"],
    response: [
      "Small cabins are perfect for couples or small groups (up to 3 guests). They include:\n- High-speed WiFi\n- Eco-friendly toiletries\n- Bottled water\nWould you like to book a small cabin or learn about other cabin types?",
      {
        quickReplies: [
          { text: "Book a Small Cabin", value: "book" },
          { text: "Other Cabin Types", value: "cabin features" },
          { text: "Visit Cabins Page", value: "navigate cabins" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["medium cabins"],
    response: [
      "Medium cabins are ideal for families or groups (4-7 guests). They include:\n- High-speed WiFi\n- Eco-friendly toiletries\n- Bottled water\n- Minibar\n- Nature-guided tours\nWould you like to book a medium cabin or learn about other cabin types?",
      {
        quickReplies: [
          { text: "Book a Medium Cabin", value: "book" },
          { text: "Other Cabin Types", value: "cabin features" },
          { text: "Visit Cabins Page", value: "navigate cabins" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["large cabins"],
    response: [
      "Large cabins are perfect for bigger groups (8+ guests). They include:\n- High-speed WiFi\n- Eco-friendly toiletries\n- Bottled water\n- Minibar\n- Nature-guided tours\n- Private hot tub\n- Personal chef service\n- Complimentary yoga sessions\nWould you like to book a large cabin or learn about other cabin types?",
      {
        quickReplies: [
          { text: "Book a Large Cabin", value: "book" },
          { text: "Other Cabin Types", value: "cabin features" },
          { text: "Visit Cabins Page", value: "navigate cabins" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Cancellation and Refund Policies (Existing)
  {
    keywords: ["cancel", "cancellation", "refund", "policy"],
    response: [
      "Our cancellation policy is as follows:\n- Free cancellation up to 7 days before your arrival.\n- 50% refund for cancellations between 3-7 days before arrival.\n- No refunds for cancellations within 3 days of arrival.\nTo cancel, visit your account’s reservations page and select the booking to cancel. Would you like help with cancelling a booking or need more support?",
      {
        quickReplies: [
          { text: "Help with Cancellation", value: "cancel booking" },
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["cancel booking"],
    response: [
      "To cancel a booking, please follow these steps:\n1. Log in to your account.\n2. Go to the 'Reservations' section.\n3. Find the booking you want to cancel and click 'Edit'.\n4. Select 'Cancel Reservation' and confirm.\nYou’ll receive a confirmation email with the refund details (if applicable). Need more assistance? You can visit our Support page.",
      {
        quickReplies: [
          { text: "Contact Support", value: "contact" },
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Sustainability Practices (Existing)
  {
    keywords: ["sustainability", "eco-friendly", "green", "environment"],
    response: [
      "At Nature’s Corner Retreat, we’re committed to sustainability. Our cabins are solar-powered, we use zero-waste toiletries, and our dining is farm-to-table with organic ingredients. We’ve also reduced our carbon footprint by 85%. Would you like to learn more about our eco-friendly practices or visit the Facilities page?",
      {
        quickReplies: [
          { text: "Learn More", value: "sustainability more" },
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["sustainability more"],
    response: [
      "Here are more details about our sustainability efforts:\n- We use rainwater harvesting for irrigation.\n- All our furniture is made from reclaimed wood.\n- We partner with local communities to support eco-tourism.\n- Guests can participate in tree-planting activities during their stay.\nWould you like to know about our local attractions or visit the Facilities page?",
      {
        quickReplies: [
          { text: "Local Attractions", value: "attractions" },
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Local Attractions and Activities (Existing)
  {
    keywords: ["attractions", "activities", "explore", "things to do"],
    response: [
      "There’s plenty to explore near Nature’s Corner Retreat! Here are some highlights:\n- **Emerald Lake**: Perfect for kayaking and picnics.\n- **Pine Ridge Trails**: Hiking trails with breathtaking views.\n- **Green Valley Market**: Local crafts and organic produce.\nWould you like more details about any of these or visit the Facilities page?",
      {
        quickReplies: [
          { text: "Emerald Lake", value: "emerald lake" },
          { text: "Pine Ridge Trails", value: "pine ridge trails" },
          { text: "Green Valley Market", value: "green valley market" },
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["emerald lake"],
    response: [
      "Emerald Lake is a serene spot just 10 minutes from the retreat. It’s ideal for kayaking, paddleboarding, or a relaxing picnic by the water. Kayak rentals are available for ₹500 per hour. Would you like to know about other activities?",
      {
        quickReplies: [
          { text: "Other Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["pine ridge trails"],
    response: [
      "Pine Ridge Trails offer stunning views of the Indian Valleys. There are trails for all levels, from a 2-hour easy hike to a full-day adventure. We provide complimentary guided tours for medium and large cabin guests. Would you like to know about other activities?",
      {
        quickReplies: [
          { text: "Other Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["green valley market"],
    response: [
      "Green Valley Market is a local gem, 15 minutes from the retreat. You’ll find organic produce, handmade crafts, and local delicacies. It’s open every Saturday from 9 AM to 3 PM. Would you like to know about other activities?",
      {
        quickReplies: [
          { text: "Other Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Contact Information (Existing)
  {
    keywords: ["contact", "support", "help", "reach", "email", "phone"],
    response: [
      "You can reach our support team anytime! Contact Nakul Goyal, our retreat manager:\n- Email: nakul.goyal@naturescorner.com\n- Phone: +91 98765 43210\nWe’re here to assist with any questions or concerns. Would you like to visit our Support page for more options?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Booking Help", value: "book" },
          { text: "Cancellation Help", value: "cancel" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // New Questions and Answers (100 Additional Entries)
  // Payment Methods
  {
    keywords: ["payment", "pay", "credit card", "online payment"],
    response: [
      "We accept various payment methods, including credit/debit cards (Visa, MasterCard, Amex), UPI, and bank transfers. Payment is processed securely during checkout on the Cabins page. Would you like to proceed with booking or learn more about pricing?",
      {
        quickReplies: [
          { text: "Proceed with Booking", value: "book" },
          { text: "Pricing Details", value: "pricing" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["group booking", "large group", "party booking"],
    response: [
      "We offer group bookings for parties of 8 or more! Large cabins are perfect for groups, with amenities like private hot tubs and personal chef services. For group discounts, contact our support team. Would you like to visit the Cabins page or contact support?",
      {
        quickReplies: [
          { text: "Visit Cabins Page", value: "navigate cabins" },
          { text: "Contact Support", value: "contact" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["deposit", "advance payment", "prepay"],
    response: [
      "A 20% deposit is required at the time of booking to secure your reservation. The remaining balance is due 7 days before your arrival. You can pay the deposit on the Cabins page during checkout. Need more help with booking?",
      {
        quickReplies: [
          { text: "Booking Help", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Cabin-Specific Queries
  {
    keywords: ["pets", "pet policy", "dogs", "cats"],
    response: [
      "We’re pet-friendly! Small and medium cabins allow pets for an additional fee of ₹500 per night. Please mention your pet in the 'Special Requests' section during booking. Would you like to book a pet-friendly cabin?",
      {
        quickReplies: [
          { text: "Book a Cabin", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["accessibility", "wheelchair", "disabled access"],
    response: [
      "We have accessible cabins with ramps, wider doorways, and grab bars in bathrooms. Please specify your accessibility needs in the 'Special Requests' section during booking. Would you like to visit the Cabins page to book?",
      {
        quickReplies: [
          { text: "Visit Cabins Page", value: "navigate cabins" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["children", "kids", "family friendly"],
    response: [
      "We’re family-friendly! Medium and large cabins are perfect for families, with amenities like cribs (available on request) and nature-guided tours for kids. Would you like to book a family cabin or learn more about facilities?",
      {
        quickReplies: [
          { text: "Book a Cabin", value: "book" },
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["smoking", "smoke", "cigarette"],
    response: [
      "All our cabins are non-smoking to maintain a fresh, eco-friendly environment. Designated smoking areas are available outside the cabins. Need more information about our policies?",
      {
        quickReplies: [
          { text: "Other Policies", value: "cancellation" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Facilities and Amenities
  {
    keywords: ["wifi", "internet", "connection"],
    response: [
      "Yes, we provide high-speed WiFi in all cabins, free of charge. The WiFi password will be provided at check-in. Would you like to learn more about other facilities?",
      {
        quickReplies: [
          { text: "Other Facilities", value: "cabin features" },
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["parking", "car park", "vehicle"],
    response: [
      "We offer free parking for all guests. Each cabin has a designated parking spot nearby. Electric vehicle charging stations are also available for ₹200 per charge. Would you like to know more about our facilities?",
      {
        quickReplies: [
          { text: "Other Facilities", value: "cabin features" },
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["spa", "massage", "wellness"],
    response: [
      "Our on-site spa offers a range of wellness treatments, including massages, facials, and yoga sessions. A 60-minute massage starts at ₹3,000. You can book a session at check-in. Would you like to visit the Facilities page for more details?",
      {
        quickReplies: [
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["pool", "swimming", "hot tub"],
    response: [
      "Large cabins come with a private hot tub. We also have a shared wild swim pond for all guests, perfect for a refreshing dip in nature. Would you like to book a large cabin or visit the Facilities page?",
      {
        quickReplies: [
          { text: "Book a Large Cabin", value: "book" },
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["gym", "fitness", "workout"],
    response: [
      "We have an outdoor fitness area with yoga mats, weights, and a running trail. Complimentary yoga sessions are available for large cabin guests. Would you like to visit the Facilities page for more details?",
      {
        quickReplies: [
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["restaurant", "dining", "food"],
    response: [
      "Our farm-to-table restaurant serves organic meals made with local ingredients. Breakfast is complimentary, while lunch and dinner start at ₹1,500 per person. We also offer in-cabin dining for large cabin guests. Would you like to visit the Facilities page?",
      {
        quickReplies: [
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Support-Related Queries
  {
    keywords: ["lost item", "lost and found", "missing"],
    response: [
      "If you’ve lost an item, please contact our support team. We’ll check our lost and found and get back to you within 24 hours. You can also visit our Support page to submit a request.",
      {
        quickReplies: [
          { text: "Contact Support", value: "contact" },
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["complaint", "issue", "problem"],
    response: [
      "I’m sorry to hear about your issue. Please contact our support team with details, and we’ll resolve it as soon as possible. You can also visit our Support page to submit a complaint.",
      {
        quickReplies: [
          { text: "Contact Support", value: "contact" },
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["feedback", "review", "suggestion"],
    response: [
      "We’d love to hear your feedback! You can share your thoughts on our Support page or email us directly at nakul.goyal@naturescorner.com. Would you like to visit the Support page now?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // General Inquiries
  {
    keywords: ["check-in", "check in", "arrival time"],
    response: [
      "Check-in time is from 3:00 PM onwards. If you need an early check-in, please let us know in advance, and we’ll do our best to accommodate. Would you like to know about check-out times?",
      {
        quickReplies: [
          { text: "Check-Out Time", value: "check-out" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["check-out", "check out", "departure time"],
    response: [
      "Check-out time is by 11:00 AM. Late check-out is available for an additional fee of ₹1,000 per hour, subject to availability. Would you like to know more about your stay?",
      {
        quickReplies: [
          { text: "Cabin Features", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["weather", "climate", "temperature"],
    response: [
      "The weather in the Indian Valleys varies by season. In May, expect temperatures between 15°C and 25°C with occasional rain. We recommend bringing layers and waterproof gear. Would you like to know about activities to do in this weather?",
      {
        quickReplies: [
          { text: "Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["location", "address", "where"],
    response: [
      "Nature’s Corner Retreat is located in the heart of the Indian Valleys, surrounded by mountains and forests. Our address is: 123 Green Valley Road, Indian Valleys, India. Would you like directions or to visit our Home page?",
      {
        quickReplies: [
          { text: "Directions", value: "directions" },
          { text: "Visit Home Page", value: "navigate home" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["directions", "how to reach", "travel"],
    response: [
      "To reach Nature’s Corner Retreat:\n- By car: We’re a 2-hour drive from the nearest city via NH-44.\n- By train: The nearest station is Green Valley Station, 30 minutes away. We offer a shuttle service for ₹500.\n- By air: The nearest airport is 100 km away; we can arrange a airport transfer for ₹2,000.\nWould you like to visit our Home page for more details?",
      {
        quickReplies: [
          { text: "Visit Home Page", value: "navigate home" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Additional Common Questions (Continuing to 100+)
  {
    keywords: ["breakfast", "morning meal", "food morning"],
    response: [
      "Breakfast is complimentary for all guests and served from 7:00 AM to 10:00 AM in our restaurant. Options include organic fruits, pastries, and made-to-order dishes. Would you like to know about other dining options?",
      {
        quickReplies: [
          { text: "Other Dining Options", value: "restaurant" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["laundry", "washing", "cleaning clothes"],
    response: [
      "We offer laundry services for ₹300 per load. You can request this service at check-in or through our staff. Would you like to know about other facilities?",
      {
        quickReplies: [
          { text: "Other Facilities", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["events", "wedding", "party"],
    response: [
      "We host events like weddings and parties! Our outdoor venue can accommodate up to 50 guests, with catering and decor options starting at ₹50,000. Contact our support team for more details. Would you like to visit the Support page?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["safety", "security", "safe"],
    response: [
      "Guest safety is our priority. We have 24/7 security, CCTV in common areas, and in-room safes. Emergency contacts are provided at check-in. Would you like to know more about your stay?",
      {
        quickReplies: [
          { text: "Cabin Features", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["language", "staff language", "english"],
    response: [
      "Our staff speaks English, Hindi, and several regional languages. If you need assistance in a specific language, let us know at check-in. Would you like to contact support for more help?",
      {
        quickReplies: [
          { text: "Contact Support", value: "contact" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["medical", "doctor", "emergency"],
    response: [
      "We have a first aid kit on-site and a doctor on call 24/7. The nearest hospital is 20 minutes away, and we can arrange transport in emergencies. Would you like to know more about safety?",
      {
        quickReplies: [
          { text: "Safety Information", value: "safety" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["late arrival", "after hours", "night arrival"],
    response: [
      "If you’re arriving after 10:00 PM, please inform us in advance. We’ll arrange for a late check-in and ensure a staff member is available to assist you. Would you like to know about check-in times?",
      {
        quickReplies: [
          { text: "Check-In Time", value: "check-in" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["early departure", "leave early"],
    response: [
      "If you need to depart early, please inform us at least 24 hours in advance. Refunds for early departures are subject to our cancellation policy. Would you like to know more about the policy?",
      {
        quickReplies: [
          { text: "Cancellation Policy", value: "cancellation" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["luggage", "baggage", "storage"],
    response: [
      "We offer free luggage storage before check-in and after check-out. Please inform our staff at the reception. Would you like to know about check-in times?",
      {
        quickReplies: [
          { text: "Check-In Time", value: "check-in" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["transport", "shuttle", "pickup"],
    response: [
      "We offer a shuttle service from Green Valley Station for ₹500 per trip. Airport transfers are available for ₹2,000. Please book in advance through our Support page. Would you like to visit the Support page?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["alcohol", "drinks", "bar"],
    response: [
      "Our restaurant has a bar with a selection of organic wines and cocktails starting at ₹500. Alcohol is also available in the minibar for medium and large cabins. Would you like to know more about dining?",
      {
        quickReplies: [
          { text: "Dining Options", value: "restaurant" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["vegetarian", "vegan", "diet"],
    response: [
      "We offer vegetarian, vegan, and gluten-free dining options. Please inform us of your dietary preferences during booking or at check-in. Would you like to know more about our restaurant?",
      {
        quickReplies: [
          { text: "Restaurant Details", value: "restaurant" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["allergies", "allergy", "food allergy"],
    response: [
      "Please inform us of any allergies in the 'Special Requests' section during booking. Our kitchen staff will ensure your meals are safe. Would you like to book now?",
      {
        quickReplies: [
          { text: "Book Now", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["internet speed", "wifi speed", "connection speed"],
    response: [
      "Our WiFi offers speeds up to 50 Mbps, perfect for streaming and video calls. If you experience any issues, please contact our staff. Would you like to know more about facilities?",
      {
        quickReplies: [
          { text: "Other Facilities", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["tv", "television", "entertainment"],
    response: [
      "Large cabins come with a smart TV with streaming services like Netflix. Small and medium cabins have board games and books for entertainment. Would you like to book a large cabin?",
      {
        quickReplies: [
          { text: "Book a Large Cabin", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["fireplace", "heating", "warm"],
    response: [
      "Medium and large cabins have eco-friendly electric fireplaces for cozy evenings. Small cabins have portable heaters available on request. Would you like to know more about cabin features?",
      {
        quickReplies: [
          { text: "Cabin Features", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["air conditioning", "ac", "cooling"],
    response: [
      "All cabins are equipped with eco-friendly air conditioning units. You can adjust the temperature via the in-room thermostat. Would you like to know more about cabin features?",
      {
        quickReplies: [
          { text: "Cabin Features", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["room service", "in-room dining"],
    response: [
      "Room service is available for large cabin guests from 8:00 AM to 10:00 PM. A menu will be provided at check-in, with meals starting at ₹1,000. Would you like to book a large cabin?",
      {
        quickReplies: [
          { text: "Book a Large Cabin", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["noise", "quiet", "sound"],
    response: [
      "Our cabins are designed for peace and quiet, surrounded by nature. We have a strict no-noise policy after 10:00 PM to ensure a restful stay. Would you like to know more about your stay?",
      {
        quickReplies: [
          { text: "Cabin Features", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["towels", "linens", "bedding"],
    response: [
      "Fresh towels and linens are provided daily. If you need extras, please inform our staff. We use organic cotton for all bedding. Would you like to know more about cabin features?",
      {
        quickReplies: [
          { text: "Cabin Features", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["housekeeping", "cleaning", "maid"],
    response: [
      "Daily housekeeping is included in your stay. If you prefer a specific cleaning schedule, please let us know at check-in. Would you like to know more about your stay?",
      {
        quickReplies: [
          { text: "Cabin Features", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["view", "scenery", "window"],
    response: [
      "All cabins offer stunning views of the Indian Valleys, with large windows overlooking forests and mountains. Large cabins also have private balconies. Would you like to book a cabin with a view?",
      {
        quickReplies: [
          { text: "Book a Cabin", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["bike rental", "bicycle", "cycling"],
    response: [
      "We offer bike rentals for ₹300 per day. Explore the nearby trails or cycle to Emerald Lake! Helmets and maps are provided. Would you like to know more about activities?",
      {
        quickReplies: [
          { text: "Other Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["fishing", "fish", "lake activity"],
    response: [
      "You can fish at Emerald Lake, just 10 minutes away. We provide fishing gear for ₹200 per day. Catch-and-release is encouraged to protect the ecosystem. Would you like to know more about activities?",
      {
        quickReplies: [
          { text: "Other Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["hiking", "trekking", "trails"],
    response: [
      "Pine Ridge Trails are perfect for hiking, with options for all levels. Guided tours are complimentary for medium and large cabin guests. Would you like to visit the Facilities page for more details?",
      {
        quickReplies: [
          { text: "Visit Facilities Page", value: "navigate facilities" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["yoga", "meditation", "wellness activity"],
    response: [
      "We offer complimentary yoga sessions for large cabin guests, held every morning at 7:00 AM in our outdoor fitness area. Private sessions are available for ₹1,500. Would you like to book a large cabin?",
      {
        quickReplies: [
          { text: "Book a Large Cabin", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["photography", "photo spots", "scenic"],
    response: [
      "The Indian Valleys are perfect for photography! Top spots include Emerald Lake at sunrise and Pine Ridge Trails for sunset views. We also offer photography tours for ₹2,000. Would you like to know more about activities?",
      {
        quickReplies: [
          { text: "Other Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["wildlife", "animals", "birds"],
    response: [
      "The Indian Valleys are home to diverse wildlife, including deer, foxes, and over 50 bird species. Join our guided nature tours to spot them safely. Would you like to know more about activities?",
      {
        quickReplies: [
          { text: "Other Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["stargazing", "stars", "night sky"],
    response: [
      "Our location offers incredible stargazing opportunities due to minimal light pollution. We provide telescopes for ₹500 per night. The best spot is near the wild swim pond. Would you like to know more about activities?",
      {
        quickReplies: [
          { text: "Other Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["campfire", "bonfire", "fire pit"],
    response: [
      "We host weekly campfires every Friday night at 8:00 PM, complete with marshmallow roasting and storytelling. Private fire pits are available for large cabins. Would you like to book a large cabin?",
      {
        quickReplies: [
          { text: "Book a Large Cabin", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["library", "books", "reading"],
    response: [
      "We have a small library with books on nature, mindfulness, and local history. It’s located near the restaurant and open 24/7 for guests. Would you like to know more about facilities?",
      {
        quickReplies: [
          { text: "Other Facilities", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["games", "board games", "recreation"],
    response: [
      "Small and medium cabins come with board games like chess and monopoly. Large cabins also have outdoor games like badminton. Would you like to know more about cabin features?",
      {
        quickReplies: [
          { text: "Cabin Features", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["souvenirs", "gift shop", "merchandise"],
    response: [
      "Our gift shop offers eco-friendly souvenirs like handmade candles, local honey, and Nature’s Corner Retreat merchandise. It’s open from 9:00 AM to 6:00 PM. Would you like to know more about the area?",
      {
        quickReplies: [
          { text: "Local Attractions", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["currency", "exchange", "money"],
    response: [
      "We accept payments in INR only. Currency exchange services are available at the nearest town, 30 minutes away. We recommend exchanging money before arrival. Would you like to know about payment methods?",
      {
        quickReplies: [
          { text: "Payment Methods", value: "payment" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["electricity", "power", "outlets"],
    response: [
      "All cabins have standard 220V power outlets. We provide universal adapters on request. Our cabins are solar-powered for sustainability. Would you like to know more about sustainability?",
      {
        quickReplies: [
          { text: "Sustainability Practices", value: "sustainability" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["water", "drinking water", "hydration"],
    response: [
      "We provide complimentary bottled water in all cabins. Filtered water dispensers are also available in common areas. Would you like to know more about cabin features?",
      {
        quickReplies: [
          { text: "Cabin Features", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["mosquitoes", "insects", "bugs"],
    response: [
      "Being in a natural area, mosquitoes can be present. We provide mosquito nets, repellents, and screens in all cabins. Would you like to know more about safety?",
      {
        quickReplies: [
          { text: "Safety Information", value: "safety" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["rain", "umbrella", "wet weather"],
    response: [
      "We provide umbrellas in all cabins for rainy days. Indoor activities like board games and spa treatments are available if the weather turns wet. Would you like to know about activities?",
      {
        quickReplies: [
          { text: "Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["snow", "winter", "cold weather"],
    response: [
      "In winter (December-February), temperatures can drop to 0°C. We provide extra blankets, heaters, and hot beverages. Snow activities like sledding are available nearby. Would you like to know about activities?",
      {
        quickReplies: [
          { text: "Activities", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["packing", "what to bring", "essentials"],
    response: [
      "We recommend packing layers, comfortable shoes for hiking, sunscreen, and a reusable water bottle. All toiletries are provided. Would you like to know about the weather?",
      {
        quickReplies: [
          { text: "Weather Information", value: "weather" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["dress code", "clothing", "attire"],
    response: [
      "There’s no formal dress code! Casual, comfortable clothing is best for outdoor activities. For dining, smart casual attire is recommended. Would you like to know about dining?",
      {
        quickReplies: [
          { text: "Dining Options", value: "restaurant" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["guided tour", "nature tour", "excursion"],
    response: [
      "We offer complimentary nature-guided tours for medium and large cabin guests. Tours include hiking, birdwatching, and stargazing, starting at 8:00 AM. Would you like to book a cabin?",
      {
        quickReplies: [
          { text: "Book a Cabin", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["local culture", "traditions", "community"],
    response: [
      "The Indian Valleys have a rich culture. You can visit local villages, attend cultural festivals, or join our community workshops. Would you like to know about local attractions?",
      {
        quickReplies: [
          { text: "Local Attractions", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["festival", "events nearby", "celebrations"],
    response: [
      "The Green Valley Festival happens every October, featuring local music, dance, and food stalls. It’s a 15-minute drive from the retreat. Would you like to know about other events?",
      {
        quickReplies: [
          { text: "Other Events", value: "events" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["shopping", "market", "buy local"],
    response: [
      "Green Valley Market, 15 minutes away, offers local crafts, organic produce, and more. It’s open every Saturday from 9:00 AM to 3 PM. Would you like to know about other attractions?",
      {
        quickReplies: [
          { text: "Other Attractions", value: "attractions" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["nearby town", "city", "explore nearby"],
    response: [
      "The nearest town, Green Valley Town, is 30 minutes away. It has shops, restaurants, and a museum about the region’s history. Would you like to know about transport options?",
      {
        quickReplies: [
          { text: "Transport Options", value: "transport" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["solo travel", "travel alone", "single guest"],
    response: [
      "Solo travelers love our small cabins! They’re cozy and come with all amenities for a relaxing stay. We also offer solo-friendly activities like yoga and nature walks. Would you like to book a small cabin?",
      {
        quickReplies: [
          { text: "Book a Small Cabin", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["honeymoon", "romantic", "couple"],
    response: [
      "We offer a special honeymoon package for couples, including a romantic dinner, a private hot tub in large cabins, and a complimentary massage. The package starts at ₹15,000 extra. Would you like to book a large cabin?",
      {
        quickReplies: [
          { text: "Book a Large Cabin", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["anniversary", "celebration", "special occasion"],
    response: [
      "Celebrate your anniversary with us! We offer a complimentary cake, a romantic dinner setup, and a guided stargazing tour for ₹5,000 extra. Would you like to book now?",
      {
        quickReplies: [
          { text: "Book Now", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["birthday", "party celebration"],
    response: [
      "We can arrange a birthday celebration with a cake, decorations, and a special dinner for ₹3,000 extra. Please inform us during booking. Would you like to book now?",
      {
        quickReplies: [
          { text: "Book Now", value: "book" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["corporate", "business", "meeting"],
    response: [
      "We offer corporate retreat packages, including meeting spaces, team-building activities, and catering for ₹10,000 per day for up to 20 people. Contact our support team for more details. Would you like to visit the Support page?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["internet access", "public wifi", "common area wifi"],
    response: [
      "WiFi is available in common areas like the restaurant and library, in addition to all cabins. It’s free and offers speeds up to 50 Mbps. Would you like to know more about facilities?",
      {
        quickReplies: [
          { text: "Other Facilities", value: "cabin features" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["pet care", "pet sitting", "dog care"],
    response: [
      "We offer pet-sitting services for ₹1,000 per day, including walks and feeding. Please book this service in advance through our Support page. Would you like to visit the Support page?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["childcare", "babysitting", "kids care"],
    response: [
      "We provide babysitting services for ₹800 per hour, available from 8:00 AM to 8:00 PM. Please book in advance through our Support page. Would you like to visit the Support page?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["disabled parking", "accessible parking"],
    response: [
      "We have designated accessible parking spots near each cabin for guests with disabilities. Please inform us during booking if you need one. Would you like to know more about accessibility?",
      {
        quickReplies: [
          { text: "Accessibility Details", value: "accessibility" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["gift card", "voucher", "coupon"],
    response: [
      "We offer gift cards starting at ₹5,000, which can be used for stays or spa treatments. You can purchase them on our Support page. Would you like to visit the Support page?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["loyalty program", "rewards", "membership"],
    response: [
      "Our loyalty program offers 5% off for every 3 stays, plus exclusive discounts for members. Sign up on our Support page. Would you like to visit the Support page?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["invoice", "bill", "receipt"],
    response: [
      "You’ll receive an invoice via email after your stay. If you need a printed copy, please request it at check-out. Need more help with billing?",
      {
        quickReplies: [
          { text: "Contact Support", value: "contact" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["taxes", "gst", "additional fees"],
    response: [
      "All prices include GST. Additional fees may apply for services like spa treatments, pet fees, or late check-out. Would you like to know more about pricing?",
      {
        quickReplies: [
          { text: "Pricing Details", value: "pricing" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["cabin upgrade", "upgrade", "better cabin"],
    response: [
      "Cabin upgrades are subject to availability. Upgrade from small to medium for ₹2,000 per night, or medium to large for ₹4,000 per night. Contact our support team to check availability. Would you like to visit the Support page?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["extend stay", "longer stay", "stay more"],
    response: [
      "You can extend your stay if the cabin is available. Please contact our support team at least 48 hours before your check-out date. Would you like to visit the Support page?",
      {
        quickReplies: [
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["early check-in", "check in early"],
    response: [
      "Early check-in is available for ₹1,500, subject to availability. Please inform us at least 24 hours in advance. Would you like to know about check-in times?",
      {
        quickReplies: [
          { text: "Check-In Time", value: "check-in" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["late check-out", "check out late"],
    response: [
      "Late check-out is available for ₹1,000 per hour, subject to availability. Please inform us at least 24 hours in advance. Would you like to know about check-out times?",
      {
        quickReplies: [
          { text: "Check-Out Time", value: "check-out" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Navigation Requests
  {
    keywords: ["navigate home", "home page", "main page"],
    response: [
      "I’ll redirect you to the Home page. Click the button below to visit the page.",
      {
        quickReplies: [
          { text: "Go to Home Page", value: "navigate home redirect" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["navigate cabins", "cabins page", "booking page"],
    response: [
      "I’ll redirect you to the Cabins page where you can book your stay. Click the button below to visit the page.",
      {
        quickReplies: [
          { text: "Go to Cabins Page", value: "navigate cabins redirect" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["navigate support", "support page", "help page"],
    response: [
      "I’ll redirect you to the Support page for more assistance. Click the button below to visit the page.",
      {
        quickReplies: [
          { text: "Go to Support Page", value: "navigate support redirect" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
  {
    keywords: ["navigate facilities", "facilities page", "amenities page"],
    response: [
      "I’ll redirect you to the Facilities page to explore our amenities. Click the button below to visit the page.",
      {
        quickReplies: [
          {
            text: "Go to Facilities Page",
            value: "navigate facilities redirect",
          },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },

  // Fallback for Unrecognized Queries (Existing)
  {
    keywords: [],
    response: [
      "I’m sorry, I didn’t quite understand that. Could you please rephrase your question? Or you can contact our support team for more assistance.",
      {
        quickReplies: [
          { text: "Contact Support", value: "contact" },
          { text: "Visit Support Page", value: "navigate support" },
          { text: "Main Menu", value: "main menu" },
        ],
      },
    ],
  },
];

// Main Chatbot Component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to the bottom of the chat when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "Welcome to Nature’s Corner Retreat! I’m here to help with your booking, answer questions about our cabins, or provide information about the area. What can I assist you with today?",
          quickReplies: [
            { text: "Book a Cabin", value: "book" },
            { text: "Cabin Features", value: "cabin features" },
            { text: "Local Attractions", value: "attractions" },
            { text: "Contact Support", value: "contact" },
            { text: "Visit Home Page", value: "navigate home" },
          ],
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  // Handle user message submission
  const handleSendMessage = (text = userInput) => {
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = getBotResponse(text.toLowerCase());
      setMessages((prev) => [
        ...prev,
        { ...botResponse, sender: "bot", timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  // Handle quick reply selection
  const handleQuickReply = (value) => {
    if (value.includes("navigate") && value.includes("redirect")) {
      let url;
      switch (value) {
        case "navigate home redirect":
          url = "/";
          break;
        case "navigate cabins redirect":
          url = "/cabins";
          break;
        case "navigate support redirect":
          url = "/support"; // Adjust this path based on your actual Support page route
          break;
        case "navigate facilities redirect":
          url = "/facilities"; // Adjust this path based on your actual Facilities page route
          break;
        default:
          url = "/";
      }
      window.location.href = url;
      return;
    }
    if (value === "main menu") {
      handleMainMenu();
    } else {
      handleSendMessage(value);
    }
  };

  // Get bot response based on user input
  const getBotResponse = (input) => {
    for (const data of chatbotData) {
      if (data.keywords.length === 0) continue; // Skip fallback initially
      if (data.keywords.some((keyword) => input.includes(keyword))) {
        return {
          text: data.response[0],
          quickReplies: data.response[1]?.quickReplies || [],
        };
      }
    }
    // Fallback response
    return {
      text: chatbotData[chatbotData.length - 1].response[0],
      quickReplies:
        chatbotData[chatbotData.length - 1].response[1]?.quickReplies || [],
    };
  };

  // Handle main menu
  const handleMainMenu = () => {
    setMessages([
      {
        sender: "bot",
        text: "Let’s start over. How can I assist you today?",
        quickReplies: [
          { text: "Book a Cabin", value: "book" },
          { text: "Cabin Features", value: "cabin features" },
          { text: "Local Attractions", value: "attractions" },
          { text: "Contact Support", value: "contact" },
          { text: "Visit Home Page", value: "navigate home" },
        ],
        timestamp: new Date(),
      },
    ]);
  };

  // Handle scroll to top of chat
  const handleScrollToTop = () => {
    const chatArea = messagesEndRef.current?.parentElement;
    if (chatArea) {
      chatArea.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button (Moved to Top-Right) */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 bg-forest-green text-white p-4 rounded-full shadow-lg hover:bg-forest-green-dark transition-all z-50"
          aria-label="Open Help & Support Chatbot"
        >
          <span className="font-raleway">Help & Support</span>
        </motion.button>
      )}

      {/* Chatbot Window (Moved to Top-Right) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed bottom-20 left-6 w-full max-w-md h-[500px] bg-gradient-to-b from-beige-light to-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl flex flex-col z-50 border border-beige-200"
          >
            {/* Header */}
            <div className="bg-forest-green text-white p-4 rounded-t-xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Nature's Corner Retreat Logo"
                  className="h-8 w-8"
                />
                <h3 className="text-xl font-cormorant">
                  Nature’s Corner Retreat
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Chatbot"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-beige-light bg-opacity-50 relative">
              <div className="absolute inset-0 bg-leaf-pattern bg-opacity-10" />
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mb-4 relative z-10"
                >
                  <div
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                        message.sender === "user"
                          ? "bg-forest-green text-white"
                          : "bg-white text-gray-800"
                      }`}
                    >
                      <p className="font-raleway">{message.text}</p>
                      <span className="text-xs text-gray-500 block mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                  {message.quickReplies && message.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 justify-start">
                      {message.quickReplies.map((reply, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleQuickReply(reply.value)}
                          className="bg-yellow-400 text-forest-green px-3 py-1 rounded-full text-sm font-raleway hover:bg-yellow-300 transition-all"
                          aria-label={reply.text}
                        >
                          {reply.text}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="h-4 w-4 bg-leaf-pattern rounded-full"
                    />
                    <span className="font-raleway text-gray-500">
                      Typing...
                    </span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-beige-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-2 rounded-lg bg-gray-100 text-gray-800 font-raleway focus:outline-none focus:ring-2 focus:ring-forest-green"
                  aria-label="Type your message"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="bg-forest-green text-white p-2 rounded-lg hover:bg-forest-green-dark transition-all"
                  aria-label="Send Message"
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleScrollToTop}
              className="fixed bottom-4 left-4 bg-forest-green text-white p-2 rounded-full shadow-lg hover:bg-forest-green-dark transition-all"
              aria-label="Scroll to Top of Chat"
            >
              <ArrowUpIcon className="h-5 w-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@400;700&family=Raleway:wght@300;400;600&display=swap");
        .font-cormorant {
          font-family: "Cormorant", serif;
        }
        .font-raleway {
          font-family: "Raleway", sans-serif;
        }
        .bg-beige-light {
          background-color: #faf0e6;
        }
        .bg-forest-green {
          background-color: #1a3c34;
        }
        .bg-forest-green-dark {
          background-color: #123528;
        }
        .text-forest-green {
          color: #1a3c34;
        }
        .border-beige-200 {
          border-color: #e8e4c9;
        }
        .bg-leaf-pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' opacity='0.1'%3E%3Cpath d='M100 20C60 20 20 60 20 100c0 40 40 80 80 80s80-40 80-80c0-40-40-80-80-80zm0 120c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z' fill='%231A3C34'/%3E%3C/svg%3E");
        }
      `}</style>
    </>
  );
};

export default Chatbot;
