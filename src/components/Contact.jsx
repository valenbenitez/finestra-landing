import { FadeIn } from './FadeIn'

export function Contact() {
  return (
    <section id="contacto" className="bg-ink px-5 py-16 text-white sm:px-8 sm:py-24">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
          Contacto
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Contanos qué viaje tenés en mente
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
          Contanos destino, fechas aproximadas y cómo te gusta viajar. Te
          respondemos con opciones claras.
        </p>
        <a
          href="mailto:hola@finestraviajes.tur.ar?subject=Consulta%20desde%20propuesta%20de%20landing"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-ink transition hover:bg-white/90 active:scale-[0.98]"
        >
          Escribinos
        </a>
      </FadeIn>
    </section>
  )
}
