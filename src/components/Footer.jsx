import { socialLinks } from '../data/content'
import { InstagramIcon, FacebookIcon, TiktokIcon } from './icons/SocialIcons'

const iconByKey = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TiktokIcon,
}

export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-surface-container-lowest flex flex-col items-center gap-unit px-margin-mobile md:px-margin-desktop text-center border-t border-primary/10">
      <div className="font-display-lg-mobile text-headline-md text-primary mb-6 uppercase tracking-tighter">
        ELITE CREATIVE
      </div>
      <div className="flex gap-8 mb-8">
        {socialLinks.map(({ key, label, href }) => {
          const Icon = iconByKey[key]
          return (
            <a
              key={key}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
              href={href}
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          )
        })}
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant opacity-60">
      © 2024 ELITE CREATIVE SPECIALIST. ALL RIGHTS RESERVED.
      </p>
    </footer>
  )
}
