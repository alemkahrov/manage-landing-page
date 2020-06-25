import styled from "styled-components"
import { breakpoints } from "./GlobalStyles"

export const HeaderNav = styled.header`  
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: ${({ background }) => background ? "1.4rem 0" : "2.2rem 0"};
  background: ${({ background }) => background ? "#fff" : ""};
  border-bottom: ${({ background }) => background ? "2px solid orange" : ""};
  box-shadow: ${({ background }) => background ? "0px 5px 10px rgba(0,0,0,0.15)" : ""};
  transition: all 0.3s ease;
  .site-logo {
    a {
      display: flex;
      height: 1rem;
    }
  }
`

export const Nav = styled.nav`
display: none;
  @media ${breakpoints.md} {
    display: flex;
    align-self: flex-start;
    ul {
      display: flex;
      align-items: center;
      padding: 0;
      li {
        a {

        }
      }
    }
  }
`

export const StyledBurger = styled.div`
display: flex;
z-index: 20;
position: relative;
 @media ${breakpoints.md} {
  display: none;
 }
 button {
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: none;
  background: transparent;
  padding: 0;
  outline: thin-dotted;
  span {
    width: 25px;
    height: 3px;
    transform-origin: 2px;
    background: ${props => props.theme.darkBlue};
    transition: opacity 0.3s, transform 0.3s;
    :first-child {
      transform: ${({ showModal }) => showModal ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ showModal }) => showModal ? '0' : '1'};
      transform: ${({ showModal }) => showModal ? 'translateX(100%)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ showModal }) => showModal ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
 }
`

