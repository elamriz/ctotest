import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[var(--color-bg-dark)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Des solutions électriques complètes pour tous vos besoins. 
            Professionnalisme, qualité et conformité garantis.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index % 2 === 0 ? "1621905251189" : "1621905252507"
                      }-08b45d6a269e?w=800&q=80`}
                      alt={service.title}
                      className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-transparent to-transparent opacity-60" />
                    
                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[var(--color-primary)]/30">
                      <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded-full mb-4">
                    <span className="text-sm font-semibold text-[var(--color-primary)]">
                      Service #{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-[var(--color-text-muted)] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[var(--color-text)] flex-1">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                  >
                    <span>Demander un devis</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
