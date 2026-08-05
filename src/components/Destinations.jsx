import { motion, useReducedMotion } from 'framer-motion'
import { destinations } from '../data/content'
import { FadeIn } from './FadeIn'

function Perk({ children, icon = '✓' }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-ink-soft">
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
        {icon}
      </span>
      {children}
    </li>
  )
}

function DestinationCard({ item, index }) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: 0.45,
        delay: reduce ? 0 : index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-full flex-col overflow-hidden rounded-[22px] bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="aspect-[16/10] shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-bold tracking-tight text-ink sm:text-lg">
          {item.name}
        </h3>
        <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
          <span>{item.duration}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-ink">
            <span className="text-google">★</span> {item.rating}
          </span>
        </p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {item.description}
        </p>
        <ul className="mt-4 space-y-2">
          {item.perks.map((perk, perkIndex) => (
            <Perk key={perk} icon={perkIndex === 0 ? '♥' : '✓'}>
              {perk}
            </Perk>
          ))}
        </ul>
        <a
          href="#contacto"
          className="mt-5 inline-flex min-h-10 w-full items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-ink/90 sm:w-fit"
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
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-8 sm:mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Encontrá el viaje perfecto
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Nos enfocamos en calidad. Destinos y propuestas elegidas para que
            la experiencia se sienta simple desde el primer contacto.
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {destinations.map((item, index) => (
            <DestinationCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
