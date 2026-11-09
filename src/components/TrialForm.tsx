import { useState, type FormEvent } from 'react'
import { COURSES, SITE } from '~/content/site'
import { buildMessage, whatsappLink } from '~/lib/whatsapp'

const DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

/** Agendamento da aula experimental: monta a mensagem e abre o WhatsApp. Nada vai para servidor. */
export function TrialForm({ defaultCourse = '' }: { defaultCourse?: string }) {
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [forChild, setForChild] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    if (!get('nome') || get('telefone').replace(/\D/g, '').length < 10) {
      setError('Preencha o nome e um WhatsApp com DDD.')
      return
    }
    setError('')
    const message = buildMessage(`Olá! Quero agendar uma aula experimental na ${SITE.shortName}.`, [
      [forChild ? 'Responsável' : 'Nome', get('nome')],
      ['Aluno(a)', forChild ? `${get('aluno')} (${get('idade')} anos)` : ''],
      ['WhatsApp', get('telefone')],
      ['Curso', get('curso')],
      ['Nível', get('nivel')],
      ['Dias possíveis', data.getAll('dias').join(', ')],
      ['Período', get('periodo')],
    ])
    window.open(whatsappLink(SITE.whatsappNumber, message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <fieldset className="who">
        <legend>A aula é para</legend>
        <label>
          <input type="radio" name="para" checked={!forChild} onChange={() => setForChild(false)} />
          <span>Mim</span>
        </label>
        <label>
          <input type="radio" name="para" checked={forChild} onChange={() => setForChild(true)} />
          <span>Meu filho ou filha</span>
        </label>
      </fieldset>
      <div className="form-row">
        <label>
          {forChild ? 'Nome do responsável' : 'Seu nome'}
          <input name="nome" autoComplete="name" required />
        </label>
        <label>
          WhatsApp com DDD
          <input name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(62) 90000-0000" required />
        </label>
      </div>
      {forChild && (
        <div className="form-row">
          <label>
            Nome da criança
            <input name="aluno" />
          </label>
          <label>
            Idade
            <input name="idade" inputMode="numeric" placeholder="Ex.: 7" />
          </label>
        </div>
      )}
      <div className="form-row">
        <label>
          Curso
          <select name="curso" defaultValue={defaultCourse}>
            <option value="">Ainda não decidi</option>
            {COURSES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Nível
          <select name="nivel" defaultValue="Nunca toquei">
            <option>Nunca toquei</option>
            <option>Sei o básico</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
        </label>
      </div>
      <fieldset className="days">
        <legend>Dias possíveis</legend>
        {DAYS.map((d) => (
          <label key={d}>
            <input type="checkbox" name="dias" value={d} />
            <span>{d}</span>
          </label>
        ))}
      </fieldset>
      <label>
        Período
        <select name="periodo" defaultValue="">
          <option value="">Qualquer horário</option>
          <option>Manhã</option>
          <option>Tarde</option>
          <option>Noite (até 21h)</option>
        </select>
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {sent && !error && (
        <p className="form-ok" role="status">
          Abrimos o WhatsApp com sua mensagem. É só tocar em enviar.
        </p>
      )}
      <button className="btn btn--sun" type="submit">
        Agendar aula experimental
      </button>
    </form>
  )
}
