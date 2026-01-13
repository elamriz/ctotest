"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], offset: i });
    }
    return visible;
  };

  return (
    <section id="temoignages" className="py-16 md:py-24 bg-[var(--color-bg-dark)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Des centaines de clients satisfaits nous font confiance pour leurs projets électriques
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block max-w-6xl mx-auto relative">
          <div className="relative h-[400px] flex items-center justify-center">
            {getVisibleTestimonials().map((testimonial, idx) => {
              const isCenter = testimonial.offset === 0;
              const isLeft = testimonial.offset === -1;
              const isRight = testimonial.offset === 1;

              return (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className={`absolute transition-all duration-500 ${
                    isCenter
                      ? "z-20 scale-100 opacity-100"
                      : "z-10 scale-75 opacity-40"
                  } ${
                    isLeft ? "-translate-x-[450px]" : isRight ? "translate-x-[450px]" : ""
                  }`}
                  style={{ width: "500px" }}
                >
                  <div className={`relative rounded-2xl p-8 border-2 shadow-2xl ${
                    isCenter
                      ? "bg-gradient-to-br from-[var(--color-bg-medium)] to-[var(--color-bg-dark)] border-[var(--color-primary)]"
                      : "bg-[var(--color-bg-medium)] border-[var(--color-bg-light)]"
                  }`}>
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-8">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isCenter ? "bg-[var(--color-primary)]" : "bg-[var(--color-bg-light)]"
                      }`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${isCenter ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p className={`text-lg mb-6 leading-relaxed ${isCenter ? "text-[var(--color-text)]" : "text-[var(--color-text-muted)]"}`}>
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-6 border-t border-[var(--color-bg-light)]">
                      <div>
                        <h4 className={`font-bold ${isCenter ? "text-[var(--color-text)]" : "text-[var(--color-text-muted)]"}`}>
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[var(--color-text-muted)]">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        isCenter
                          ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                          : "bg-[var(--color-bg-light)] text-[var(--color-text-muted)]"
                      }`}>
                        {testimonial.workType}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-[var(--color-bg-medium)] hover:bg-[var(--color-primary)] rounded-full flex items-center justify-center transition-all border border-[var(--color-bg-light)] hover:border-[var(--color-primary)]"
              aria-label="Précédent"
            >
              <svg className="w-6 h-6 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[var(--color-primary)] w-8"
                      : "bg-[var(--color-bg-light)] hover:bg-[var(--color-text-muted)]"
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-[var(--color-bg-medium)] hover:bg-[var(--color-primary)] rounded-full flex items-center justify-center transition-all border border-[var(--color-bg-light)] hover:border-[var(--color-primary)]"
              aria-label="Suivant"
            >
              <svg className="w-6 h-6 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-gradient-to-br from-[var(--color-bg-medium)] to-[var(--color-bg-dark)] rounded-2xl p-6 border-2 border-[var(--color-primary)] shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-base mb-6 leading-relaxed text-[var(--color-text)]">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-[var(--color-bg-light)]">
                <h4 className="font-bold text-[var(--color-text)] mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-[var(--color-text-muted)] mb-2">
                  {testimonials[currentIndex].location}
                </p>
                <div className="inline-block px-3 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full text-xs font-semibold">
                  {testimonials[currentIndex].workType}
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 bg-[var(--color-bg-medium)] hover:bg-[var(--color-primary)] rounded-full flex items-center justify-center transition-all border border-[var(--color-bg-light)]"
                aria-label="Précédent"
              >
                <svg className="w-5 h-5 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[var(--color-primary)] w-6"
                        : "bg-[var(--color-bg-light)]"
                    }`}
                    aria-label={`Témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 bg-[var(--color-bg-medium)] hover:bg-[var(--color-primary)] rounded-full flex items-center justify-center transition-all border border-[var(--color-bg-light)]"
                aria-label="Suivant"
              >
                <svg className="w-5 h-5 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
