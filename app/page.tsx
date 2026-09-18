'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GridMotion from './GridMotion';

export default function Home() {
  const bgImageUrl =
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  // 28 items using the specified background image
  const gridItems = Array.from({ length: 28 }, () => bgImageUrl);

  return (
    <main className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#040407] text-white flex flex-col justify-between selection:bg-[#ff4d29] selection:text-white">
      {/* Dynamic Interactive Grid Motion Background */}
      <GridMotion items={gridItems} gradientColor="#07080f" />

      {/* Atmospheric Vignettes & Overlays for readability and contrast */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#040407] via-[#040407]/50 to-transparent z-10" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#040407]/90 via-[#040407]/40 to-transparent z-10" />
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-b from-[#040407]/80 to-transparent z-10" />

      {/* Top Navigation Bar Component */}
      <Navbar />

      {/* Bottom Left Hero Content Component */}
      <Hero />
    </main>
  );
}
