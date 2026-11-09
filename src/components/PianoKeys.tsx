import { Link } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import { COURSES } from '~/content/site'

/**
 * Teclado de piano que abre o site: cada tecla branca é um curso, com um "adesivo" colorido
 * (as cores seguem a escala usada na musicalização: Dó vermelho, Ré laranja, Mi amarelo…).
 * Ao tocar/clicar, a tecla soa a nota (Web Audio, gerada no navegador, sem arquivos de som)
 * e leva para o curso. O som só acontece por ação da pessoa.
 * Na tela larga o teclado fica na horizontal; no celular ele gira e as teclas viram barras.
 */
export function PianoKeys() {
  const ctx = useRef<AudioContext | null>(null)
  const [pressed, setPressed] = useState<string | null>(null)

  function play(freq: number) {
    try {
      ctx.current ??= new AudioContext()
      const ac = ctx.current
      const osc = ac.createOscillator()
      const gain = ac.createGain()
      osc.type = 'triangle'
      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.0001, ac.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.25, ac.currentTime + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 1.2)
      osc.connect(gain).connect(ac.destination)
      osc.start()
      osc.stop(ac.currentTime + 1.25)
    } catch {
      /* navegador sem Web Audio: segue só a navegação */
    }
  }

  return (
    <nav className="piano" aria-label="Cursos">
      <ol className="piano-keys">
        {COURSES.map((c, i) => (
          <li key={c.slug} className={`piano-key tone-${i}`}>
            <Link
              to="/cursos"
              hash={c.slug}
              className={`piano-white${pressed === c.slug ? ' is-down' : ''}`}
              onPointerDown={() => {
                setPressed(c.slug)
                play(c.note)
              }}
              onPointerUp={() => setPressed(null)}
              onPointerLeave={() => setPressed(null)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && play(c.note)}
            >
              <span className="piano-sticker" aria-hidden="true">
                {c.noteName}
              </span>
              <span className="piano-name">{c.name}</span>
              <span className="piano-age">{c.ages}</span>
            </Link>
            {/* Teclas pretas: entre Dó-Ré, Ré-Mi, Fá-Sol e Sol-Lá (não há entre Mi e Fá). */}
            {i < COURSES.length - 1 && i !== 2 && <span className="piano-black" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </nav>
  )
}
