import React from "react"
import AboutPage from "../components/about/aboutPage"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const Tobyvision = () => {
  return (
    <Layout>
      <Seo
        title="Über uns - Alexander Gardemann & Tobiasz Smith"
        description="TobyVision ist spezialisiert auf die qualitativ hochwertige Produktion von Webvideos für Ihr Unternehmen."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutGrid></AboutGrid>
      <AboutExtra></AboutExtra>
    </Layout>
  )
}

export default Tobyvision
