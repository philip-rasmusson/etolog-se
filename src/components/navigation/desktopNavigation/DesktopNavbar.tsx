import './DesktopNavbar.css'
import NavbarData from '../data/NavbarData'
import RoutingPath from '../../../routes/RoutingPath'

import { useHistory } from "react-router-dom"

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
        <p
          onClick={() => history.push(RoutingPath.webkurser)}
        >
          {NavbarData.webkurser}
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

