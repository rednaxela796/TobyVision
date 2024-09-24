import React from "react"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"
import Seo from "../components/seo"

import image from "../images/holographic-background.webp"

const Kontakt = () => {
  return (
    <Layout>
      <Seo
        title="Kontakt - TobyVision"
        description="TobyVision ist spezialisiert auf die qualitativ hochwertige Produktion von Webvideos für Ihr Unternehmen"
      ></Seo>

      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <Fade duration={1200}>
          <div className="bg-dp opacity-70 p-10 rounded-xl w-3/4 m-5 w-auto">
            <h1 className="text-3xl text-white">KONTAKT</h1>
            <h2 className=" text-black text-gradient bg-gradient-to-r from-pink to-purple text-4xl font-bold mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
              TobyVision
            </h2>
            <p className="text-lg mt-2 opacity-70 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Kontaktieren Sie uns für Ihr persönliches Angebot:
            </p>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-ful mt-10">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold underline decoration-pink">
                        Phone
                      </p>
                      <p className="text-neutral-500 mb-2">
                        <a href="tel:+4917670067578">0176 - 7006 7578</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.659,3.681H8.468c-0.211,0-0.383,0.172-0.383,0.383v2.681H2.341c-0.21,0-0.383,0.172-0.383,0.383v6.126c0,0.211,0.172,0.383,0.383,0.383h1.532v2.298c0,0.566,0.554,0.368,0.653,0.27l2.569-2.567h4.437c0.21,0,0.383-0.172,0.383-0.383v-2.681h1.013l2.546,2.567c0.242,0.249,0.652,0.065,0.652-0.27v-2.298h1.533c0.211,0,0.383-0.172,0.383-0.382V4.063C18.042,3.853,17.87,3.681,17.659,3.681 M11.148,12.87H6.937c-0.102,0-0.199,0.04-0.27,0.113l-2.028,2.025v-1.756c0-0.211-0.172-0.383-0.383-0.383H2.724V7.51h5.361v2.68c0,0.21,0.172,0.382,0.383,0.382h2.68V12.87z M17.276,9.807h-1.533c-0.211,0-0.383,0.172-0.383,0.383v1.755L13.356,9.92c-0.07-0.073-0.169-0.113-0.27-0.113H8.851v-5.36h8.425V9.807z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold underline decoration-pink">
                        Email
                      </p>
                      <p className="text-neutral-500 mb-2">
                        <a href="mailto:kontakt@tobyvision.de">
                          kontakt@tobyvision.de
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold underline decoration-pink">
                        Standort
                      </p>
                      <p className="text-neutral-500 mb-2">Köln/Bonn und Umgebung</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <form className="mt-5" name="contact" method="POST" netlify>
              <div className="flex xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <label>
                    <Input
                      placeholder="Name"
                      type="text"
                      name="name"
                    ></Input>
                  </label>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <label>
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                    ></Input>
                  </label>
                </div>
              </div>

              <div className="flex mt-5 xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <label>
                    <Input
                      placeholder="Firma"
                      type="company"
                      name="company"
                    ></Input>
                  </label>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <label>
                    {" "}
                    <Input
                      placeholder="Tel."
                      type="phone"
                      name="phone"
                    ></Input>
                  </label>
                </div>
              </div>
              <label>
                <textarea
                  className="mt-5 w-full bg-bg bg-opacity-20 rounded-xl p-5 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                  rows="5"
                  placeholder="Bitte geben Sie uns ein paar Informationen zu Ihrem Projekt"
                  type="text"
                  name="Message"
                ></textarea>
              </label>
              <div>
                <label>
                  <Button
                    type="submit"
                    title="Nachricht Senden"
                    colorClass="bg-gradient-to-r from-pink to-purple font-montserrat"
                    marginClass="mt-5"
                  ></Button>
                </label>
              </div>
            </form>
          </div>
        </Fade>
        <Fade bottom cascade>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
            <img
              className="object-cover h-full w-full"
              src={image}
              alt="HeroImage"
            ></img>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default Kontakt
