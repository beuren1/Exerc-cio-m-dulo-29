import styled from 'styled-components'
import { Vaga } from '../../types/vaga'

const Card = styled.div`
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 14px;
  padding: 16px;
  color: #fff;
  display: grid;
  gap: 8px;
`

const Titulo = styled.h3`
  margin: 0 0 6px;
  font-size: 1.05rem;
`

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Tag = styled.li`
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: .85rem;
  color: #cfe9ff;
`

type Props = {
  vaga: Vaga
}

const VagaComp = ({ vaga }: Props) => (
  <Card>
    <Titulo>{vaga.titulo}</Titulo>
    <Tags>
      <Tag>{vaga.localizacao}</Tag>
      <Tag>{vaga.nivel}</Tag>
      <Tag>{vaga.tipo}</Tag>
      <Tag>Faixa: {vaga.salario}</Tag>
    </Tags>
  </Card>
)

export default VagaComp