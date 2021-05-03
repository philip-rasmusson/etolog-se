import './HeaderMobile.css'
import HeaderMobileImg from '../img/headerMobile.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '../../../../node_modules/@fortawesome/free-brands-svg-icons'

export const HeaderMobile = () => {
  return (
    <div className="header-mobile-body">
      <img src={HeaderMobileImg} alt="" className="header-mobile-mobile-img"></img>
      <div className="header-mobile-slogan">
        <h3>KUNSKAP, KÄRLEK, KOMMUNIKATION - För alla djur</h3>
      </div>
      <div className="header-mobile-social-media">
        <div>
          <a href="http://www.facebook.com/etolog.se" target="blank"><FontAwesomeIcon icon={faFacebook} className="links" /></a>
        </div>
        <div>
          <a href="http://www.instagram.com/etolog.se" target="blank"><FontAwesomeIcon icon={faInstagram} className="links" /></a>
        </div>
        <div>
          <a href="http://www.linkedin.com/company/etolog-se/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="links" /></a>
        </div>
      </div>
    </div>

  )
}

