export default function Spotlight() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="glass-card p-12 md:p-20 rounded-3xl relative overflow-hidden reveal">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display-lg-mobile text-display-lg-mobile md:text-headline-xl mb-6">
                Unrivaled Results For Unrivaled Brands
              </h2>
              <p className="text-on-surface-variant text-body-lg mb-8">
                Every brand has a story. I ensure yours is told with the
                elegance and authority it deserves.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Bespoke Strategy Design
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  24/7 Priority Management
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Real-time Performance Dashboards
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block p-1 bg-gradient-to-br from-primary to-transparent rounded-full mb-6">
                <div className="bg-surface p-10 rounded-full">
                  <span className="block text-6xl md:text-8xl font-headline-xl text-primary">
                    98%
                  </span>
                  <span className="text-label-caps uppercase tracking-widest">
                    Client Retention Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
