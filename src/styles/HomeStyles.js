import styled from 'styled-components'
import svgPattern from '../images/bg-tablet-pattern.svg'

// Intro Section
export const IntroWrapper = styled.section`
  position: relative;
  min-height: 80vh;
  margin: 90px 0 0;
  background-image: url(${svgPattern});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 210% 100%;
  padding-bottom: 70px;
  @media (min-width: 415px) {
    background-image: none;
  }
  @media (min-width: 768px) {
    padding-top: 70px;
  }
`
export const ImageWrapper = styled.div`
@media (min-width: 768px) {
  width: 52%;
}
 img {
  width: 100%;
 }
`
export const IntroWrapperInner = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`
export const IntroTextWrapper = styled.div`
 text-align: center;
 @media (min-width: 768px) {
   text-align: left;
   width: 45%;
 }
 @media (min-width: 1024px) {
   width: 40%;
 }
`
export const IntroTitle = styled.h1`
 font-size: 38px;
 font-weight: 700;
 line-height: 3.2rem;
 margin-bottom: 15px;
 color: ${props => props.theme.darkBlue};
 @media (min-width: 1024px) {
   font-size: 46px;
 }
`
export const IntroSubTitle = styled.p`
 font-size: 16px;
 font-weight: 400;
 line-height: 1.8rem;
 letter-spacing: 0.5px;
 @media (min-width: 1024px) {
   font-size: 18px;
 }
`

// Featured Section
export const HomeFeaturedSection = styled.section`
 position: relative;
 .svg-pattern {
   position: absolute;
   display: none;
   @media (min-width: 1024px) {  
      bottom: -70%;
      left: -40%;
      display: block;
      z-index: -1;
   }
 }
`
export const HomeFeaturedInner = styled.div`
  .section-title-wrapper {
    text-align: center;
    width: 80vw;
    margin: 0 auto 50px auto;
    @media (min-width: 768px) {
      width: 45%;
      text-align: left;
      margin: 0 0 50px 0;
    }
    h2 {
      font-size: 28px;
      line-height: 35px;
      max-width: 240px;
      margin-bottom: 15px;
      margin: 0 auto 15px auto;
      color: ${props => props.theme.darkBlue};
      @media (min-width: 768px) {
        max-width: 360px;
        margin: 0 0 15px;
      }
      @media (min-width: 1024px) {
        font-size: 34px;
        max-width: 390px;
      }
    }
    p.subtitle {
        @media (min-width: 768px) {
          max-width: 330px;
        }
      }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
export const FeaturedList = styled.div`
 position: relative;
 @media (min-width: 768px) {
   width: 50%;
 }
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
  font-size: 14px;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
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
  padding-left: 4.5rem;
  @media (min-width: 768px) {
    background: none;
  }
 }
`
export const FeaturedText = styled.p`
 color: ${props => props.theme.textColor};
 @media (min-width: 768px) {
   padding-left: 4.5rem;
 }
`

//Testimonial Section
export const HomeTestimonialSection = styled.section`
  padding: 60px 0;
  text-align: center;
  @media (min-width: 768px) {
    padding: 100px 0;
  }
  
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