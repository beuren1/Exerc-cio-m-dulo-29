import styled from 'styled-components'

const HeaderBar = styled.header`
  background: linear-gradient(135deg, rgba(0,229,255,.1), rgba(255,60,172,.12)), var(--surface, #0e0e10);
  border-bottom: 1px solid rgba(255,255,255,.08);
  padding: clamp(16px, 2.8vw, 28px) 20px;
  display: grid;
  place-items: center;
`

const Title = styled.h1`
  margin: 0;
  font-size: clamp(1.6rem, 2.6vw, 2.2rem);
  letter-spacing: .6px;
  color: #fff;
  text-shadow: 0 2px 14px rgba(0, 229, 255, .25);
`

const Cabecalho = () => (
  <HeaderBar>
    <Title>EBAC Jobs</Title>
  </HeaderBar>
)

export default Cabecalho