import './HeaderDesktop.css'
import HeaderImg from '../img/headerDesktop.jpg'
import { SocialMediaIcons } from "../../../components/socialMediaIcons/SocialMediaIcons"

export const HeaderDesktop = (props: { slogan?: string, headerImg?: any }) => {
  return (
    <div className="header-desktop-body">
      <img src={props.headerImg} alt="Header image" className="header-desktop-img"></img>
      <div className="header-desktop-slogan">
        <h3>{props.slogan}</h3>
      </div>
      <div className="header-desktop-social-media-icons-wrapper">
        <SocialMediaIcons />
      </div>
    </div >
  )
}
