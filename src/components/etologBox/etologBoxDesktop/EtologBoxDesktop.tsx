import './EtologBoxDesktop.css'
import EtologBoxData from '../data/EtologBoxData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faHome,
} from '../../../../node_modules/@fortawesome/free-solid-svg-icons'

export const EtologBoxDesktop = (props: { id?: number, name?: string, img?: string, description?: string, phone?: string, email?: string, city?: string }) => {
  return (
    <div className="etolog-desktop-box font-grey">
      <div className="etolog-desktop-box-headline">{props.name}</div>
      <img src={props.img} alt="" className="box-shadow etolog-desktop-box-img"></img>
      <div className="etolog-desktop-box-paragraph">{props.description}</div>
      <div>
        <div className="etolog-desktop-box-phone">
          <div className="etolog-desktop-box-city-phone">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div>{props.phone}</div>
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
  )
}
