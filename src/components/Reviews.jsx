import { reviews } from '../data/content'
import { FadeIn } from './FadeIn'

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5 text-google" aria-label={`${rating} de 5`}>
      {Array.from({ length: rating }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="opiniones" className="bg-sand px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-8 text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
            Clientes
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Lo que dicen quienes viajaron con nosotros
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm ring-1 ring-black/5">
            <Stars rating={5} />
            <span>4.9 · opiniones reales</span>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {reviews.map((review, index) => (
            <FadeIn key={review.id} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-[22px] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Stars rating={review.rating} />
                  <span className="text-[11px] font-semibold tracking-wide text-ink-soft uppercase">
                    Google
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed font-medium text-ink">
                  “{review.quote}”
                </p>
                <div className="mt-auto pt-5">
                  <p className="text-sm font-bold text-ink">{review.author}</p>
                  <p className="text-xs text-ink-soft">{review.trip}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
