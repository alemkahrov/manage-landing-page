import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { Nav } from "../../styles/HeaderStyles"

const DesktopNav = () => {

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
