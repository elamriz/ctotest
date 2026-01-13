"use client";

import { useState } from "react";
import { homeTypes, workTypes } from "@/lib/content";
import { businessConfig } from "@/lib/config";
import { generateWhatsAppMessage, getWhatsAppLink, getPhoneLink, getEmailLink } from "@/lib/utils";

export default function Hero() {
  const [homeType, setHomeType] = useState("");
  const [workType, setWorkType] = useState("");
  const [customWorkType, setCustomWorkType] = useState("");

  const handleGetQuote = () => {
    if (!homeType || !workType) {
      alert("Veuillez sélectionner le type de bien et le type de travaux");
      return;
    }

    const message = generateWhatsAppMessage(
      homeType,
      workType,
      workType === "autre" ? customWorkType : undefined
    );
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/90 via-[var(--color-bg-dark)]/85 to-[var(--color-bg-dark)] z-10" />
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80"
          alt="Électricien au travail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Response Time Badge */}
          <div className="inline-flex items-center space-x-2 bg-[var(--color-bg-medium)]/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[var(--color-primary)]/30">
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
            <span className="text-sm text-[var(--color-text-muted)]">{businessConfig.responseTime}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-6 leading-tight">
            Votre Électricien de Confiance
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
              à Bruxelles
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
            Installation, rénovation, dépannage - Service professionnel disponible 24/7.
            Conformité garantie aux normes RGIE.
          </p>

          {/* Quick Quote Tool */}
          <div className="bg-[var(--color-bg-medium)]/90 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-[var(--color-bg-light)] shadow-2xl">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">
              Obtenez votre devis en 2 étapes
            </h2>

            <div className="space-y-4 mb-6">
              {/* Step 1: Home Type */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2 text-left">
                  1. Type de bien
                </label>
                <select
                  value={homeType}
                  onChange={(e) => setHomeType(e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--color-bg-dark)] border border-[var(--color-bg-light)] rounded-lg text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                >
                  <option value="">Sélectionnez le type de bien</option>
                  {homeTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Work Type */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2 text-left">
                  2. Type de travaux
                </label>
                <select
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--color-bg-dark)] border border-[var(--color-bg-light)] rounded-lg text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                >
                  <option value="">Sélectionnez le type de travaux</option>
                  {workTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom Work Type Input */}
              {workType === "autre" && (
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2 text-left">
                    Précisez vos besoins
                  </label>
                  <input
                    type="text"
                    value={customWorkType}
                    onChange={(e) => setCustomWorkType(e.target.value)}
                    placeholder="Décrivez vos travaux..."
                    className="w-full px-4 py-3 bg-[var(--color-bg-dark)] border border-[var(--color-bg-light)] rounded-lg text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                  />
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-3 gap-3">
              <button
                onClick={handleGetQuote}
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </button>

              <a
                href={getPhoneLink()}
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Appeler</span>
              </a>

              <a
                href={getEmailLink("Demande de devis")}
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-[var(--color-bg-light)] hover:bg-[var(--color-bg-light)]/80 text-[var(--color-text)] font-semibold rounded-lg transition-all transform hover:scale-105 border border-[var(--color-primary)]/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1">24/7</div>
              <div className="text-sm text-[var(--color-text-muted)]">Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1">15+</div>
              <div className="text-sm text-[var(--color-text-muted)]">Ans d&apos;expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1">1000+</div>
              <div className="text-sm text-[var(--color-text-muted)]">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1">100%</div>
              <div className="text-sm text-[var(--color-text-muted)]">Aux normes RGIE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
