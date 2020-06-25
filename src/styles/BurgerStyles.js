import styled from "styled-components"

const StyledBurger = styled.button`
 width: 1.8rem;
 height: 1.4rem;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 border: none;
 background: transparent;
 padding: 0;
 outline: none;
 span {
  width: 1.8rem;
  height: 4px;
  background: ${props => props.theme.darkBlue};
  background: ${({ showModal }) => showModal ? 'red' : 'black'};
  transform-origin: 1px;
  transition: opacity 0.3s, transform 0.3s linear;
  /* &:not(:last-child) {
   margin-bottom: 4px;
  } */
  &:nth-child(1) {
   transform: ${({ showModal }) => showModal ? 'rotate(45deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
   transform: ${({ showModal }) => showModal ? 'translateX(100%)' : 'translateX(0)'};
   opacity: ${({ showModal }) => showModal ? 0 : 1};
  }
  &:nth-child(3) {
   transform: ${({ showModal }) => showModal ? 'rotate(-45deg)' : 'rotate(0)'};
  }
 }
`