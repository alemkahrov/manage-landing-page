import React from 'react'
import { Container, StyledLink } from '../styles/GlobalStyles'
import { HomeTestimonialSection } from '../styles/HomeStyles'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { svgDesktop } from '../svg/svg-icons'

import avatar1 from '../images/avatar/avatar-anisha.png'
// import avatar2 from '../images/avatar-ali.png'
// import avatar3 from '../images/avatar-richard.png'
// import avatar4 from '../images/avatar-shanai.png'
import { SectionTitleWrapper } from './SectionTitle'


const quotes = [
  {
    id: 1,
    client: "Anisha Li",
    quote: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
  },
  {
    id: 2,
    client: "Ali Bravo",
    quote: '“We have been able to cancel so many other subscriptions since using Manage.There is no more cross- channel confusion and everyone is much more focused.”'
  },
  {
    id: 3,
    client: "Richard Watts",
    quote: '“Manage allows us to provide structure and process. It keeps us organized and focused.I can’t stop recommending them to everyone I talk to!”'
  },
  {
    id: 4,
    client: "Shanai Gough",
    quote: '“Their software allows us to track, manage and collaborate on our projects from anywhere.It keeps the whole team in-sync without being intrusive.”'
  }
]

const QuoteCarouselConfigs = {
  containerClass: 'swiper-container quote-carousel',
  speed: 500,
  slidesPerView: 4,
  effect: 'slide',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
}

const QuoteCarousel = () => {
  return (
    <HomeTestimonialSection>
      <Container>
        <SectionTitleWrapper>
          What they’ve said
        </SectionTitleWrapper>
        <Swiper {...QuoteCarouselConfigs}>
          {quotes.map(quoteItem => (
            <div className="quote-slide" key={quoteItem.id}>
              <div className="avatar-image">
                <img src={avatar1} alt="" />
              </div>
              <div className="quote-details">
                <p className="name">{quoteItem.client}</p>
                <p>{quoteItem.quote}</p>
              </div>
            </div>
          ))}
          {/* <div className="quote-slide">
            <div className="slide-img">
              <img src={avatar4} alt="" />
            </div>
          </div> */}
        </Swiper>
        <StyledLink light mainButton>
          Get Started
        </StyledLink>
      </Container>
    </HomeTestimonialSection>
  )
}

export default QuoteCarousel
