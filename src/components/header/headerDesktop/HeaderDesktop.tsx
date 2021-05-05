import './HeaderDesktop.css'
import HeaderImg from '../img/headerDesktop.jpg'
import { SocialMediaIcons } from "../../../components/socialMediaIcons/SocialMediaIcons"

export const HeaderDesktop = () => {
  return (
    <div className="header-desktop-body">
      <img src={HeaderImg} alt="Header image" className="header-desktop-img"></img>
      <div className="header-desktop-slogan">
        <h3>KUNSKAP, KÄRLEK, KOMMUNIKATION - För alla djur</h3>
      </div>
      <div className="header-desktop-social-media-icons-wrapper">
        <SocialMediaIcons />
      </div>
    </div >
  )
}
