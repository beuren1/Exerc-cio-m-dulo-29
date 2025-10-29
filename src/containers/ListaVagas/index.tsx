import styled from 'styled-components'
import Vaga from '../../components/Vaga'
import FormVagas from '../../components/Form'
import vagas from '../../vagas.json'
import { useMemo, useState } from 'react'

const Section = styled.section`
  padding: 24px 0 56px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`

const ListaVagas = () => {
  const [termo, setTermo] = useState('')

  const lista = useMemo(() => {
    const t = termo.toLowerCase()
    return vagas.filter((v) => (v.titulo + v.tipo + v.nivel + v.localizacao).toLowerCase().includes(t))
  }, [termo])

  return (
    <Section>
      <FormVagas aoPesquisar={setTermo} />
      <Grid>
        {lista.map((vaga) => (
          <Vaga key={vaga.id} vaga={vaga} />
        ))}
      </Grid>
    </Section>
  )
}

export default ListaVagas