"use client";

import { useState } from "react";
import { portfolioItems } from "@/lib/content";

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentItem = portfolioItems[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  return (
    <section id="realisations" className="py-16 md:py-24 bg-[var(--color-bg-medium)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Découvrez la transformation avant/après de nos projets réalisés à Bruxelles
          </p>
        </div>

        {/* Main Before/After Slider */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative bg-[var(--color-bg-dark)] rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-[400px] md:h-[600px] overflow-hidden">
              {/* Before Image */}
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80"
                alt="Avant"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* After Image with clip */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"
                  alt="Après"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Slider Control */}
              <div
                className="absolute inset-y-0 z-20 cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  const handleMouseMove = (moveEvent: MouseEvent) => {
                    const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                    if (rect) {
                      const x = moveEvent.clientX - rect.left;
                      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
                      setSliderPosition(percentage);
                    }
                  };

                  const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                  };

                  document.addEventListener("mousemove", handleMouseMove);
                  document.addEventListener("mouseup", handleMouseUp);
                }}
                onTouchStart={(e) => {
                  const handleTouchMove = (moveEvent: TouchEvent) => {
                    const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                    if (rect) {
                      const x = moveEvent.touches[0].clientX - rect.left;
                      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
                      setSliderPosition(percentage);
                    }
                  };

                  const handleTouchEnd = () => {
                    document.removeEventListener("touchmove", handleTouchMove);
                    document.removeEventListener("touchend", handleTouchEnd);
                  };

                  document.addEventListener("touchmove", handleTouchMove);
                  document.addEventListener("touchend", handleTouchEnd);
                }}
              >
                <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg -translate-x-1/2" />
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-sm text-white font-semibold rounded-lg">
                AVANT
              </div>
              <div className="absolute top-4 right-4 px-4 py-2 bg-[var(--color-primary)]/90 backdrop-blur-sm text-white font-semibold rounded-lg">
                APRÈS
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all z-30"
              aria-label="Précédent"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all z-30"
              aria-label="Suivant"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Description */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-[var(--color-bg-dark)] to-[var(--color-bg-medium)]">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-2">
                {currentItem.title}
              </h3>
              <p className="text-[var(--color-text-muted)]">{currentItem.description}</p>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[var(--color-primary)] w-8"
                    : "bg-[var(--color-bg-light)] hover:bg-[var(--color-text-muted)]"
                }`}
                aria-label={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6 text-center">
            Galerie de nos travaux
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {portfolioItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`group relative aspect-square rounded-xl overflow-hidden border-2 transition-all hover:scale-105 ${
                  index === currentIndex
                    ? "border-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/30"
                    : "border-[var(--color-bg-light)] hover:border-[var(--color-primary)]/50"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-semibold">{item.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
