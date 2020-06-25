// import React, { useState } from 'react'

// import { SectionTitleWrapper } from '../components/SectionTitle'
// import { Container, ButtonWrapper } from '../styles/GlobalStyles'
// import styled from 'styled-components'

// const quotes = {
//  0: {
//   img: "",
//   client: "Anisha Li",
//   quote: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
//  },
//  1: {
//   img: "",
//   client: "Ali Bravo",
//   quote: '“We have been able to cancel so many other subscriptions since using Manage.There is no more cross- channel confusion and everyone is much more focused.”'
//  },
//  2: {
//   img: "",
//   client: "Richard Watts",
//   quote: '“Manage allows us to provide structure and process. It keeps us organized and focused.I can’t stop recommending them to everyone I talk to!”'
//  },
//  3: {
//   img: "../images/avatar-shanai.png",
//   client: "Shanai Gough",
//   quote: '“Their software allows us to track, manage and collaborate on our projects from anywhere.It keeps the whole team in-sync without being intrusive.”'
//  }
// }

// const Testimonial = () => {
//  const [current, setCurrent] = useState(quotes[0])
//  const [active, setActive] = useState(0)

//  const handleSetClick = (event) => {
//   setCurrent(quotes[event.target.getAttribute("data-quote")])
//  }

//  return (
//   <TestimonialWrapper>
//    <Container>
//     <SectionTitleWrapper>
//      What they’ve said
//     </SectionTitleWrapper>
//     <img src={current.img} alt="" />
//     <p className="name">{current.client}</p>
//     <p>{current.quote}</p>
//     <div className="nav-circles">
//      {Object.keys(quotes).map(index => (
//       <span
//        onClick={event => handleSetClick(event)}
//        data-quote={index}
//        key={index}
//       />
//      ))}
//     </div>
//     <ButtonWrapper>Get Started</ButtonWrapper>
//    </Container>
//   </TestimonialWrapper>
//  )
// }

// const TestimonialWrapper = styled.div`
//  text-align: center;
//  padding: 40px 0;
//  max-width: 600px;
//  margin: 0 auto;
//  .name {
//   font-weight: 700;
//   color: ${props => props.theme.darkBlue};
//  }
//  .nav-circles {
//   display: flex;
//   justify-content: center;
//   span {
//    height: 20px;
//    width: 20px;
//    margin: 0 3px;
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    cursor: pointer;
//    &::before {
//     content: '';
//     width: 6px;
//     height: 6px;
//     border: 1px solid ${props => props.theme.brightRed};
//     border-radius: 100%;
//     transition: background-color 0.3s ease;
//    }
//    &:hover::before {
//     background: ${props => props.theme.brightRed};
//    }
//    &[data-quote="${active}"]::before {
//     background: ${props => props.theme.brightRed};
//    }
//   }
//  }
// `

// export default Testimonial
