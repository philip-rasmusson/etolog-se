import './HeaderMobile.css'
import HeaderMobileImg from '../img/headerMobile.jpg'

export const HeaderMobile = (props: { slogan?: string, headerImg?: any }) => {
  return (
    <div className="header-mobile-body">
      <img src={props.headerImg} alt="Header image" className="header-mobile-img"></img>
      <div className="header-mobile-slogan">
        <h3>{props.slogan}</h3>
      </div>

    </div>

  )
}

