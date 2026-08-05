import { motion, useReducedMotion } from 'framer-motion'
import { destinations } from '../data/content'
import { FadeIn } from './FadeIn'

function Perk({ children, tone = 'sea' }) {
  const toneClass =
    tone === 'rose'
      ? 'bg-rose-100 text-rose-600'
      : 'bg-emerald-100 text-emerald-700'

  return (
    <li className="flex items-center gap-2.5 text-sm text-ink-soft">
      <span
        className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${toneClass}`}
      >
        ✓
      </span>
      {children}
    </li>
  )
}

function DestinationCard({ item }) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 36, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.35, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="grid h-full overflow-hidden rounded-[22px] bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md lg:h-[260px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
    >
      <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex h-full flex-col p-5 sm:p-6 lg:overflow-hidden lg:p-6">
        <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
          {item.name}
        </h3>
        <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
          <span>{item.duration}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-ink">
            <span className="text-google">★</span> {item.rating}
          </span>
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {item.description}
        </p>
        <ul className="mt-4 space-y-2">
          {item.perks.map((perk, perkIndex) => (
            <Perk key={perk} tone={perkIndex === 0 ? 'rose' : 'sea'}>
              {perk}
            </Perk>
          ))}
        </ul>
        <a
          href="#contacto"
          className="mt-5 inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-ink/90"
        >
          Consultar este viaje
        </a>
      </div>
    </motion.article>
  )
}

export function Destinations() {
  return (
    <section id="destinos" className="bg-mist px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="mb-8 sm:mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Encontrá el viaje perfecto
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Nos enfocamos en calidad. Destinos y propuestas elegidas para que
            la experiencia se sienta simple desde el primer contacto.
          </p>
        </FadeIn>

        <div className="grid gap-5 lg:gap-5">
          {destinations.map((item) => (
            <DestinationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
