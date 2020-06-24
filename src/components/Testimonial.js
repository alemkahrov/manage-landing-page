import React from 'react'
import { TestimonialWrapper } from '../styles/TestimonialStyles'

const quotes = [
 {
  id: 1,
  img: "",
  client: "Anisha Li",
  quote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
 },
 {
  id: 2,
  img: "",
  client: "Ali Bravo",
  quote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
 },
 {
  id: 3,
  img: "",
  client: "Richard Wattson",
  quote: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
 }
]

const Testimonial = () => {
 return (
  <TestimonialWrapper>
   <h1>Testimonial Component</h1>
  </TestimonialWrapper>
 )
}

export default Testimonial
