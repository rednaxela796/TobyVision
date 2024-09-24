import React from "react"
import Galerie from "../components/galerie-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GaleriePage = () => {
  return (
    <Layout>
      <Seo
        title="Holo - Galerie"
        description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
      ></Seo>
      <Galerie></Galerie>
    </Layout>
  )
}

export default GaleriePage
