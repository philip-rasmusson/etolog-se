import './EtologBoxMobileAdmin.css'
import EtologBoxDataAdmin from '../data/EtologBoxDataAdmin'

import { imgEtologer } from "../../../../../../../data/imgEtologer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faStar,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons'

export const EtologBoxMobileAdmin = (props: { id?: number, img_id: number, name?: string, img?: any, description?: string, email?: string, homepage?: string, city?: string, star?: boolean }) => {
  return props.star
    ? (
      <div className="etolog-mobile-admin-box font-grey">
        <div className="etolog-mobile-admin-box-star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="etolog-mobile-admin-box-headline">{props.name}</div>
        <img src={imgEtologer[props.img_id].img} alt="" className="box-shadow etolog-mobile-admin-box-img"></img>
        <div className="etolog-mobile-admin-box-paragraph">{props.description}</div>

        <div className="etolog-mobile-admin-box-contact-wrapper">

          <div className="etolog-mobile-admin-box-homepage">
            <div className="etolog-mobile-admin-box-homepage-icon">
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <div>
              <a className="etolog-mobile-admin-box-homepage-link font-grey" href={props.homepage} target="blank" >{EtologBoxDataAdmin.homepageLink}</a>
            </div>
          </div>
          <div className="etolog-mobile-admin-box-email">
            <div className="etolog-mobile-admin-box-email-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <a className="etolog-mobile-admin-box-email-link  font-grey" href={`mailto:${props.email}`}>{EtologBoxDataAdmin.emailLink}</a>
            </div>
          </div>
          <div className="etolog-mobile-admin-box-city">
            <div className="etolog-mobile-admin-box-city-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="etolog-mobile-admin-box font-grey">
        <div className="etolog-mobile-admin-box-headline">{props.name}</div>
        <img src={imgEtologer[props.img_id].img} alt="" className="box-shadow etolog-mobile-admin-box-img"></img>
        <div className="etolog-mobile-admin-box-paragraph">{props.description}</div>
        <div className="etolog-mobile-admin-box-contact-wrapper">
          <div className="etolog-mobile-admin-box-phone">

          </div>
          <div className="etolog-mobile-admin-box-email">
            <div className="etolog-mobile-admin-box-email-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <a className="etolog-mobile-admin-box-email-link  font-grey" href={`mailto:${props.email}`}>{EtologBoxDataAdmin.emailLink}</a>
            </div>
          </div>
          <div className="etolog-mobile-admin-box-city">
            <div className="etolog-mobile-admin-box-city-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>
    )
}
