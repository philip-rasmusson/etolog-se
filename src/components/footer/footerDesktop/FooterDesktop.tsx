import './FooterDesktop.css'
import FooterData from "../data/FooterData"


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
          <h2 className="footer-desktop-container-right-boka">{FooterData.button}</h2>
          <div className="footer-desktop-container-right-social-media">
            <div>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
      </div>
      <p className="footer-desktop-copyright">{FooterData.copyright}</p>
    </div>
  )
}

