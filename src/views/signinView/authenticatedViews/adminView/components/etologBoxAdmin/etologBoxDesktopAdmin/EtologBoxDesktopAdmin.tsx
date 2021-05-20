import './EtologBoxDesktopAdmin.css'
import EtologBoxDataAdmin from '../data/EtologBoxDataAdmin'

import { imgEtologer } from "../../../../../../../data/imgEtologer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDesktop,
  faEnvelope,
  faHome,
  faStar
} from '../../../../../../../../node_modules/@fortawesome/free-solid-svg-icons'


export const EtologBoxDesktopAdmin = (props: { id: number, name?: string, img?: any, description?: string, email?: string, homepage?: string, city?: string, star?: boolean }) => {
  return props.star
    ? ( //Stjärnetolog, har varit med sedan starten
      <div className="etolog-desktop-admin-box font-grey box-shadow" >
        <div className="etolog-desktop-admin-box-star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="etolog-desktop-admin-box-headline">{props.name}</div>
        <div className="etolog-desktop-admin-box-img-star-wrapper">
          <img src={imgEtologer[props.img].img} alt="" className="box-shadow etolog-desktop-admin-box-img" />
        </div>
        <div className="etolog-desktop-admin-box-paragraph">{props.description}</div>
        <div className="etolog-desktop-admin-box-contact-wrapper">
          <div className="etolog-desktop-admin-box-homepage">
            <div className="etolog-desktop-admin-box-icon-homepage">
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <div>
              <a href={props.homepage} target="blank" className="etolog-desktop-admin-box-homepage-link font-grey">{EtologBoxDataAdmin.homepageLink}</a>
            </div>
          </div>
          <div className="etolog-desktop-admin-box-email">
            <div className="etolog-desktop-admin-box-icon-email">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <a className="etolog-desktop-admin-box-email-link font-grey" href={`mailto:${props.email}`}>{EtologBoxDataAdmin.emailLink}</a>
            </div>
          </div>
          <div className="etolog-desktop-admin-box-city">
            <div className="etolog-desktop-admin-box-icon-city">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="etolog-desktop-admin-box font-grey box-shadow">
        <div className="etolog-desktop-admin-box-nostar"></div>
        <div className="etolog-desktop-admin-box-headline">{props.name}</div>
        <img src={imgEtologer[props.img].img} alt="" className="box-shadow etolog-desktop-admin-box-img" />
        <div className="etolog-desktop-admin-box-paragraph">{props.description}</div>
        <div className="etolog-desktop-admin-box-contact-wrapper">
          <div className="etolog-desktop-admin-box-email">
            <div className="etolog-desktop-admin-box-icon-email">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="font-grey">
              <a className="etolog-desktop-admin-box-email-link font-grey" href={`mailto:${props.email}`}>{EtologBoxDataAdmin.emailLink}</a>
            </div>
          </div>
          <div className="etolog-desktop-admin-box-city">
            <div className="etolog-desktop-admin-box-icon-city">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>)
}
