import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%);
  opacity: 1;
  visibility: visible;
  transform: ${({ openModal }) => openModal ? 'translateY(-100%)' : 'translateY(0)'};
  transition: visibility 0s linear 0s, opacity 0.3s 0s, transform 0.3s;
`
export const ModalContent = styled.div`
  width: 90%;
  background: #FAFAFA;
  border-radius: 3px;
  text-align: center;
  padding: 2.4rem 0;
  margin: 0 auto;
  position: relative;
  top: 100px;
  box-shadow: 0 6px 10px 1px rgba(0, 0, 0, 0.2);
  ul {
    li + li {
      margin-top: 1.4rem;
    }
    a {
      text-transform: capitalize;
      font-size: 14px;
      font-weight: 700;
      color: ${props => props.theme.darkBlue};
    }
  }
`