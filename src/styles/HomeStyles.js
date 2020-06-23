import styled from 'styled-components'

// INTRO SECTION
export const IntroWrapper = styled.section`
 position: relative;
 min-height: 100vh;
 margin: 100px 0 60px;
`
export const ImageWrapper = styled.div`
 img {
  width: 100%;
 }
`
export const IntroTextWrapper = styled.div`
 text-align: center;
`
export const IntroTitle = styled.h1`
 font-size: 40px;
 font-weight: 700;
 line-height: 3.2rem;
 margin-bottom: 5px;
 color: ${props => props.theme.darkBlue};
`
export const IntroSubTitle = styled.p`
 font-size: 16px;
 font-weight: 400;
 line-height: 1.8rem;
 letter-spacing: 0.5px;
`
export const IntroSVG = styled.div`
 img {
  position: absolute;
  bottom: -65px;
  right: -32%;
  height: 250px;
  z-index: -1;
 }
`

// Featured Section
export const HomeFeaturedSection = styled.section`
 position: relative;
`
export const FeaturedList = styled.div`
 position: relative;
`
export const FeaturedItem = styled.div`
 margin-bottom: 40px;
 position: relative;
`
export const FeaturedTitle = styled.div`
 position: relative;
 display: flex;
 margin-bottom: 16px;
 span, h3 {
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  font-weight: 700;
  font-size: 13px;
 }
 span {
  background: ${props => props.theme.brightRed};
  color: ${props => props.theme.lightGray};
 }
 h3 {
  background: ${props => props.theme.paleRed};
  color: ${props => props.theme.darkBlue};
  margin-left: -2rem;
  z-index: -1;
  position: absolute;
  width: 100%;
  left: 10%;
  padding-left: 4rem;
 }
`
export const FeaturedText = styled.p`
 font-size: 13px;
 color: ${props => props.theme.textColor};
`
