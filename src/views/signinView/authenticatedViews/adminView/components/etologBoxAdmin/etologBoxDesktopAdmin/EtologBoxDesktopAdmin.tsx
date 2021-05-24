import './EtologBoxDesktopAdmin.css'
import EtologBoxDataAdmin from '../data/EtologBoxDataAdmin'
import { EtologerImgAdmin } from "../data/EtologerImgAdmin"
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDesktop,
  faEnvelope,
  faHome,
  faStar
} from '../../../../../../../../node_modules/@fortawesome/free-solid-svg-icons'


export const EtologBoxDesktopAdmin = (props: { _id: number, imgId: number, fullName?: string, img?: any, description?: string, email?: string, homepage?: string, city?: string, star?: boolean, render?: any }) => {

  const deleteEtolog = async (_id: string, fullName?: string) => {
    await Axios.delete(`http://localhost:3001/etolog/${_id}`)
    window.alert(`Etologen ${fullName} är raderad`)
    props.render()
  }


  return props.star
    ? ( //Stjärnetolog, har varit med sedan starten
      <div className="etolog-desktop-admin-box font-grey box-shadow" >
        <div className="etolog-desktop-admin-box-star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="etolog-desktop-admin-box-headline">{props.fullName}</div>
        <div className="etolog-desktop-admin-box-img-star-wrapper">
          <img src={EtologerImgAdmin[props.imgId].img} alt="" className="box-shadow etolog-desktop-admin-box-img" />
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
        <button className="etolog-box-admin-button">{EtologBoxDataAdmin.buttonOne}</button>
        <button className="etolog-box-admin-button" onClick={() => { deleteEtolog(props._id.toString(), props.fullName) }}>{EtologBoxDataAdmin.buttonTwo}</button>
        {/* <button className="etolog-box-admin-button" onClick={() => { deleteEtolog(props._id.toString()) }}>{EtologBoxDataAdmin.buttonTwo}</button> */}
      </div>
    ) : (
      <div className="etolog-desktop-admin-box font-grey box-shadow">
        <div className="etolog-desktop-admin-box-nostar"></div>
        <div className="etolog-desktop-admin-box-headline">{props.fullName}</div>
        <img src={EtologerImgAdmin[props.imgId].img} alt="" className="box-shadow etolog-desktop-admin-box-img" />
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
        <button className="etolog-box-admin-button">{EtologBoxDataAdmin.buttonOne}</button>
        <button className="etolog-box-admin-button" onClick={() => { deleteEtolog(props._id.toString(), props.fullName) }}>{EtologBoxDataAdmin.buttonTwo}</button>
      </div>)
}
