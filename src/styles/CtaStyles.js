import styled from 'styled-components'
import svgSimplifyMobile from '../images/bg-simplify-section-mobile.svg'

export const CtaSectionWrapper = styled.section`
 background: ${props => props.theme.brightRed};
 padding: 80px 0;
 text-align: center;
 position: relative;
 background-image: url(${svgSimplifyMobile});
 background-size: 25%;
 background-repeat: no-repeat;
 background-position: left center;
`
export const CtaTitle = styled.h1`
 font-size: 40px;
 font-weight: 700;
 line-height: 3.2rem;
 color: ${props => props.theme.lightGray};
`