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
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 reveal">
        {workItems.map(({ tag, title, description, image, fit, padding }) => (
          <div
            key={title}
            className={`group relative overflow-hidden rounded-2xl aspect-[3/4] ${
              fit === 'contain' ? 'bg-black' : 'bg-surface-container'
            }`}
          >
            {fit === 'contain' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 h-2/3 bg-primary/20 blur-[70px] rounded-full" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 md:bg-black/40 group-hover:bg-black/20 transition-all z-10" />
            {fit === 'contain' ? (
              <img
                src={image}
                alt={title}
                className={`absolute inset-0 w-full h-full object-contain rounded-md group-hover:scale-110 transition-transform duration-700 ${
                  padding || 'p-1 sm:p-8 md:p-14'
                }`}
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${image}')` }}
              />
            )}
            <div className="absolute bottom-0 left-0 w-full px-2 pb-2 sm:p-4 md:p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform text-center md:text-left">
              <span className="text-primary font-label-caps uppercase mb-2 hidden md:block">
                {tag}
              </span>
              <h4 className="font-headline-md text-white mb-2 hidden md:block">
                {title}
              </h4>
              <p className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity text-sm hidden md:block">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
