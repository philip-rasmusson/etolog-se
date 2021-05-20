import { useState } from 'react'

import './AdminViewDesktop.css'
import AdminViewData from '../data/AdminViewData'
import { EtologBoxDesktopAdmin } from "../components/etologBoxAdmin/etologBoxDesktopAdmin/EtologBoxDesktopAdmin"
import etologer from '../../../../../data/data-etologer.json'
import { HeaderDesktop } from '../../../../../components/header/headerDesktop/HeaderDesktop'
import headerImg from '../img/headerAdminHeight700.jpg'

export const AdminViewDesktop = () => {

  const [displayEtologer, setDisplayEtologer] = useState(false)
  const [displayEtologerButtonText, setDisplayEtologerButtonText] = useState('visa alla etologer')

  const etologOuput = (etolog: any) => {
    return (<div className="admin-desktop-etolog-box">
      <EtologBoxDesktopAdmin
        id={etolog.id}
        name={etolog.first_name + ' ' + etolog.last_name}
        img={etolog.id}
        description={etolog.desc}
        email={etolog.email}
        city={etolog.city}
        star={etolog.star}
        homepage={etolog.homepage}
      />
    </div>)
  }

  const showAllEtologer = () => {
    if (displayEtologer) {
      return etologer.map(etologOuput)
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



  return (
    <>
      <HeaderDesktop headerImg={headerImg} />
      <div className="admin-desktop-wrapper font-grey">
        <h1>{AdminViewData.pageTitle}</h1>
        <h4>{AdminViewData.pageSubheading}</h4>
        <div className="admin-desktop-buttons-wrapper">
          <button className="admin-desktop-button-one" onClick={() => toggleShowEtologer()}>{displayEtologerButtonText}</button>
          <button className="admin-desktop-button-two">Lägg till en etolog</button>
          <button className="admin-desktop-button-three">Logga ut</button>
        </div>
      </div>
      <div className="admin-desktop-etologer-wrapper">
        {showAllEtologer()}
      </div>

    </>
  )
}
