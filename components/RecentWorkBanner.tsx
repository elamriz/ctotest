"use client";

import { useState, useEffect, useRef } from "react";

const recentWorks = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    after: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    title: "Rénovation tableau électrique",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    after: "https://images.unsplash.com/photo-1621905252472-74a8c4ed3f18?w=800&q=80",
    title: "Installation éclairage LED",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    after: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    title: "Mise aux normes complète",
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80",
    after: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    title: "Installation commercial",
  },
];

export default function RecentWorkBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section className="py-12 md:py-16 bg-[var(--color-bg-medium)] overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] text-center">
          Aperçu de nos derniers travaux
        </h2>
        <p className="text-[var(--color-text-muted)] text-center mt-2">
          Avant / Après - Découvrez la qualité de nos réalisations
        </p>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Duplicate items for seamless loop */}
        {[...recentWorks, ...recentWorks].map((work, index) => (
          <div
            key={`${work.id}-${index}`}
            className="flex-shrink-0 w-[280px] md:w-[400px] bg-[var(--color-bg-dark)] rounded-xl overflow-hidden border border-[var(--color-bg-light)] shadow-xl"
          >
            <div className="grid grid-cols-2 gap-0.5">
              <div className="relative group">
                <img
                  src={work.before}
                  alt="Avant"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">AVANT</span>
                </div>
              </div>
              <div className="relative group">
                <img
                  src={work.after}
                  alt="Après"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/60 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">APRÈS</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-[var(--color-text)] font-semibold">{work.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollLeft -= 300;
            }
          }}
          className="p-3 bg-[var(--color-bg-dark)] hover:bg-[var(--color-bg-light)] rounded-full transition-colors border border-[var(--color-bg-light)]"
          aria-label="Précédent"
        >
          <svg className="w-5 h-5 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollLeft += 300;
            }
          }}
          className="p-3 bg-[var(--color-bg-dark)] hover:bg-[var(--color-bg-light)] rounded-full transition-colors border border-[var(--color-bg-light)]"
          aria-label="Suivant"
        >
          <svg className="w-5 h-5 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
