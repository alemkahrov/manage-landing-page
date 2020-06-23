import React, { useRef, useEffect, useState } from "react"
import { Container, Flex } from "../../styles/GlobalStyles"
import { HeaderNav, Burger } from "../../styles/HeaderStyles"
import DesktopNav from './DesktopNav'
import ModalNav from '../ModalNav'
import { Logo } from '../../svg/svg-icons'
import { Link } from "gatsby"

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const [background, setBackground] = useState(false);

  const navRef = useRef()

  navRef.current = background;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <HeaderNav background={background}>
      <Container>
        <Flex spaceBetween>
          <div className="site-logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <Burger openModal={openModal} onClick={() => setOpenModal(!openModal)}>
            <button>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Burger>
          <DesktopNav />
        </Flex>
        {openModal ? (
          <ModalNav openModal={openModal} />
        ) : null}
      </Container>
    </HeaderNav>
  )
}

export default Header
