import './HeaderMobile.css'
import HeaderMobileImg from '../img/headerMobile.jpg'

export const HeaderMobile = () => {
  return (
    <div className="header-mobile-body">
      <img src={HeaderMobileImg} alt="" className="header-mobile-mobile-img"></img>
      <div className="header-mobile-slogan">
        <h3>KUNSKAP, KÄRLEK, KOMMUNIKATION - För alla djur</h3>
      </div>

    </div>

  )
}

