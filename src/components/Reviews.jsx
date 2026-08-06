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

function GoogleIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-label="Google"
      role="img"
    >
      <title>Google</title>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
      />
    </svg>
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
                  <GoogleIcon className="h-5 w-5 shrink-0" />
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
