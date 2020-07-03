import React from 'react'
import { Link } from 'gatsby'
import { Container, StyledLink, Flex } from '../styles/GlobalStyles'
import { CtaSectionWrapper, CtaTitle } from '../styles/CtaStyles'

const Cta = () => {
  return (
    <CtaSectionWrapper>
      <div className="svg svg-mobile">
        <svg xmlns="http://www.w3.org/2000/svg" width="94" height="302"><rect width="310.431" height="708" x="-357" y="-17" fill="#FFF0EC" fill-rule="evenodd" opacity=".071" rx="155.215" transform="scale(1 -1) rotate(-45 -951.398 26.5)" /></svg>
      </div>
      <Container>
        <Flex flexColumn spaceBetween>
          <CtaTitle>Simplify how your team works today.</CtaTitle>
          <StyledLink mainButton>
            Get Started
          </StyledLink>
        </Flex>
      </Container>
    </CtaSectionWrapper>
  )
}

export default Cta
