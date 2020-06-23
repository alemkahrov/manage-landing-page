import React from 'react'
import { Link } from 'gatsby'
import { Container, Flex } from '../styles/GlobalStyles'
import { FooterWrapper, Form, NavList, FooterSocial, FooterLogo, Copyright } from '../styles/FooterStyles'
import { Logo } from '../svg/svg-icons'
import { IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";

const Footer = () => {
 return (
  <FooterWrapper>
   <Container>
    <Form>
     <Flex spaceBetween>
      <input type="text" placeholder="Updated in your inbox..." />
      <button type="submit">Go</button>
     </Flex>
    </Form>
    <NavList>
     <Flex spaceBetween alignTop>
      <ul>
       <li><Link to="/">home</Link></li>
       <li><Link to="/">pricing</Link></li>
       <li><Link to="/">products</Link></li>
       <li><Link to="/">about us</Link></li>
      </ul>
      <ul>
       <li><Link to="/">careers</Link></li>
       <li><Link to="/">community</Link></li>
       <li><Link to="/">privacy policy</Link></li>
      </ul>
     </Flex>
    </NavList>
    <FooterSocial>
     <a href="/"><IoLogoFacebook /></a>
     <a href="/"><IoLogoYoutube /></a>
     <a href="/"><IoLogoTwitter /></a>
     <a href="/"><IoLogoPinterest /></a>
     <a href="/"><IoLogoInstagram /></a>
    </FooterSocial>
    <FooterLogo>
     <Logo />
    </FooterLogo>
    <Copyright>
     Copyright 2020. All Rights Reserved
    </Copyright>
   </Container>
  </FooterWrapper >
 )
}

export default Footer
