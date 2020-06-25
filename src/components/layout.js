import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"

//import components
import Header from "./navigation/Header"
import Footer from "../components/Footer"
import svgPattern from '../images/bg-tablet-pattern.svg'

const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body {
    font-family: 'Be Vietnam', sans-serif;
    background: ${props => props.theme.lightGray};
    color: ${props => props.theme.textColor};
    overscroll-behavior: none;
    overflow-x: hidden;
    background-image: url(${svgPattern});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 70px -38px;
    position: relative;
  }

  h1, h2, h3, h4, h5, p {
    padding: 0;
    margin: 0;
    font-family: 'Be Vietnam', sans-serif;
  }

  p {
  font-size: 13px;
  line-height: 23px;
 }

 ul {
   margin: 0;
   padding: 0;
 }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = {
    brightRed: '#F25F3A',
    darkBlue: '#242D52',
    textColor: '#9095A7',
    veryDarkBlue: '#1D1E25',
    paleRed: '#FFEFEB',
    lightGray: '#FAFAFA',
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
