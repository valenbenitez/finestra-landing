import { motion, useReducedMotion } from 'framer-motion'
import { groupTrip } from '../data/content'
import { FadeIn } from './FadeIn'

export function GroupTravel() {
  const reduce = useReducedMotion()

  return (
    <section id="grupos" className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="mb-8 sm:mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {groupTrip.eyebrow}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {groupTrip.lead}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <motion.article
            whileHover={reduce ? undefined : { y: -4 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-[24px] bg-white shadow-md ring-1 ring-black/5"
          >
            <div className="aspect-[16/10] overflow-hidden sm:aspect-[2/1]">
              <img
                src={groupTrip.image}
                alt="Grupo de viajeros"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                {groupTrip.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                {groupTrip.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {groupTrip.perks.map((perk, index) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2.5 text-sm text-ink-soft"
                  >
                    <span
                      className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        index === 0
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-rose-100 text-rose-600'
                      }`}
                    >
                      {index === 0 ? '$' : '♥'}
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-end">
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
