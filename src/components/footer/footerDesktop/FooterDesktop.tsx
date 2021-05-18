import './FooterDesktop.css'

import FooterData from "../data/FooterData"
import GlobalData from "../../../data/GlobalData"

import { SocialMediaIcons } from "../../socialMediaIcons/SocialMediaIcons"


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
          <h2 className="footer-desktop-container-right-boka"> <a href={GlobalData.bokaLink} target="blank" id="footerBokaText">{FooterData.button}</a></h2>
          <div className="footer-desktop-social-media-icons-wrapper">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
      <p className="footer-desktop-copyright">{FooterData.copyright}</p>
    </div>
  )
}

