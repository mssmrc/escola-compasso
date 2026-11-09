import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { SITE } from '~/content/site'

const NAV = [
  { to: '/', label: 'Início' },
  { to: '/cursos', label: 'Cursos e valores' },
  { to: '/aula-experimental', label: 'Contato' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="header">
        <div className="wrap header-in">
          <Link to="/" onClick={close} className="logo" aria-label={`${SITE.name}, início`}>
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <rect width="40" height="40" rx="10" fill="var(--stage)" />
              <g fill="var(--ivory)">
                <rect x="7" y="8" width="7.4" height="24" rx="1.6" />
                <rect x="16.3" y="8" width="7.4" height="24" rx="1.6" />
                <rect x="25.6" y="8" width="7.4" height="24" rx="1.6" />
              </g>
              <circle cx="10.7" cy="27" r="2.3" fill="var(--note-1)" />
              <circle cx="20" cy="27" r="2.3" fill="var(--note-3)" />
              <circle cx="29.3" cy="27" r="2.3" fill="var(--note-5)" />
              <g fill="var(--stage)">
                <rect x="12.6" y="8" width="5" height="13" rx="1" />
                <rect x="21.9" y="8" width="5" height="13" rx="1" />
              </g>
            </svg>
            <span>
              Compasso<small>escola de música</small>
            </span>
          </Link>
          <nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Principal">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={close}
                activeOptions={{ exact: n.to === '/' }}
                activeProps={{ className: 'active', 'aria-current': 'page' }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/aula-experimental" className="btn btn--sun nav-cta" onClick={close}>
              Aula experimental grátis
            </Link>
          </nav>
          <button
            className="burger"
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="nav"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </header>
    </>
  )
}
