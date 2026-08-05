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

export function Destinations() {
  return (
    <section id="destinos" className="bg-mist px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="mb-8 sm:mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Encontrá el viaje perfecto
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Nos enfocamos en calidad. Destinos y propuestas elegidas para que
            la experiencia se sienta simple desde el primer contacto.
          </p>
        </FadeIn>

        <div className="grid gap-6">
          {destinations.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[24px] bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="aspect-[16/10] overflow-hidden sm:aspect-[2/1]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
                    <span>{item.duration}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-ink">
                      <span className="text-google">★</span> {item.rating}
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                    {item.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {item.perks.map((perk, perkIndex) => (
                      <Perk
                        key={perk}
                        tone={perkIndex === 0 ? 'rose' : 'sea'}
                      >
                        {perk}
                      </Perk>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-ink/90"
                  >
                    Consultar este viaje
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
