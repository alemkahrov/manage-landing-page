import styled from "styled-components"
import { breakpoints } from "./GlobalStyles"

export const HeaderNav = styled.header`  
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: ${({ background }) => background ? "1.4rem 0" : "2.2rem 0"};
  background: ${({ background }) => background ? "#fff" : ""};
  border-bottom: ${({ background }) => background ? "2px solid orange" : ""};
  box-shadow: ${({ background }) => background ? "0px 5px 10px rgba(0,0,0,0.15)" : ""};
  transition: all 0.3s ease;
  .site-logo {
    a {
      display: flex;
      height: 1.2rem;
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

export const Burger = styled.div`
display: flex;
align-items: center;

 @media ${breakpoints.md} {
  display: none;
 }
 button {
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  background: transparent;
  padding: 0;
  outline: none;
  span {
    width: 2rem;
    height: 0.25rem;
    transform-origin: 1px;
    background: ${props => props.theme.darkBlue};
    margin-bottom: 3px;
    :first-child {
      transform: ${({ openModal }) => openModal ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ openModal }) => openModal ? '0' : '1'};
      transform: ${({ openModal }) => openModal ? 'translateX(100%)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ openModal }) => openModal ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
 }
`

