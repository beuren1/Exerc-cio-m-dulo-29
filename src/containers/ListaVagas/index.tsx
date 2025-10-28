import { useState, useMemo } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import styles from './ListaVagas.module.css'

type TVaga = {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VAGAS: ReadonlyArray<TVaga> = [
  { id: 1, titulo: 'Desenvolvedor front-end', localizacao: 'remoto', nivel: 'junior', modalidade: 'clt', salarioMin: 3000, salarioMax: 4500, requisitos: ['HTML','CSS','JavaScript','jQuery'] },
  { id: 2, titulo: 'Desenvolvedor NodeJS',   localizacao: 'remoto', nivel: 'pleno',  modalidade: 'pj',  salarioMin: 5000, salarioMax: 6500, requisitos: ['HTML','CSS','JavaScript','jQuery'] },
  { id: 3, titulo: 'Desenvolvedor fullstack', localizacao: 'remoto', nivel: 'pleno', modalidade: 'pj', salarioMin: 4000, salarioMax: 6000, requisitos: ['HTML','CSS','JavaScript','jQuery'] },
  { id: 4, titulo: 'Designer de interfaces', localizacao: 'remoto', nivel: 'junior', modalidade: 'clt', salarioMin: 4000, salarioMax: 5000, requisitos: ['HTML','CSS','JavaScript','jQuery'] },
  { id: 5, titulo: 'Desenvolvedor front-end', localizacao: 'remoto', nivel: 'senior', modalidade: 'clt', salarioMin: 7000, salarioMax: 8000, requisitos: ['HTML','CSS','JavaScript','jQuery'] },
  { id: 6, titulo: 'Desenvolvedor front-end para projeto internacional', localizacao: 'remoto', nivel: 'senior', modalidade: 'pj', salarioMin: 12000, salarioMax: 15000, requisitos: ['HTML','CSS','JavaScript','jQuery'] },
  { id: 7, titulo: 'Desenvolvedor front-end', localizacao: 'São Paulo/SP', nivel: 'junior', modalidade: 'clt', salarioMin: 4000, salarioMax: 5000, requisitos: ['HTML','CSS','JavaScript','jQuery'] }
]

// util: remove acentos e baixa caixa
const stripDiacritics = (s: string): string =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const normalize = (s: string): string => stripDiacritics(s.toLowerCase())

const ListaVagas: React.FC = () => {
  const [filtro, setFiltro] = useState<string>('')

  const termo = useMemo<string>(() => normalize(filtro.trim()), [filtro])

  const vagasFiltradas = useMemo(() => {
    if (!termo) return VAGAS
    return VAGAS.filter((v) => {
      const alvo = [
        v.titulo, v.localizacao, v.nivel, v.modalidade, v.requisitos.join(' ')
      ].map(normalize).join(' ')
      return alvo.includes(termo)
    })
  }, [termo])

  return (
    <div className={styles.wrap}>
      <FormVagas aoPesquisar={setFiltro} />

      {vagasFiltradas.length === 0 && (
        <div className={styles.empty}>
          Nenhuma vaga encontrada para “{filtro}”. Tente outro termo.
        </div>
      )}

      <ul className={styles.vagas}>
        {vagasFiltradas.map((v) => (
          <Vaga
            key={v.id}
            titulo={v.titulo}
            localizacao={v.localizacao}
            nivel={v.nivel}
            modalidade={v.modalidade}
            salarioMin={v.salarioMin}
            salarioMax={v.salarioMax}
            requisitos={v.requisitos}
          />
        ))}
      </ul>
    </div>
  )
}

export default ListaVagas
