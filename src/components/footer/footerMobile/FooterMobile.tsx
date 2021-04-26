import './FooterMobile.css'
import FooterData from "../data/FooterData"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '../../../../node_modules/@fortawesome/free-brands-svg-icons'

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
        <h2 className="footer-mobile-container-right-boka">{FooterData.button}</h2>
        <div className="footer-mobile-container-right-social-media">
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
        <p className="footer-mobile-copyright">{FooterData.copyright}</p>
      </div>
    </div>
  )
}

