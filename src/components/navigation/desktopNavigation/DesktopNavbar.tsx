import './DesktopNavbar.css'

import NavbarData from '../data/NavbarData'
import RoutingPath from '../../../routes/RoutingPath'

import { useHistory } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

export const DesktopNavbar = () => {
  const history = useHistory()


  return (
    <div className="navbar-desktop">
      <h3 className="navbar-desktop-logo" onClick={() => history.push(RoutingPath.homeView)}>
        {NavbarData.logo}
      </h3>

      <div className="navbar-desktop-menu">
        <p
          onClick={() => history.push(RoutingPath.radgivningView)}
        >
          {NavbarData.radgivning}
        </p>
        <p onClick={() => window.open(RoutingPath.webkurser)}
        >
          {NavbarData.webkurser} <FontAwesomeIcon icon={faShare} />
        </p>
        <p
          onClick={() => history.push(RoutingPath.forelasningView)}
        >
          {NavbarData.forelasningar}
        </p>
        <p
          onClick={() => history.push(RoutingPath.konsultuppdragView)}
        >
          {NavbarData.konsultuppdrag}
        </p>
        <p
          onClick={() => history.push(RoutingPath.varaEtologerView)}
        >
          {NavbarData.varaEtologer}
        </p>
      </div>
    </div>
  )
}

