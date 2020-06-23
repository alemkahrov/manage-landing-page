import styled from 'styled-components'

export const CtaSectionWrapper = styled.section`
 background: ${props => props.theme.brightRed};
 padding: 80px 0;
 text-align: center;
 position: relative;
`
export const CtaTitle = styled.h1`
 font-size: 40px;
 font-weight: 700;
 line-height: 3.2rem;
 color: ${props => props.theme.lightGray};
`
export const CtaSvgMobil = styled.div`
 img {
  position: absolute;
  left: -80%;
  
 }
`