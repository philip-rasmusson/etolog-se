import './FooterMobile.css'

import FooterData from "../data/FooterData"
import GlobalData from "../../../data/GlobalData"

import { SocialMediaIcons } from "../../socialMediaIcons/SocialMediaIcons"

export const FooterMobile = () => {
  return (
    <div className="footer-mobile-body">
      <div className="footer-mobile-container-left">
        <h1>{FooterData.headline}</h1>
        <p>
          {FooterData.paragraph01}
        </p><br />
        <p>
          {FooterData.paragraph02}
        </p>
      </div>
      <div className="footer-mobile-container-right">
        <h2 className="footer-mobile-container-right-boka">
          <a href={GlobalData.bokaLink} target="blank" id="footerBokaText">{FooterData.button}</a>

        </h2>
        <div className="footer-mobile-social-media-icons-wrapper">
          <SocialMediaIcons />
        </div>
        <p className="footer-mobile-copyright">{FooterData.copyright}</p>
      </div>
    </div>
  )
}

