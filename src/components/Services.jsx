import { services } from '../data/content'

export default function Services() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start reveal">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="font-headline-xl text-headline-xl mb-6">
              Service Offerings
            </h2>
            <p className="text-on-surface-variant mb-10">
              Tailored solutions for brands that demand nothing short of
              perfection.
            </p>
            <a
              className="inline-flex items-center text-primary group font-button uppercase tracking-widest"
              href="#contact"
            >
              Book a Consultation
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">
                arrow_right_alt
              </span>
            </a>
          </div>
          <div className="md:w-2/3 grid gap-12">
            {services.map(({ number, title, description }) => (
              <div
                key={number}
                className="border-b border-primary/20 pb-10 group cursor-default"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-headline-md text-headline-md group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <span className="text-primary/40 group-hover:text-primary">
                    {number}
                  </span>
                </div>
                <p className="text-on-surface-variant">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
