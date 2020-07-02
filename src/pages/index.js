import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeIntro from "../components/homePage/HomeIntro"
import HomeFeatured from "../components/homePage/HomeFeatured"
import QuoteCarousel from '../components/QuoteCarousel'
import Cta from "../components/Cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeIntro />
    <HomeFeatured />
    <QuoteCarousel />
    <Cta />
  </Layout>
)

export default IndexPage