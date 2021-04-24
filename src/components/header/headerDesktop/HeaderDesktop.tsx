import './HeaderDesktop.css'
import HeaderImg from '../img/headerDesktop.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '../../../../node_modules/@fortawesome/free-brands-svg-icons'


export const HeaderDesktop = () => {
  return (
    <div className="header-desktop-body">
      <img src={HeaderImg} alt="" className="header-desktop-img"></img>
      <div className="header-desktop-slogan">
        <h3>KUNSKAP, KÄRLEK, KOMMUNIKATION - För alla djur</h3>
      </div>
      <div className="header-desktop-social-media">
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
