import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Modal, ModalContent } from '../styles/ModalStyles'
// import { Container, Flex } from '../styles/GlobalStyles'
// import { Logo } from '../svg/svg-icons'


const ModalNav = () => {

 return (
  <Modal>
   <ModalContent>
    <ul>
     <li><Link to="/">pricing</Link></li>
     <li><Link to="/">product</Link></li>
     <li><Link to="/">about us</Link></li>
     <li><Link to="/">careers</Link></li>
     <li><Link to="/">community</Link></li>
    </ul>
   </ModalContent>
  </Modal>
 )
}

export default ModalNav
