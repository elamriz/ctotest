"use client";

import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("@/components/Navigation"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const RecentWorkBanner = dynamic(() => import("@/components/RecentWorkBanner"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: true });
const ServiceAreas = dynamic(() => import("@/components/ServiceAreas"), { ssr: true });
const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <RecentWorkBanner />
        <Services />
        <HowItWorks />
        <ServiceAreas />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
