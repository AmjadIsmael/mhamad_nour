import { workItems } from '../data/content'

export default function Work() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="work"
    >
      <div className="mb-16 reveal">
        <span className="text-primary font-label-caps uppercase mb-2 block">
          Case Studies
        </span>
        <h2 className="font-headline-xl text-headline-xl">
          Curated Brand Transformations
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
        {workItems.map(({ tag, title, description, image }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl bg-surface-container aspect-[3/4]"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: `url('${image}')` }}
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="text-primary font-label-caps uppercase mb-2 block">
                {tag}
              </span>
              <h4 className="font-headline-md text-white mb-2">{title}</h4>
              <p className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
