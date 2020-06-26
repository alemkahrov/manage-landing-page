import React from 'react'
import { HomeTestimonialSection } from '../styles/HomeStyles'
import { Container } from '../styles/GlobalStyles'
import { SliderWrapper } from '../styles/SliderStyles'

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
  },
]

const TestimonialCarousel = () => {
  let sliderArr = [1, 2, 3, 4]
  return (
    <HomeTestimonialSection>>
      <Container>
        <SliderWrapper>
          {sliderArr.map((item, index) => {
            return (
              <div className="slide" key={index}>
                {item}
              </div>
            )
          })
          }
        </SliderWrapper>
      </Container>
    </HomeTestimonialSection>
  )
}

export default TestimonialCarousel
