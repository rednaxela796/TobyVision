import React from "react"
import ImpressumPage from "../components/impressum/impressumPage"

import Seo from "../components/seo"

import Layout from "../components/layout"
import ImpressumExtra from "../components/impressum/impressumExtra"
import ImpressumHeader from "../components/impressum/impressumHeader"

const Impressum = () => {
  return (
    <Layout>
      <Seo
        title="Impressum- TobyVision Alexander Gardemann & Tobiasz Smith GbR"
        description="TobyVision ist spezialisiert auf die qualitativ hochwertige Produktion von Webvideos für Ihr Unternehmen."
      ></Seo>
      <ImpressumPage></ImpressumPage>
    </Layout>
  )
}

export default Impressum
