import React from "react"
import Fade from "react-reveal/Fade"
import TextCycle from "./Cycle";
import { TextLoop } from "easy-react-text-loop";

import hero from "../../images/tv.webp"
const items = ['Professionel', 'Zuverlässig', 'Competent', 'Einwandfrei']; // Required
const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 gap-10 lg:flex lg:flex-row flex-col-reverse justify-between">
          <div className="align-text-top lg:text-left flex flex-col justify-center">
            <h1 className="text-black text-4xl font-semibold opacity-70 ml-1.5">
              Ihr Film
            </h1>

            <TextLoop>
              <span><h2 className="mb-20 text-black text-gradient bg-gradient-to-r from-pink to-purple text-6xl font-bold xxs:text-4xl xs:text-5xl sm:text-5xl lg:text-6xl">
              Professionel
            </h2></span>
              <span><h2 className="mb-20 text-black text-gradient bg-gradient-to-r from-pink to-purple text-6xl font-bold xxs:text-4xl xs:text-5xl sm:text-5xl lg:text-6xl">
                Zuverlässig
            </h2></span>
              <span><h2 className="mb-20 text-black text-gradient bg-gradient-to-r from-pink to-purple text-6xl font-bold xxs:text-4xl xs:text-5xl sm:text-5xl lg:text-6xl">
              Competent
            </h2></span>
              <span>
                <h2 className="mb-20 text-black text-gradient bg-gradient-to-r from-pink to-purple text-6xl font-bold xxs:text-4xl xs:text-5xl sm:text-5xl lg:text-6xl">
              Einwandfrei
            </h2>
              </span>
            </TextLoop>



            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">

            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md mt-20 ml-1.5">
                <a
                  href="/kontakt"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple  hover:bg-transparent md:text-lg md:px-10 "
                >
                  Ihr Projekt Starten
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 flex flex-end lg:justify-end">
            <img
              className="rounded-xl w-auto h-full object-cover flex flex-end justify-center"
              src={hero}
              alt=""
            ></img>
          </div>

        </div>
        <div className="blog-hover bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
          <h2 className="text-black text-3xl font-simibold mb-2">
            Ihre Vision in Perfektion: Wählen Sie Uns für Ihren Erfolg
          </h2>
          <p className="text-lg  text-black opacity-60 mb-6">
            Mit modernster Technik und einem kreativen Team verwandeln wir Ihre Ideen in beeindruckende Videos, die Ihr Publikum begeistern. Vertrauen Sie auf unsere Erfahrung und Leidenschaft, um Ihre Botschaft wirkungsvoll und professionell zu vermittel.
          </p>
          <a
              href="/about"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple  hover:bg-purple"
          >
            Über uns
            <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
            >
              <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </Fade>
  )
}

export default Header
