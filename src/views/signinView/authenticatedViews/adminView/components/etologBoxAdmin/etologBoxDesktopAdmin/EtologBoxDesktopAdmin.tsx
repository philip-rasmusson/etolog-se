import './EtologBoxDesktopAdmin.css'
import { useState } from 'react'
import EtologBoxDataAdmin from '../data/EtologBoxDataAdmin'
import { EtologerImgAdmin } from "../data/EtologerImgAdmin"
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import categories from '../../../../../../../data/data-categories.json'
import lectures from '../../../../../../../data/data-lectures.json'
import counties from '../../../../../../../data/data-county.json'

import {
  faDesktop,
  faEnvelope,
  faHome,
  faStar
} from '../../../../../../../../node_modules/@fortawesome/free-solid-svg-icons'


export const EtologBoxDesktopAdmin = (props: { _id: number, imgId: number, fullName?: string, first_name?: string, last_name?: string, img?: any, description?: string, email?: string, homepage?: string, city?: string, county?: any, star?: boolean, categoryFilter?: any, lecture?: any, render?: any }) => {
  const [displayUpdateEtolog, setDisplayUpdateEtolog] = useState<boolean>(false)

  // const [updateEtolog, setUpdateEtolog] = useState<any>()

  const [firstName, setFirstName] = useState(props.first_name)
  const [lastName, setLastName] = useState(props.last_name)
  const [city, setCity] = useState(props.city)
  const [description, setDescription] = useState(props.description)
  const [homepage, setHompage] = useState(props.homepage)
  const [email, setEmail] = useState(props.email)
  const [star, setStar] = useState(props.star)
  const [categoryArray, setCategoryArray] = useState(props.categoryFilter)
  const [lecture, setLecture] = useState(props.lecture)
  const [countySelect, setCountySelect] = useState(props.county)


  const mapCategories = categories.map((item) => {
    return <label style={{ width: '15rem', textAlign: 'left' }}><input type="checkbox" key={item.category}
      onChange={event => {
        (event.target.checked)
          ? setCategoryArray([...categoryArray, item.category])
          : setCategoryArray(categoryArray.filter((y: any) => y !== item.category))
      }} />{item.category}</label>
  })
  const mapLectures = lectures.map((item) => {
    return <label style={{ width: '15rem', textAlign: 'left' }}><input type="checkbox" key={item.lecture}
      onChange={event => {
        (event.target.checked)
          ? setCategoryArray([...categoryArray, item.lecture])
          : setCategoryArray(categoryArray.filter((y: any) => y !== item.lecture))
      }} />{item.lecture}</label>
  })

  const mapCounty = counties.map((county) => {
    return (
      <option value={county.county} key={county.county}>
        {county.county}
      </option>
    )
  })

  const deleteEtolog = async (_id: string, fullName?: string) => {
    await Axios.delete(`http://localhost:3001/etolog/${_id}`)
    window.alert(`Etologen ${fullName} är raderad`)
    props.render()
  }

  const updateEtolog = async (_id: string, fullName?: string) => {
    const updatedEtolog = {
      first_name: firstName,
      last_name: lastName,
      desc: description,
      email: email,
      city: city,
      homepage: homepage,
      lecture: lecture,
      star: star,
      county: countySelect,
      categoryFilter: categoryArray,
      imgId: 0
    }
    await Axios.put(`http://localhost:3001/etolog/${_id}`, updatedEtolog)
    window.alert(`Etologen ${fullName} är uppdaterad`)
    props.render()
  }

  return !displayUpdateEtolog ? ( //Stjärnetolog, har varit med sedan starten
    <div className="etolog-desktop-admin-box font-grey box-shadow" >
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
      <button className="etolog-box-admin-button" onClick={() => setDisplayUpdateEtolog(true)}>{EtologBoxDataAdmin.buttonOne}</button>
      <button className="etolog-box-admin-button" onClick={() => { deleteEtolog(props._id.toString(), props.fullName) }}>{EtologBoxDataAdmin.buttonTwo}</button>
    </div>
  ) : (
    <div className="etolog-desktop-admin-box font-grey box-shadow" >
      <div><h4>Förnamn</h4><input type="text" value={firstName} onChange={event => setFirstName(event.target.value)} /></div>
      <div><h4>Efternamn</h4><input type="text" value={lastName} onChange={event => setLastName(event.target.value)} /></div>
      <div><h4>Stad</h4><input type="text" value={city} onChange={event => setCity(event.target.value)} /></div>
      <div><h4>E-mail</h4><input type="text" value={email} onChange={event => setEmail(event.target.value)} /></div>
      <div><h4>Hemsida</h4><input type="text" value={homepage} onChange={event => setHompage(event.target.value)} /></div>
      <div><h4>Beskrivning</h4><input type="text" value={description} onChange={event => setDescription(event.target.value)} /></div>

      <div>
        {/* <h4>Län</h4> */}
        <select onChange={(event) => setCountySelect(event.target.value)} style={{ borderRadius: '0.3rem', background: 'none', color: 'black', padding: '2px', margin: '1rem auto' }}>
          <option value={countySelect}>{countySelect}</option>
          {mapCounty}
        </select>
      </div>

      <div><h4>Stjärnmärkt</h4><input type="checkbox" checked={star} onChange={event => setStar(event.target.checked)} /></div>

      <div style={{ width: '15rem' }}>
        <h4>Kategorier</h4>
        <div className="array-checkbox"> {mapCategories}</div>
      </div>
      <div style={{ width: '15rem' }}>
        <h4>Föreläsningar</h4>
        <div className="array-checkbox"> {mapLectures}</div>
      </div>

      <button className="etolog-box-admin-button" onClick={() => updateEtolog(props._id.toString(), props.fullName)}>{EtologBoxDataAdmin.buttonOne}</button>
      <button className="etolog-box-admin-button" onClick={() => setDisplayUpdateEtolog(false)}>avbryt</button>
    </div>
  )
}
