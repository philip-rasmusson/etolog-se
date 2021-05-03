import './SocialMediaIcons.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '../../../node_modules/@fortawesome/free-brands-svg-icons'

export const SocialMediaIcons = () => {
  return (
    <>
      <a href="http://www.facebook.com/etolog.se" target="blank"><FontAwesomeIcon icon={faFacebook} className="links" /></a>
      <a href="http://www.instagram.com/etolog.se" target="blank"><FontAwesomeIcon icon={faInstagram} className="links" /></a>
      <a href="http://www.linkedin.com/company/etolog-se/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="links" /></a>
    </>
  )
}
