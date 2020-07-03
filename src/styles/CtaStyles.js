import styled from 'styled-components'
import svgSimplifyMobile from '../images/bg-simplify-section-mobile.svg'
import svgSimplifyDesktop from '../images/bg-simplify-section-desktop.svg'

export const CtaSectionWrapper = styled.section`
 background: ${props => props.theme.brightRed};
 padding: 75px 0;
 text-align: center;
 position: relative;
 @media (min-width: 768px) {
  display: flex;
  align-items: center;
  padding: 60px 0;
 }
 @media (min-width: 1024px) {
  background-image: url(${svgSimplifyDesktop});
  background-repeat: no-repeat;
  background-position: -40% 100%;
 }
 @media (min-width: 1280px) {
  /* background-image: url(${svgSimplifyDesktop});
  background-repeat: no-repeat; */
  background-position: -120% 100%;
 }
 .svg {
  position: absolute;
 }
 .svg-mobile {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  @media (min-width: 1024px) {
   display: none;
  }
 }
`
export const CtaTitle = styled.h1`
 font-size: 40px;
 font-weight: 700;
 line-height: 3.2rem;
 color: ${props => props.theme.lightGray};
 @media (min-width: 768px) {
  text-align: left;
  width: 50%;
 }
`