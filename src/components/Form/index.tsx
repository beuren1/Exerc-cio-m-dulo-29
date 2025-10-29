import { FormEvent, useState } from 'react'
import styled from 'styled-components'

const Search = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  margin: 24px 0;
`

const Input = styled.input`
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 10px;
  padding: 12px 14px;
  color: #fff;
  outline: none;
  transition: box-shadow .15s ease, border-color .15s ease;
  &::placeholder { color: rgba(255,255,255,.55); }
  &:focus{
    border-color: rgba(0,229,255,.55);
    box-shadow: 0 0 0 3px rgba(0,229,255,.15);
  }
`

const Button = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 12px 18px;
  font-weight: 700;
  color: #001219;
  background: linear-gradient(90deg, #00e5ff, #8a2be2);
  cursor: pointer;
  transition: transform .12s ease, filter .18s ease;
  &:hover{ transform: translateY(-1px); filter: brightness(1.08); }
`

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
    <Search onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Front-end, fullstack, node, design"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <Button type="submit">Pesquisar</Button>
    </Search>
  )
}