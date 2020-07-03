import React from 'react'
import { Link } from 'gatsby'
import { Container, Flex, StyledLink } from '../../styles/GlobalStyles'
import { IntroWrapper, IntroWrapperInner, ImageWrapper, IntroTextWrapper, IntroTitle, IntroSubTitle } from '../../styles/HomeStyles'
import introSVG from '../../images/illustration-intro.svg'

const HomeIntro = () => {

 return (
  <IntroWrapper>
   <Container>
    <IntroWrapperInner>
     <ImageWrapper>
      <img src={introSVG} alt="" />
     </ImageWrapper>
     <IntroTextWrapper>
      <IntroTitle>
       Bring everyone together to build better products.
      </IntroTitle>
      <IntroSubTitle>
       Manage makes it simple for software teams to plan day-to-day
       tasks while keeping the larger team goals in view.
      </IntroSubTitle>
      <StyledLink to="/" light mainButton>
       Get Started
      </StyledLink>
     </IntroTextWrapper>
    </IntroWrapperInner>
   </Container>
  </IntroWrapper>
 )
}

export default HomeIntro
