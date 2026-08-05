import { motion, useReducedMotion } from 'framer-motion'
import { packageTypes } from '../data/content'
import { FadeIn } from './FadeIn'

export function Packages() {
  const reduce = useReducedMotion()

  return (
    <section id="paquetes" className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
            Cómo viajamos
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Secciones que ya conocés
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
            Misma lógica que tu sitio actual — grupales, escapadas, paquetes,
            cruceros y viajes a medida — con una presentación más clara.
          </p>
        </FadeIn>

        <div className="flex items-stretch gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {packageTypes.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.05}
              className="flex h-auto min-h-full min-w-[78%] sm:min-w-0"
            >
              <motion.a
                href="#contacto"
                whileHover={reduce ? undefined : { y: -4 }}
                className="flex h-full w-full flex-col overflow-hidden rounded-[22px] bg-mist ring-1 ring-black/5"
              >
                <div className="aspect-[4/3] shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-base font-bold text-ink">{item.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-snug text-ink-soft">
                    {item.blurb}
                  </p>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
