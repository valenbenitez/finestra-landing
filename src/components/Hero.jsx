import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { heroPoster, heroVideo, navLinks } from '../data/content'

export function Hero() {
  const reduce = useReducedMotion()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.15])

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white"
    >
      <motion.div
        className="absolute inset-0"
        style={
          reduce
            ? undefined
            : {
                y: mediaY,
                scale: mediaScale,
              }
        }
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col px-5 pb-8 pt-6 sm:px-8"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <header className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="text-lg font-bold tracking-tight sm:text-xl"
          >
            Finestra Viajes
          </a>
          <nav className="hidden items-center gap-5 text-[13px] font-medium text-white/85 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-md bg-white px-4 py-2 font-semibold text-ink transition hover:bg-white/90"
            >
              Contactanos
            </a>
          </nav>
          <a
            href="#contacto"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink lg:hidden"
          >
            Contactanos
          </a>
        </header>

        <div className="mt-auto flex flex-1 flex-col justify-end pb-6 pt-16 sm:pb-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Finestra Viajes
            </p>
            <h1 className="text-[clamp(2.35rem,9vw,4.5rem)] leading-[1.02] font-extrabold tracking-tight">
              Tu ventana
              <br />
              al mundo
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed font-medium text-white/80 sm:text-lg">
              Destinos claros, asesoramiento cercano y una experiencia simple
              desde el primer clic.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 rounded-[28px] bg-white p-4 text-ink shadow-2xl shadow-black/25 sm:mt-10 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-5"
          >
            <div className="mb-4 sm:mb-0">
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                Empezá a explorar
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Elegí un destino o escribinos tu idea de viaje.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <a
                href="#destinos"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-ink/90 active:scale-[0.98]"
              >
                Explorar destinos
              </a>
              <a
                href="#contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 bg-mist px-6 text-sm font-semibold text-ink transition hover:bg-sand active:scale-[0.98]"
              >
                Contactanos
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
