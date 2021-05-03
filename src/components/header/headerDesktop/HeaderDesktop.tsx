import './HeaderDesktop.css'
import HeaderImg from '../img/headerDesktop.jpg'
import { SocialMediaIcons } from "../../../components/socialMediaIcons/SocialMediaIcons"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faFacebook,
//   faInstagram,
//   faLinkedin,
// } from '../../../../node_modules/@fortawesome/free-brands-svg-icons'


export const HeaderDesktop = () => {
  return (
    <div className="header-desktop-body">
      <img src={HeaderImg} alt="" className="header-desktop-img"></img>
      <div className="header-desktop-slogan">
        <h3>KUNSKAP, KÄRLEK, KOMMUNIKATION - För alla djur</h3>
      </div>
      <div className="header-desktop-social-media-icons-wrapper">
        <SocialMediaIcons />
      </div>
      {/* <div className="header-desktop-social-media">
        <div>
          <a href="http://www.facebook.com/etolog.se" target="blank"><FontAwesomeIcon icon={faFacebook} className="links" /></a>
        </div>
        <div>
          <a href="http://www.instagram.com/etolog.se" target="blank"><FontAwesomeIcon icon={faInstagram} className="links" /></a>
        </div>
        <div>
          <a href="http://www.linkedin.com/company/etolog-se/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="links" /></a>
        </div> */}
      {/* </div> */}
    </div >
  )
}
