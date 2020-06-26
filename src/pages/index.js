import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeIntro from "../components/homePage/HomeIntro"
import HomeFeatured from "../components/homePage/HomeFeatured"
import Testimonial from '../components/Testimonial'
import Cta from "../components/Cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeIntro />
    <HomeFeatured />
    <Testimonial />
    <Cta />
  </Layout>
)

export default IndexPage