import './EtologBoxDesktop.css'
import EtologBoxData from '../data/EtologBoxData'

import { imgEtologer } from "../../../data/imgEtologer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDesktop,
  faEnvelope,
  faHome,
  faStar
} from '../../../../node_modules/@fortawesome/free-solid-svg-icons'


export const EtologBoxDesktop = (props: { id: number, name?: string, img?: any, description?: string, email?: string, homepage?: string, city?: string, star?: boolean }) => {
  return props.star
    ? ( //Stjärnetolog, har varit med sedan starten
      <div className="etolog-desktop-box font-grey box-shadow" >
        <div className="etolog-desktop-box-star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="etolog-desktop-box-headline">{props.name}</div>
        <div className="etolog-desktop-box-img-star-wrapper">
          <img src={imgEtologer[props.img].img} alt="" className="box-shadow etolog-desktop-box-img" />
        </div>
        <div className="etolog-desktop-box-paragraph">{props.description}</div>
        <div className="etolog-desktop-box-contact-wrapper">
          <div className="etolog-desktop-box-homepage">
            <div className="etolog-desktop-box-icon-homepage">
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <div>
              <a className="etolog-desktop-box-homepage-link" href={props.homepage} target="blank" >{EtologBoxData.homepageLink}</a>
            </div>
          </div>
          <div className="etolog-desktop-box-email">
            <div className="etolog-desktop-box-icon-email">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <a className="etolog-desktop-box-email-link font-grey" href={`mailto:${props.email}`}>{EtologBoxData.emailLink}</a>
            </div>
          </div>
          <div className="etolog-desktop-box-city">
            <div className="etolog-desktop-box-icon-city">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="etolog-desktop-box font-grey box-shadow">
        <div className="etolog-desktop-box-nostar"></div>
        <div className="etolog-desktop-box-headline">{props.name}</div>
        <img src={imgEtologer[props.img].img} alt="" className="box-shadow etolog-desktop-box-img" />
        <div className="etolog-desktop-box-paragraph">{props.description}</div>
        <div className="etolog-desktop-box-contact-wrapper">
          <div className="etolog-desktop-box-email">
            <div className="etolog-desktop-box-icon-email">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="font-grey">
              <a className="etolog-desktop-box-email-link font-grey" href={`mailto:${props.email}`}>{EtologBoxData.emailLink}</a>
            </div>
          </div>
          <div className="etolog-desktop-box-city">
            <div className="etolog-desktop-box-icon-city">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>)
}
