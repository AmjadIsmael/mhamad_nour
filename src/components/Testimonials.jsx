import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline-xl text-headline-xl mb-16 text-center reveal">
          Trusted by Industry Leaders
        </h2>
        <div className="grid md:grid-cols-3 gap-8 reveal">
          {testimonials.map(({ quote, name, title }, i) => (
            <div
              key={name}
              className={`glass-card p-10 rounded-2xl relative ${i === 1 ? 'mt-8' : ''}`}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary">
                  format_quote
                </span>
              </div>
              <p className="font-body-lg text-body-lg italic mb-10 text-on-surface">
                &quot;{quote}&quot;
              </p>
              <div>
                <p className="font-bold text-primary">{name}</p>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
