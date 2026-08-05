import { reasons } from '../data/content'
import { FadeIn } from './FadeIn'

export function WhyFinestra() {
  return (
    <section id="por-que" className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sea">
            Por qué Finestra
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Gestionar un viaje puede ser difícil. Nosotros lo hacemos fácil.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {reasons.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-[24px] bg-mist p-6 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sea/10 text-sm font-bold text-sea">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                  {item.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
