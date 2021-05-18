import './SocialMediaIcons.css'

import GlobalData from "../../data/GlobalData"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '../../../node_modules/@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const SocialMediaIcons = () => {
  return (
    <>
      <a href="http://www.facebook.com/etolog.se" target="blank"><FontAwesomeIcon icon={faFacebook} className="links" /></a>
      <a href="http://www.instagram.com/etolog.se" target="blank"><FontAwesomeIcon icon={faInstagram} className="links" /></a>
      <a href="http://www.linkedin.com/company/etolog-se/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="links" /></a>
      <a href={GlobalData.infoMail}><FontAwesomeIcon icon={faEnvelope} className="links" /></a>
    </>
  )
}
