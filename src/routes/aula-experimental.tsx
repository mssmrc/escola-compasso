import { createFileRoute } from '@tanstack/react-router'
import { TrialForm } from '~/components/TrialForm'
import { COURSES, SITE } from '~/content/site'
import { whatsappLink } from '~/lib/whatsapp'

export const Route = createFileRoute('/aula-experimental')({
  // ?curso=... vem da página de cursos e só é aceito se existir.
  validateSearch: (search: Record<string, unknown>): { curso?: string } => {
    const c = typeof search.curso === 'string' ? search.curso : undefined
    return c && COURSES.some((x) => x.name === c) ? { curso: c } : {}
  },
  head: () => ({
    meta: [
      { title: `Aula experimental e contato · ${SITE.name}` },
      {
        name: 'description',
        content: `Agende uma aula experimental gratuita. ${SITE.address.street}, ${SITE.address.district}, ${SITE.address.city}.`,
      },
    ],
  }),
  component: TrialPage,
})

function TrialPage() {
  const { curso } = Route.useSearch()
  const map = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.mapQuery)}&output=embed`
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Primeira aula grátis</p>
          <h1 className="h1">Aula experimental</h1>
          <p className="lead">
            30 minutos com o professor, no instrumento que você escolher. Preencha e a mensagem abre pronta no
            WhatsApp.
          </p>
        </div>
      </section>
      <section className="section section--flush">
        <div className="wrap contact">
          <div className="form-card">
            <div className="form-ruler" aria-hidden="true">
              {COURSES.map((c, i) => (
                <span key={c.slug} className={`tone-${i}`} />
              ))}
            </div>
            <TrialForm key={curso ?? ''} defaultCourse={curso ?? ''} />
          </div>
          <aside className="contact-info">
            <h2>Endereço</h2>
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.district}, {SITE.address.city}
            </p>
            <h2>Horário</h2>
            <p>{SITE.hours}</p>
            <h2>Contato</h2>
            <p>
              <a href={whatsappLink(SITE.whatsappNumber)} target="_blank" rel="noopener noreferrer">
                WhatsApp {SITE.whatsapp}
              </a>
              <br />
              <a href={`tel:${SITE.phone.replace(/\D/g, '')}`}>Telefone {SITE.phone}</a>
              <br />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <iframe
              className="map"
              title={`Mapa: ${SITE.address.mapQuery}`}
              src={map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>
        </div>
      </section>
    </>
  )
}
