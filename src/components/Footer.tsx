import { Link } from '@tanstack/react-router'
import { COURSES, DEMO_NOTICE, DEV_CREDIT, SITE } from '~/content/site'
import { whatsappLink } from '~/lib/whatsapp'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-strip" aria-hidden="true">
        {COURSES.map((c, i) => (
          <span key={c.slug} className={`tone-${i}`} />
        ))}
      </div>
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">Compasso</p>
          <p>{SITE.tagline}</p>
        </div>
        <nav aria-label="Cursos">
          <h2>Cursos</h2>
          {COURSES.map((c) => (
            <Link key={c.slug} to="/cursos" hash={c.slug}>
              {c.name}
            </Link>
          ))}
        </nav>
        <div>
          <h2>Visite</h2>
          <p>
            {SITE.address.street}, {SITE.address.district}
            <br />
            {SITE.address.city}
          </p>
          <p className="footer-small">{SITE.hours}</p>
        </div>
        <div>
          <h2>Contato</h2>
          <a href={whatsappLink(SITE.whatsappNumber)} target="_blank" rel="noopener noreferrer">
            WhatsApp {SITE.whatsapp}
          </a>
          <a href={`tel:${SITE.phone.replace(/\D/g, '')}`}>Telefone {SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <Link to="/privacidade">Privacidade</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {SITE.name}. {DEMO_NOTICE}
        </p>
        <p className="credit">
          {DEV_CREDIT.text}{' '}
          <a href={DEV_CREDIT.url} target="_blank" rel="noopener">
            {DEV_CREDIT.name}
          </a>
        </p>
      </div>
    </footer>
  )
}
