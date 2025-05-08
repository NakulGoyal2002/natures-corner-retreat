import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import FeaturedCabins from '@/components/FeaturedCabins';
import SpecialOffers from '@/components/SpecialOffers';
import FacilitiesHighlights from '@/components/FacilitiesHighlights';
import Testimonials from '@/components/Testimonials';
import WhyChoose from '@/components/WhyChoose';
import ExploreArea from '@/components/ExploreArea';
import Sustainability from '@/components/Sustainability';
import TrustSignals from '@/components/TrustSignals';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nature's Corner Retreat - Luxury Cabins in Nature</title>
        <meta name="description" content="Book your stay at Nature's Corner Retreat, where luxury cabins meet serene nature." />
      </Head>
      <HeroSection />
      <FeaturedCabins />
      <SpecialOffers />
      <FacilitiesHighlights />
      <Testimonials />
      <WhyChoose />
      <ExploreArea />
      <Sustainability />
      <TrustSignals />
      <Footer />
    </>
  );
}