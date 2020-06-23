import styled from 'styled-components'

export const FooterWrapper = styled.footer`
 background: ${props => props.theme.veryDarkBlue};
 padding: 50px 0 30px;
`

export const Form = styled.form`
 
 input, button {
  border-radius: 50px;
  border: none;
  padding: 0.8rem 1.4rem;
  font-size: 13px;
 }
 input {
  background: ${props => props.theme.lightGray};
  width: 60%;
  &::placeholder {
   color: ${props => props.theme.textColor};
  }
 }
 button {
  background: ${props => props.theme.brightRed};
  color: ${props => props.theme.lightGray};
  width: 23%;
  font-weight: 700;
 }
`

export const NavList = styled.div`
 width: 70vw;
 margin: 50px auto;
 ul {
  padding: 0;
  margin: 0;
  li {
   margin-bottom: 1rem;
   &:last-child {
    margin-bottom: 0;
   }
   a {
    color: ${props => props.theme.lightGray};
    text-transform: capitalize;
    font-size: 13px;
   }
  }
 }
`
export const FooterSocial = styled.div`
display: flex;
justify-content: space-around;
 a {
  display: block;
  width: 32px;
  height: 32px;
  svg {
   width: 100%;
   height: 100%;
   color: ${props => props.theme.lightGray};
  }
 }
`

export const FooterLogo = styled.div`
 text-align: center;
 margin-top: 50px;
 svg  {
  path.manage {
   fill: ${props => props.theme.lightGray};
  }
 }
`

export const Copyright = styled.p`
margin-top: 50px;
 text-align: center;
 p {
  font-size: 10px;
  color: ${props => props.theme.lightGray};
  opacity: 0.5;
 }
`
