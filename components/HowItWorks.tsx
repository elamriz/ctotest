import { processSteps } from "@/lib/content";

const icons = {
  phone: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  search: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  document: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  tools: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-medium)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Comment ça fonctionne?
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Un processus simple et transparent pour tous vos projets électriques
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]" />

            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.id} className="relative">
                  {/* Circle with Icon */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[var(--color-bg-dark)] to-[var(--color-bg-medium)] rounded-full border-4 border-[var(--color-primary)] shadow-xl flex items-center justify-center relative group hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-full group-hover:bg-[var(--color-primary)]/20 transition-colors" />
                      <div className="w-20 h-20 text-[var(--color-primary)] relative z-10">
                        {icons[step.icon as keyof typeof icons]}
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-[var(--color-primary)] text-white font-bold rounded-full flex items-center justify-center text-lg shadow-lg">
                        {step.id}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] mb-4 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[var(--color-primary)]/20 rounded-full">
                      <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-semibold text-[var(--color-primary)]">
                        {step.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-12 top-24 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] -mb-8" />
              )}

              <div className="flex gap-6">
                {/* Circle with Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-[var(--color-bg-dark)] to-[var(--color-bg-medium)] rounded-full border-4 border-[var(--color-primary)] shadow-xl flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-full" />
                    <div className="w-10 h-10 text-[var(--color-primary)] relative z-10">
                      {icons[step.icon as keyof typeof icons]}
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-[var(--color-primary)] text-white font-bold rounded-full flex items-center justify-center text-sm shadow-lg">
                      {step.id}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] mb-3 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[var(--color-primary)]/20 rounded-full">
                    <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-semibold text-[var(--color-primary)]">
                      {step.timeline}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
