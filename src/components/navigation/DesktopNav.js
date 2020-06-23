import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { Nav } from "../../styles/HeaderStyles"
// import { Container, Flex } from "../../styles/GlobalStyles"
// import { Logo } from '../../svg/svg-icons'

const DesktopNav = () => {
  // const [background, setBackground] = useState(false);
  // const navRef = useRef()

  // navRef.current = background;
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY > 40
  //     if (navRef.current !== show) {
  //       setBackground(show)
  //     }
  //   }
  //   document.addEventListener("scroll", handleScroll)

  //   return () => {
  //     document.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  return (
    <Nav>
      <ul>
        <li><Link to="/">pricing</Link></li>
        <li><Link to="/">product</Link></li>
        <li><Link to="/">about us</Link></li>
        <li><Link to="/">careers</Link></li>
        <li><Link to="/">community</Link></li>
      </ul>
    </Nav>
  )
}

export default DesktopNav
