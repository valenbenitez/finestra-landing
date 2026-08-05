import { motion, useReducedMotion } from 'framer-motion'
import { groupTrip } from '../data/content'
import { FadeIn } from './FadeIn'

export function GroupTravel() {
  const reduce = useReducedMotion()

  return (
    <section id="grupos" className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="mb-6 sm:mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {groupTrip.eyebrow}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {groupTrip.lead}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <motion.article
            whileHover={reduce ? undefined : { y: -3 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-[22px] bg-white shadow-md ring-1 ring-black/5 lg:grid lg:h-[280px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"
          >
            <div className="aspect-[16/10] overflow-hidden sm:aspect-[2/1] lg:aspect-auto lg:h-full">
              <img
                src={groupTrip.image}
                alt="Grupo de viajeros"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col p-5 sm:p-6 lg:overflow-hidden lg:p-6">
              <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
                {groupTrip.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                {groupTrip.description}
              </p>
              <ul className="mt-4 space-y-2">
                {groupTrip.perks.map((perk, index) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2.5 text-sm text-ink-soft"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                      {index === 0 ? '$' : '♥'}
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex justify-end pt-5">
                <a
                  href="#contacto"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-ink/90 active:scale-[0.98]"
                >
                  {groupTrip.cta}
                </a>
              </div>
            </div>
          </motion.article>
        </FadeIn>
      </div>
    </section>
  )
}
