import React from 'react'
import { Link } from 'gatsby'
import { Container, StyledLink } from '../styles/GlobalStyles'
import { CtaSectionWrapper, CtaTitle } from '../styles/CtaStyles'

const Cta = () => {
 return (
  <CtaSectionWrapper>
   <Container>
    <CtaTitle>Simplify how your team works today.</CtaTitle>
    <StyledLink white>
     <Link to="/" white>Get Started</Link>
    </StyledLink>
   </Container>
  </CtaSectionWrapper>
 )
}

export default Cta
