import heroImg from '../assets/mhmd nour.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16"
    >
      <div className="flex-1 reveal">
        
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-none">
          Social Media Specialist &amp;{' '}
          <span className="gold-text-gradient">Digital Brand Strategist</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10">
          Helping brands grow through creative content, strategic storytelling, and a strong digital presence.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            className="bg-primary text-on-primary px-10 py-4 rounded-full font-button uppercase tracking-widest hover:scale-105 transition-transform"
            href="#work"
          >
            View My Work
          </a>
          <a
            className="border border-primary text-primary px-10 py-4 rounded-full font-button uppercase tracking-widest hover:bg-primary/10 transition-colors"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
        <div className="flex justify-center gap-8 text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-4xl">brand_awareness</span>
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-4xl">
              video_camera_front
            </span>
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-4xl">groups</span>
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-4xl">alternate_email</span>
          </a>
        </div>
      </div>
      <div
        className="flex-1 flex justify-center reveal"
        style={{ transitionDelay: '200ms' }}
      >
        <div className="hero-frame rounded-2xl shadow-2xl">
          <div className="bg-surface overflow-hidden rounded-xl w-full aspect-[4/5] max-w-[450px]">
            <img
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              src={heroImg}
              alt="Portrait of the social media specialist"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
