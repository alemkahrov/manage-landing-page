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
  transform-origin: 1px;
  transition: all 0.3s linear;
  /* &:not(:last-child) {
   margin-bottom: 4px;
  } */
  &:nth-child(1) {
   transform: ${({ isOpenModal }) => isOpenModal ? 'rotate(45deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
   transform: ${({ isOpenModal }) => isOpenModal ? 'translateX(100%)' : 'translateX(0)'};
   opacity: ${({ isOpenModal }) => isOpenModal ? 0 : 1};
  }
  &:nth-child(3) {
   transform: ${({ isOpenModal }) => isOpenModal ? 'rotate(-45deg)' : 'rotate(0)'};
  }
 }
`