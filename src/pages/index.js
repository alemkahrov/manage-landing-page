import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeIntro from "../components/homePage/HomeIntro"
import HomeFeatured from "../components/homePage/HomeFeatured"
import Cta from "../components/Cta"
import Testimonial from "../components/Testimonial"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeIntro />
    <HomeFeatured />
    <Cta />
    {/* <Testimonial /> */}
  </Layout>
)

export default IndexPage