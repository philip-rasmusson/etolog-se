import './EtologBoxDesktop.css'
import EtologBoxData from '../data/EtologBoxData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faStar
} from '../../../../node_modules/@fortawesome/free-solid-svg-icons'

export const EtologBoxDesktop = (props: { id?: number, name?: string, img?: string, description?: string, email?: string, homepage?: string, city?: string, star?: boolean }) => {
  return props.star
    ? ( //Stjärnetolog, har varit med sedan starten
      <div className="etolog-desktop-box font-grey " style={{ backgroundColor: "#fffde0" }}>
        <div className="etolog-desktop-box-headline">{props.name}</div>
        <img src={props.img} alt="" className="box-shadow etolog-desktop-box-img" />
        <div className="etolog-desktop-box-paragraph">{props.description}</div>
        <div className="etolog-desktop-box-contact-wrapper">
          <div className="etolog-desktop-box-homepage">
            <div className="etolog-desktop-box-city-homepage">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>
              <a className="etolog-desktop-box-homepage-link" href={props.homepage} target="blank" >{EtologBoxData.homepageLink}</a>
            </div>
          </div>
          <div className="etolog-desktop-box-email">
            <div className="etolog-desktop-box-city-email">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <a className="etolog-desktop-box-email-link" href={`mailto:${props.email}`}>{EtologBoxData.emailLink}</a>
            </div>
          </div>
          <div className="etolog-desktop-box-city">
            <div className="etolog-desktop-box-city-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="etolog-desktop-box font-grey">
        <div className="etolog-desktop-box-headline">{props.name}</div>
        <img src={props.img} alt="" className="box-shadow etolog-desktop-box-img"></img>
        <div className="etolog-desktop-box-paragraph">{props.description}</div>
        <div className="etolog-desktop-box-contact-wrapper">
          <div className="etolog-desktop-box-email">
            <div className="etolog-desktop-box-city-email">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <a className="etolog-desktop-box-email-link" href={`mailto:${props.email}`}>{EtologBoxData.emailLink}</a>
            </div>
          </div>
          <div className="etolog-desktop-box-city">
            <div className="etolog-desktop-box-city-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>)
}
