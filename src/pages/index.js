import * as React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>

   <HeroSection/>

  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
