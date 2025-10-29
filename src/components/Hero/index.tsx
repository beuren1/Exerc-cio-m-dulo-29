import styled from 'styled-components'

const Section = styled.section`
  background: radial-gradient(1200px 400px at 80% -50%, rgba(0,229,255,.25), transparent 70%),
              radial-gradient(600px 260px at 10% -20%, rgba(138,43,226,.25), transparent 70%),
              #0b0b0f;
  padding: clamp(24px, 6vw, 64px) 0;
  border-bottom: 1px solid rgba(255,255,255,.08);
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  color: #fff;
`

const Title = styled.h2`
  margin: 0;
  font-size: clamp(1.4rem, 2.4vw, 2rem);
  font-weight: 800;
  letter-spacing: .4px;
`

const Subtitle = styled.p`
  margin: 12px 0 0;
  color: rgba(255,255,255,.75);
`

const Hero = () => (
  <Section>
    <Container>
      <Title>As melhores vagas para tecnologia, design e negócios</Title>
      <Subtitle>Vagas alinhadas ao seu perfil e objetivos.</Subtitle>
    </Container>
  </Section>
)

export default Hero