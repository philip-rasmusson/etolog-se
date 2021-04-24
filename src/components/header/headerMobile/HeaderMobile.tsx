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

  )
}

