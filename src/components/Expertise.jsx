import { pillars } from '../data/content'

export default function Expertise() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
      id="expertise"
    >
      <div className="max-w-container-max mx-auto text-center mb-20 reveal">
        <h2 className="font-headline-xl text-headline-xl mb-6">
          Strategic Digital Authority
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
         Creating attractive content with a clear strategy to help brands grow online.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-gutter max-w-container-max mx-auto">
        {pillars.map(({ icon, title, description }, i) => (
          <div
            key={title}
            className="glass-card p-10 rounded-2xl reveal"
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              {icon}
            </span>
            <h3 className="font-headline-md text-headline-md mb-4">{title}</h3>
            <p className="text-on-surface-variant">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
