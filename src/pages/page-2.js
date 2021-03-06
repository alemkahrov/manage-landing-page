import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuoteCarousel from '../components/QuoteCarousel'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <QuoteCarousel />
  </Layout>
)

export default SecondPage
