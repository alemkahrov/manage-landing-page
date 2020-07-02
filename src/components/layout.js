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
    background: #fff;
    color: ${props => props.theme.textColor};
    overscroll-behavior: none;
    overflow-x: hidden;
    background-image: url(${svgPattern});
    background-size: 125%;
    background-repeat: no-repeat;
    background-position: 56px -70px;
    position: relative;
    @media (min-width: 768px) {
      background-position: 500px -30px;
      background-size: 60%;
    }
    @media (min-width: 1024px) {
      background-position: 572px -195px;
      background-size: 65%;
    }
    @media (min-width: 1399px) {
      background-position: 775px -258px;
      background-size: 60%;
    }
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
    white: '#fff',
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
