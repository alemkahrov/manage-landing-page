import React from 'react'
import { Link } from 'gatsby'
import { Container, Flex, ButtonWrapper } from '../styles/GlobalStyles'
import { CtaSectionWrapper, CtaTitle, CtaSvgMobil } from '../styles/CtaStyles'
import ctaSvgMobil from '../images/bg-tablet-pattern.svg'

const Cta = () => {
 return (
  <CtaSectionWrapper>
   {/* <CtaSvgMobil>
    <img src={ctaSvgMobil} alt=""/>
   </CtaSvgMobil> */}
   <Container>
    <CtaTitle>Simplify how your team works today.</CtaTitle>
    <ButtonWrapper>
     <Link to="/">Get Started</Link>
    </ButtonWrapper>
   </Container>
  </CtaSectionWrapper>
 )
}

export default Cta
