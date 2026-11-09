import { Link } from '@tanstack/react-router'
import { COURSES, FAQ, HOME, SITE, STEPS, TEACHERS, TESTIMONIALS, toneOf } from '~/content/site'
import { whatsappLink } from '~/lib/whatsapp'
import { Faq } from '../Faq'
import { Photo } from '../Photo'
import { PianoKeys } from '../PianoKeys'

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')

export function HomePage() {
  return (
    <>
      {/* Abertura: o teclado é a porta de entrada do site. */}
      <section className="stage" aria-labelledby="stage-title">
        <div className="wrap stage-top">
          <p className="eyebrow">{HOME.eyebrow}</p>
          <h1 id="stage-title" className="stage-title">
            {HOME.title}
          </h1>
          <div className="stage-row">
            <p className="stage-lead">{HOME.lead}</p>
            <div className="ctas">
              <Link to="/aula-experimental" className="btn btn--sun btn--lg">
                Agendar aula experimental
              </Link>
              <Link to="/cursos" className="btn btn--light btn--lg">
                Cursos e valores
              </Link>
            </div>
          </div>
        </div>
        <div className="wrap wrap--wide">
          <p className="keys-hint">
            <span aria-hidden="true">♪</span> {HOME.keysHint}
          </p>
          <PianoKeys />
        </div>
      </section>

      {/* Cursos como faixas de cor, uma por nota da escala. */}
      <section className="section" aria-labelledby="cursos-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="cursos-title" className="h2">
              {HOME.coursesTitle}
            </h2>
            <p className="lead">{HOME.coursesLead}</p>
          </div>
          <ul className="bands">
            {COURSES.map((c, i) => (
              <li key={c.slug} className={`tone-${i}`}>
                <Link to="/cursos" hash={c.slug} className="band">
                  <span className="band-note" aria-hidden="true">
                    {c.noteName}
                  </span>
                  <span className="band-body">
                    <span className="band-name">{c.name}</span>
                    <span className="band-meta">
                      {c.ages} · {c.format}
                    </span>
                  </span>
                  <span className="band-price">{c.price}</span>
                  <div className="band-photo">
                    <Photo k={c.image} />
                  </div>
                  <span className="band-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Como começar: as quatro etapas são os quatro tempos de um compasso 4/4. */}
      <section className="section section--ivory" aria-labelledby="passos-title">
        <div className="wrap">
          <h2 id="passos-title" className="h2">
            {HOME.stepsTitle}
          </h2>
          <div className="measure">
            <p className="measure-sig" aria-hidden="true">
              <span>4</span>
              <span>4</span>
            </p>
            <ol className="beats">
              {STEPS.map((s, i) => (
                <li key={s.title} className={`tone-${i}`}>
                  <span className="beat-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Professores em cartões, na cor do instrumento principal. */}
      <section className="section" aria-labelledby="prof-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="prof-title" className="h2">
              {HOME.teachersTitle}
            </h2>
            <p className="lead">{HOME.teachersLead}</p>
          </div>
          <ul className="teachers">
            {TEACHERS.map((t) => (
              <li key={t.name} className={`teacher tone-${toneOf(t.course)}`}>
                <span className="teacher-face" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <div className="teacher-body">
                  <p className="teacher-role">{t.role}</p>
                  <h3>{t.name}</h3>
                  <p>{t.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recitais: palco escuro, datas como ingressos e depoimentos. */}
      <section className="section section--stage" aria-labelledby="recital-title">
        <div className="wrap">
          <div className="recital-photo">
            <Photo k="recital" />
          </div>
          <div className="recital">
            <div>
              <h2 id="recital-title" className="h2">
                {HOME.recitalTitle}
              </h2>
              <p className="lead">{HOME.recitalLead}</p>
              <ul className="tickets">
                {HOME.recitalDates.map((d) => (
                  <li key={d.month}>
                    <strong>{d.month}</strong>
                    <span>{d.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.name} className={`quote tone-${i === 0 ? 0 : 5}`}>
                <blockquote>“{t.text}”</blockquote>
                <figcaption>
                  {t.name}, {t.detail}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="note">Depoimentos ilustrativos para este site demonstrativo.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap faq-wrap">
          <h2 id="faq-title" className="h2">
            Perguntas frequentes
          </h2>
          <Faq items={FAQ} />
        </div>
      </section>

      {/* Fechamento: foto da aula + chamada para a aula experimental. */}
      <section className="closing" aria-labelledby="closing-title">
        <div className="closing-photo">
          <Photo k="hero" />
        </div>
        <div className="closing-body">
          <h2 id="closing-title" className="h2">
            {HOME.ctaTitle}
          </h2>
          <p className="lead">{HOME.ctaText}</p>
          <div className="ctas">
            <Link to="/aula-experimental" className="btn btn--ink btn--lg">
              Agendar aula experimental
            </Link>
            <a
              className="btn btn--line btn--lg"
              href={whatsappLink(SITE.whatsappNumber, 'Olá! Quero saber mais sobre as aulas.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
