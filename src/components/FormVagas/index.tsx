import { FormEvent, useState } from 'react'
import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

export default function FormVagas({ aoPesquisar }: Props) {
  const [termo, setTermo] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    aoPesquisar(termo.trim())
  }

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Front-end, fullstack, node, design"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </form>
  )
}
