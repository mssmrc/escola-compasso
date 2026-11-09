import { Link, createFileRoute } from '@tanstack/react-router'
import { Photo } from '~/components/Photo'
import { COURSES, SITE } from '~/content/site'

export const Route = createFileRoute('/cursos')({
  head: () => ({
    meta: [
      { title: `Cursos e valores · ${SITE.name}` },
      {
        name: 'description',
        content:
          'Piano, violão, guitarra, canto, bateria e musicalização infantil: idades, formato das aulas e mensalidades.',
      },
    ],
  }),
  component: CoursesPage,
})

function CoursesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Dó, Ré, Mi, Fá, Sol, Lá</p>
          <h1 className="h1">Cursos e valores</h1>
          <p className="lead">Mensalidade com uma aula por semana. Matrícula gratuita e sem fidelidade.</p>
          <nav className="chips" aria-label="Ir para o curso">
            {COURSES.map((c, i) => (
              <a key={c.slug} href={`#${c.slug}`} className={`tone-${i}`}>
                <span className="chip-dot" aria-hidden="true">
                  {c.noteName}
                </span>
                {c.name}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <section className="section section--flush">
        <div className="wrap course-list">
          {COURSES.map((c, i) => (
            <article key={c.slug} id={c.slug} className={`course-row tone-${i}`}>
              <div className="course-row-photo">
                <Photo k={c.image} />
                <span className="course-row-note" aria-hidden="true">
                  {c.noteName}
                </span>
              </div>
              <div>
                <p className="course-row-ages">{c.ages}</p>
                <h2 className="h2">{c.name}</h2>
                <p className="course-text">{c.text}</p>
                <dl className="course-facts">
                  <div>
                    <dt>Idade</dt>
                    <dd>{c.ages}</dd>
                  </div>
                  <div>
                    <dt>Formato</dt>
                    <dd>{c.format}</dd>
                  </div>
                  <div>
                    <dt>Mensalidade</dt>
                    <dd>{c.price}</dd>
                  </div>
                </dl>
                <h3>O que você aprende</h3>
                <ul className="notes">
                  {c.learn.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <Link to="/aula-experimental" search={{ curso: c.name }} className="btn btn--sun">
                  Aula experimental de {c.name.toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
