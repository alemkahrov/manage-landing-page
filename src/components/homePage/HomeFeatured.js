import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { Container, Flex } from '../../styles/GlobalStyles'
import { HomeFeaturedSection, HomeFeaturedInner, FeaturedList, FeaturedItem, FeaturedTitle, FeaturedText } from "../../styles/HomeStyles"
import { SectionTitleWrapper } from '../../components/SectionTitle'

const featuredItems = [
  {
    id: 1,
    badge: "01",
    title: "Track company-wide progress",
    text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
  },
  {
    id: 2,
    badge: "02",
    title: "Track company-wide progress",
    text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
  },
  {
    id: 3,
    badge: "03",
    title: "Track company-wide progress",
    text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
  }
]

const HomeFeatured = () => {
  return (
    <HomeFeaturedSection>
      <div className="svg-pattern">
        <svg xmlns="http://www.w3.org/2000/svg" width="814" height="814"><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" fillRule="evenodd" rx="218" transform="rotate(45 718.814 -291.157)" /></svg>
      </div>
      <Container>
        <HomeFeaturedInner>
          <div className="section-title-wrapper">
            <h2>What’s different about Manage?</h2>
            <p className="subtitle">Manage provides all the functionality your team needs, without
            the complexity. Our software is tailor-made for modern digital
            product teams.
            </p>
          </div>
          <FeaturedList>
            {featuredItems.map(item => (
              <FeaturedItem key={item.id}>
                <FeaturedTitle>
                  <span>{item.badge}</span>
                  <h3>{item.title}</h3>
                </FeaturedTitle>
                <FeaturedText>
                  {item.text}
                </FeaturedText>
              </FeaturedItem>
            ))}
          </FeaturedList>
        </HomeFeaturedInner>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured
