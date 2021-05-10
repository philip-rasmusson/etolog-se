import './EtologBoxMobile.css'
import EtologBoxData from '../data/EtologBoxData'

import { imgEtologer } from "../../../data/imgEtologer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faStar,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons'

export const EtologBoxMobile = (props: { id?: number, name?: string, img?: any, description?: string, email?: string, homepage?: string, city?: string, star?: boolean }) => {
  return props.star
    ? (
      <div className="etolog-mobile-box font-grey">
        <div className="etolog-mobile-box-star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="etolog-mobile-box-headline">{props.name}</div>
        <img src={imgEtologer[props.img].img} alt="" className="box-shadow etolog-mobile-box-img"></img>
        <div className="etolog-mobile-box-paragraph">{props.description}</div>

        <div className="etolog-mobile-box-contact-wrapper">

          <div className="etolog-mobile-box-homepage">
            <div className="etolog-mobile-box-homepage-icon">
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <div>
              <a className="etolog-mobile-box-homepage-link font-grey" href={props.homepage} target="blank" >{EtologBoxData.homepageLink}</a>
            </div>
          </div>
          <div className="etolog-mobile-box-email">
            <div className="etolog-mobile-box-email-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <a className="etolog-mobile-box-email-link  font-grey" href={`mailto:${props.email}`}>{EtologBoxData.emailLink}</a>
            </div>
          </div>
          <div className="etolog-mobile-box-city">
            <div className="etolog-mobile-box-city-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="etolog-mobile-box font-grey">
        <div className="etolog-mobile-box-headline">{props.name}</div>
        <img src={imgEtologer[props.img].img} alt="" className="box-shadow etolog-mobile-box-img"></img>
        <div className="etolog-mobile-box-paragraph">{props.description}</div>
        <div className="etolog-mobile-box-contact-wrapper">
          <div className="etolog-mobile-box-phone">

          </div>
          <div className="etolog-mobile-box-email">
            <div className="etolog-mobile-box-email-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <a className="etolog-mobile-box-email-link  font-grey" href={`mailto:${props.email}`}>{EtologBoxData.emailLink}</a>
            </div>
          </div>
          <div className="etolog-mobile-box-city">
            <div className="etolog-mobile-box-city-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>
    )
}
