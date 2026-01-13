import { serviceAreas } from "@/lib/content";

export default function ServiceAreas() {
  const regions = Object.values(serviceAreas);

  return (
    <section id="zones" className="py-16 md:py-24 bg-[var(--color-bg-dark)] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-[var(--color-primary)] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-[var(--color-secondary)] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-2 border-[var(--color-accent)] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
          Nos Zones d&apos;Intervention
        </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Service rapide et professionnel dans tout Bruxelles et ses environs
          </p>
        </div>

        {/* Central Hub */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white font-bold text-sm md:text-base">BRUXELLES</span>
                </div>
              </div>
              
              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-30 animate-ping" />
            </div>
          </div>

          {/* Regions in circular arrangement */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[var(--color-bg-medium)] to-[var(--color-bg-dark)] rounded-2xl p-6 border border-[var(--color-bg-light)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 hover:-translate-y-1"
              >
                {/* Region badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>

                <div className="mb-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {region.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {region.communes.map((commune, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1.5 bg-[var(--color-bg-dark)] text-[var(--color-text-muted)] text-sm rounded-full border border-[var(--color-bg-light)] group-hover:border-[var(--color-primary)]/30 group-hover:text-[var(--color-text)] transition-all"
                    >
                      {commune}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Coverage Note */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[var(--color-primary)]/10 via-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 rounded-2xl p-6 md:p-8 border border-[var(--color-primary)]/30 text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
              Votre commune n&apos;est pas listée?
            </h3>
            <p className="text-[var(--color-text-muted)] mb-4">
              Nous intervenons également sur demande dans d&apos;autres communes en Belgique.
              Contactez-nous pour vérifier notre disponibilité dans votre zone.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              <span>Contactez-nous</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
