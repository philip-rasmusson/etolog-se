import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './AdminViewDesktop.css'
import AdminViewData from '../data/AdminViewData'
import { EtologBoxDesktopAdmin } from "../components/etologBoxAdmin/etologBoxDesktopAdmin/EtologBoxDesktopAdmin"
import { HeaderDesktop } from '../../../../../components/header/headerDesktop/HeaderDesktop'
import headerImg from '../img/headerAdminHeight700.jpg'
import Axios from 'axios'
import RoutingPath from '../../../../../routes/RoutingPath'


export const AdminViewDesktop = () => {

  const history = useHistory()

  const [displayEtologer, setDisplayEtologer] = useState<boolean>(true)
  const [displayAddNewEtolog, setDisplayAddNewEtolog] = useState<boolean>(false)
  const [displayEtologerButtonText, setDisplayEtologerButtonText] = useState<string>('göm alla etologer')
  const [apiData, setApiData] = useState<any>([])

  const fetchData = async () => {
    const { data } = await Axios.get('http://localhost:3001/etolog')
    setApiData(data)
    console.log(data)
  }

  const showAllEtologer = () => {
    if (displayEtologer) {
      return apiData.map((etolog: any) => {
        return (<div className="admin-desktop-etolog-box">
          <EtologBoxDesktopAdmin
            _id={etolog._id}
            fullName={etolog.first_name + ' ' + etolog.last_name}
            imgId={etolog.imgId}
            description={etolog.desc}
            email={etolog.email}
            city={etolog.city}
            star={etolog.star}
            homepage={etolog.homepage}
            render={() => fetchData()}
          />
        </div>)
      })
    }
  }

  const toggleShowEtologer = () => {
    if (displayEtologer) {
      setDisplayEtologer(false)
      setDisplayEtologerButtonText('visa alla etologer')
    } else {
      setDisplayEtologer(true)
      setDisplayEtologerButtonText('göm alla etologer')
    }
  }

  const toggleAddNewEtolog = () => {
    if (!displayAddNewEtolog) {
      setDisplayEtologer(false)
      setDisplayAddNewEtolog(true)
    } else {
      setDisplayAddNewEtolog(false)
    }
  }

  const addNewEtolog = () => {
    if (displayAddNewEtolog)
      return (
        <>
          <h1>adding new etolog</h1>
          <form className="add-new-etolog-form-wrapper">
            <label>Förnamn<input id="first_name" type="text" /></label>
            <label>Efternamn<input id="last_name" type="text" /></label>
            <label>Beskrivnig<input id="desc" type="text" /></label>
            <label>Email<input id="email" type="text" /></label>
            <label>Stad<input id="city" type="text" /></label>
            <label>Hemsida<input id="homepage" type="text" /></label>
            <label>Föreläsningar<input id="lecture" type="text" /></label>
            <label>Stjärnmärkt<input id="star" type="text" /></label>
            <label>Län<input id="county" type="text" /></label>
            <label>Kategori<input id="categoryFilter" type="text" /></label>
          </form>
        </>
      )
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <HeaderDesktop headerImg={headerImg} />
      <div className="admin-desktop-wrapper font-grey">
        <h1>{AdminViewData.pageTitle}</h1>
        <h4>{AdminViewData.pageSubheading}</h4>
        <div className="admin-desktop-buttons-wrapper">
          <button className="admin-desktop-button-one" onClick={() => toggleShowEtologer()}>{displayEtologerButtonText}</button>
          <button className="admin-desktop-button-two" onClick={() => toggleAddNewEtolog()}>{AdminViewData.buttonTwo}</button>
          <button className="admin-desktop-button-three" onClick={() => history.push(RoutingPath.signinView)}>{AdminViewData.buttonThree}</button>
        </div>
      </div>
      <div className="admin-desktop-etologer-wrapper">
        {showAllEtologer()}
      </div>
      <div className="admin-desktop-addNewEtolog-wrapper">
        {addNewEtolog()}
      </div>

    </>
  )
}
