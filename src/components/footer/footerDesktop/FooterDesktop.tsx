import './FooterDesktop.css'
import FooterData from "../data/FooterData"

import { SocialMediaIcons } from "../../socialMediaIcons/SocialMediaIcons"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '../../../../node_modules/@fortawesome/free-brands-svg-icons'

export const FooterDesktop = () => {
  return (
    <div className="footer-desktop-body">
      <div className="footer-desktop-container">
        <div className="footer-desktop-container-left">
          <h1>{FooterData.headline}</h1>
          <p>
            {FooterData.paragraph01}
            <br />
            <br />
            {FooterData.paragraph02}
          </p>
        </div>
        <div className="footer-desktop-container-right">
          <h2 className="footer-desktop-container-right-boka"> <a href="https://provetcloud.com/1491/onlinebooking/?lang=sv" target="blank" id="footerBokaText">{FooterData.button}</a></h2>
          <div className="footer-desktop-social-media-icons-wrapper">
            <SocialMediaIcons />
          </div>

          {/* <div className="footer-desktop-container-right-social-media">
            <div>
              <a href="http://www.facebook.com/etolog.se" target="blank"><FontAwesomeIcon icon={faFacebook} className="links" /></a>
            </div>
            <div>
              <a href="http://www.instagram.com/etolog.se" target="blank"><FontAwesomeIcon icon={faInstagram} className="links" /></a>
            </div>
            <div>
              <a href="http://www.linkedin.com/company/etolog-se/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="links" /></a>
            </div>
          </div> */}
        </div>
      </div>
      <p className="footer-desktop-copyright">{FooterData.copyright}</p>
    </div>
  )
}

