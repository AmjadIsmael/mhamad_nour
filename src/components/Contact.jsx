import { socialLinks } from '../data/content'
import { InstagramIcon, FacebookIcon, TiktokIcon } from './icons/SocialIcons'

const iconByKey = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TiktokIcon,
}

export default function Contact() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center reveal">
        <span className="text-primary font-label-caps uppercase mb-4 block">
          Let&apos;s Connect
        </span>
        <h2 className="font-display-lg-mobile text-display-lg-mobile mb-10 leading-tight">
          Let&apos;s Build Your{' '}
          <span className="gold-text-gradient">Brand Online</span>
        </h2>
        <p className="text-on-surface-variant text-body-lg mb-12">
          I am currently accepting select new partnerships for the upcoming
          quarter. Secure your consultation today.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <a
            className="bg-primary text-on-primary px-12 py-5 rounded-full font-button uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3"
            href="mailto:hello@elitecreative.com"
          >
            <span className="material-symbols-outlined">mail</span>
            Inquire Now
          </a>
          <a
            className="border border-primary/30 text-primary px-12 py-5 rounded-full font-button uppercase tracking-widest hover:border-primary transition-all flex items-center justify-center gap-3"
            href="#"
          >
            <span className="material-symbols-outlined">calendar_today</span>
            Schedule Call
          </a>
        </div>
        <div className="flex justify-center gap-8">
          {socialLinks.map(({ key, label, href }) => {
            const Icon = iconByKey[key]
            return (
              <a
                key={key}
                className="text-on-surface-variant hover:text-primary transition-colors"
                href={href}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
