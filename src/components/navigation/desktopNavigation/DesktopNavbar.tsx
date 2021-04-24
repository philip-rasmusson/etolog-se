import './DesktopNavbar.css'

import { useHistory } from "react-router-dom"
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavbar = () => {
  const history = useHistory()
  const logo = 'etolog.se'
  const menuItems = [
    'rådgivning',
    'webkurser',
    'föreläsningar',
    'konsultuppdrag',
    'våra etologer',
  ]

  return (
    <div className="navbar-desktop">
      <h3 className="navbar-desktop-logo" onClick={() => history.push(RoutingPath.homeView)}>
        {logo}
      </h3>

      <div className="navbar-desktop-menu">
        <p
          onClick={() => history.push(RoutingPath.radgivningView)}
        >
          {menuItems[0]}
        </p>
        <p
          onClick={() => history.push(RoutingPath.webkurser)}
        >
          {menuItems[1]}
        </p>
        <p
          onClick={() => history.push(RoutingPath.forelasningView)}
        >
          {menuItems[2]}
        </p>
        <p
          onClick={() => history.push(RoutingPath.konsultuppdragView)}
        >
          {menuItems[3]}
        </p>
        <p
          onClick={() => history.push(RoutingPath.varaEtologerView)}
        >
          {menuItems[4]}
        </p>
      </div>
    </div>
  )
}

