import { Link } from "gatsby"
import React from "react"

import logo from "../images/tvSmall.webp"
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
      <Fade bottom cascade>
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <img className="max-h-28 max-w-xs" src={logo} alt="Holo"></img>
              <p className="text-black opacity-70 text-sm mt-5 ">
                <br></br>
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. TobyVision Alexander Gardemann & Tobiasz Smith GbR
                </span>
              </p>
              <div className="text-black font-bold block-inline">
                <p>
                  <a className="text-black font-bold block-inline" href="https://instagram.com/tobyvision">

                    <img
                        className="w-5 h-5 mt-1"
                        src="/img/Instagram-Logo.png"
                        alt="GitHub"
                    ></img>
                  </a>
                </p>
{/*                <p>
                  <a className="text-black font-bold block-inline" href="https://instagram.com/tobyvision">

                    <img
                        className="w-5 h-5 mt-1"
                        src="/img/Mail-Logo.png"
                        alt="GitHub"
                    ></img>
                  </a>
                </p>*/}
              </div>
            </div>

            <div className="place-self-end self-center lg:block">
              <ul className="text-xl font-montserrat font-medium">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/tobyvision">Über uns</Link>
                </li>
                <li>
                  <Link to="/galerie">Projekte</Link>
                </li>{" "}
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
                <li>
                  <Link to="/impressum">Impressum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      </Fade>
  )
}

export default Footer
