"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ModernNavigation = dynamic(() => import("@/components/ModernNavigation"), { ssr: false });
const ModernHero = dynamic(() => import("@/components/ModernHero"), { ssr: false });
const ModernServices = dynamic(() => import("@/components/ModernServices"), { ssr: true });
const ModernProcess = dynamic(() => import("@/components/ModernProcess"), { ssr: true });
const ModernPortfolio = dynamic(() => import("@/components/ModernPortfolio"), { ssr: false });
const ModernTestimonials = dynamic(() => import("@/components/ModernTestimonials"), { ssr: false });
const ModernFooter = dynamic(() => import("@/components/ModernFooter"), { ssr: true });

export default function ModernHomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black text-white overflow-x-hidden"
    >
      <ModernNavigation />
      <main className="relative">
        <ModernHero />
        <ModernServices />
        <ModernProcess />
        <ModernPortfolio />
        <ModernTestimonials />
      </main>
      <ModernFooter />
    </motion.div>
  );
}