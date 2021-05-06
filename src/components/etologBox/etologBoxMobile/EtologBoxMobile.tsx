import './EtologBoxMobile.css'
import EtologBoxData from '../data/EtologBoxData'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
} from '@fortawesome/free-solid-svg-icons'

export const EtologBoxMobile = (props: { id?: number, name?: string, img?: string, description?: string, email?: string, city?: string }) => {
  return (
    <div className="etolog-mobile-box">
      <div className="etolog-mobile-box-headline">{props.name}</div>
      <img src={props.img} alt="" className="box-shadow etolog-mobile-box-img"></img>
      <div className="etolog-mobile-box-paragraph">{props.description}</div>
      <div>
        <div className="etolog-mobile-box-phone">

        </div>
        <div className="etolog-mobile-box-email">
          <div className="etolog-mobile-box-city-email">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <a className="etolog-mobile-box-email-link" href={`mailto:${props.email}`}>{EtologBoxData.emailLink}</a>
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
