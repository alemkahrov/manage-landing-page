import styled from 'styled-components'
import svgPattern from '../images/bg-tablet-pattern.svg'

// Intro Section
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
bottom: -50px;
right: -30%;
height: 260px;
z-index: -1;
 }
`

// Featured Section
export const HomeFeaturedSection = styled.section`
 position: relative;
 /* background-image: url(${svgPattern});
  background-size: contain;
  background-repeat: no-repeat; */
`
export const FeaturedList = styled.div`
 position: relative;
`
export const FeaturedItem = styled.div`
 margin-bottom: 40px;
 position: relative;
 &:last-child {
   margin-bottom: 0px;
 }
`
export const FeaturedTitle = styled.div`
 position: relative;
 display: flex;
 margin-bottom: 10px;
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
  z-index: -1;
  position: absolute;
  width: 100vw;
  left: 0;
  padding-left: 4rem;
 }
`
export const FeaturedText = styled.p`
 font-size: 13px;
 color: ${props => props.theme.textColor};
`

//Testimonial Section
export const HomeTestimonialSection = styled.section`
  padding: 40px 0;
  text-align: center;
  .quote-carousel {
    overflow: visible;
  }
  .quote-slide {
    background: ${props => props.theme.lightGray};
    color: ${props => props.theme.textColor};
    text-align: center;
    position: relative;
    padding: 0 20px 20px;
    margin: 30px 0 40px;
  }
  .avatar-image {
    position: relative;
    top: -30px;
    img {
      width: 60px;
      height: 60px;
    }
  }
  p.name {
    font-weight: 700;
    color: ${props => props.theme.darkBlue};
  }
  .swiper-wrapper {
    box-sizing: border-box;
  }
  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    .swiper-pagination-bullet {
      background: ${props => props.theme.paleRed};
      border: 1px solid ${props => props.theme.brightRed};
      opacity: 1;
      transition: background-color 0.3s ease;
      :hover {
        background: ${props => props.theme.brightRed};
      }
    }
    .swiper-pagination-bullet-active {
      background: ${props => props.theme.brightRed};
    }
  }
`