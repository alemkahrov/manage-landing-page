import React from 'react'
import { Link } from 'gatsby'
import { Container, Flex, ButtonWrapper } from '../../styles/GlobalStyles'
import { IntroWrapper, ImageWrapper, IntroTextWrapper, IntroTitle, IntroSubTitle, IntroSVG } from '../../styles/HomeStyles'
import introSVG from '../../images/illustration-intro.svg'
import svgPattern from '../../images/bg-tablet-pattern.svg'

const HomeIntro = () => {

 return (
  <IntroWrapper>
   <IntroSVG>
    <img src={svgPattern} alt=""/>
   </IntroSVG>
   <Container>
    <Flex flexColumn>
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
      <ButtonWrapper>
       <Link to="/Services">Get Started</Link>
      </ButtonWrapper>
     </IntroTextWrapper>
    </Flex>
   </Container>
  </IntroWrapper>
 )
}

export default HomeIntro
