import { metrics } from '../data/content'

export default function Success() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-high relative overflow-hidden"
      id="success"
    >
      <div className="absolute -right-20 top-20 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
      <div className="max-w-container-max mx-auto relative z-10">
        <h2 className="font-headline-xl text-headline-xl mb-16 text-center reveal">
          Performance Metrics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 reveal">
          {metrics.map(({ value, label }) => (
            <div key={label} className="text-center">
              <span className="block text-4xl md:text-6xl font-headline-xl text-primary mb-2">
                {value}
              </span>
              <span className="text-label-caps uppercase tracking-widest text-on-surface-variant">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
