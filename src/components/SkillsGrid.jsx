import { skills } from '../data/content'

export default function SkillsGrid() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
        <div>
          <span className="text-primary font-label-caps uppercase mb-2 block">
            Specializations
          </span>
          <h2 className="font-headline-xl text-headline-xl">
            Technical Core &amp; Mastery
          </h2>
        </div>
        <p className="text-on-surface-variant max-w-sm mb-2">
          A holistic approach to digital management across the entire content
          lifecycle.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-surface-container p-6 rounded-xl hover:bg-primary/10 transition-colors border border-on-surface/5"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
