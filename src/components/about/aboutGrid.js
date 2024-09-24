import React from "react"
import AboutTeamCard from "./aboutTeamCard"
import TobyImage from "../../images/TobyImage.webp"
import AlexImage from "../../images/TobyImage.webp"


const AboutGrid = () => {
  return (
      <div >
          <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
              <AboutTeamCard
                  imgSrc={TobyImage}
                  position="Tobiasz Smith"
              ></AboutTeamCard>
              <AboutTeamCard
                  imgSrc={AlexImage}
                  position="Alexander Gardemann"
              ></AboutTeamCard>
          </div>

      </div>

  )
}

export default AboutGrid
