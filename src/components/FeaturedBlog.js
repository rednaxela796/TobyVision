import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade bottom cascade>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            MEHR VON UNS
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            INFOS
          </h3>
          <div
              className="blog-hover bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-simibold mb-2">
              Hinter den Kulissen /Unser Prozess
            </h2>
            <p className="text-lg  text-black opacity-60 mb-6">
              Unser Videoproduktionsprozess besteht aus drei wesentlichen Phasen:
              Vorproduktion, Produktion und Postproduktion. Jede Phase ist darauf
              ausgerichtet, sicherzustellen, dass wir Ihre Vision so umsetzen, wie
              Sie es sich vorstellen, und dabei höchste Qualität liefern.
            </p>
            <a
                href="/blog/hinter-den-kulissen"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple  hover:bg-purple"
            >
              Weiter Lesen
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
          <div
              className="blog-hover bg-white rounded-lg p-8 md:p-12">
            <h2 className="text-black text-3xl font-simibold mb-2">
              Häufig gestellte Fragen (FAQ)
            </h2>
            <p className="text-lg  text-black opacity-60 mb-6">
              Hier finden Sie antworten auf viele Häufig gestellte Fragen.
            </p>
            <a
                href="/blog/faq"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple  hover:bg-purple"
            >
              FAQ
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
    </Fade>
  )
}

export default FeaturedBlog
