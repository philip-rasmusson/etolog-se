import './MobileNavbar.css'
import RoutingPath from '../../../routes/RoutingPath'

import { useHistory } from 'react-router-dom'
import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPaw } from '@fortawesome/free-solid-svg-icons'

export const MobileNavbar = () => {
    const history = useHistory()
    const logo = 'etolog.se'
    const menuItems = [
        'rådgivning',
        'webkurser',
        'föreläsningar',
        'konsultuppdrag',
        'våra etologer',
    ]
    const [navbarIcon, setNavbarIcon] = useState(faBars)

    const ToggleNavbar = () => {
        const navMenu: HTMLElement | any = document.getElementById('navbar-mobile-menu-id')
        navMenu?.style.display === 'inline'
            ? navMenu.style.display = 'none'
            : navMenu.style.display = 'inline'
        ToggleNavbarIcon()
    }
    const ToggleNavbarIcon = () => {
        const navMenu: HTMLElement | any = document.getElementById('navbar-mobile-menu-id')
        navMenu?.style.display === 'inline'
            ? navMenu.style.display = setNavbarIcon(faPaw)
            : navMenu.style.display = setNavbarIcon(faBars)
    }

    const LinkFunction = (link: string) => {
        history.push(link)
        ToggleNavbar()
    }
    return (
        <div className="navbar-mobile-wrapper">
            <h3 className="navbar-mobile-logo" onClick={() => history.push(RoutingPath.homeView)}>
                {logo}
            </h3>
            <div className="navbar-mobile-menu-icon" onClick={() => ToggleNavbar()}>
                <FontAwesomeIcon icon={navbarIcon} />
            </div>
            <div className="navbar-mobile-menu" id="navbar-mobile-menu-id">
                <p
                    className="navbar-mobile-menu-item"
                    onClick={() => LinkFunction(RoutingPath.radgivningView)}
                >
                    {menuItems[0]}
                </p>
                <p
                    className="navbar-mobile-menu-item"
                    onClick={() => LinkFunction(RoutingPath.homeView)}
                >
                    {menuItems[1]}
                </p>
                <p
                    className="navbar-mobile-menu-item"
                    onClick={() => LinkFunction(RoutingPath.forelasningView)}
                >
                    {menuItems[2]}
                </p>
                <p
                    className="navbar-mobile-menu-item"
                    onClick={() => LinkFunction(RoutingPath.konsultuppdragView)}
                >
                    {menuItems[3]}
                </p>
                <p
                    className="navbar-mobile-menu-item"
                    onClick={() => LinkFunction(RoutingPath.varaEtologerView)}
                >
                    {menuItems[4]}
                </p>
            </div>
        </div>
    )
}

{/* <div
    className="burger-closed"
    id="burger-icon"
    onClick={ToggleNavbar}
>
    <FontAwesomeIcon icon={faBars} />
</div>
<div className="burger-closed" id="times-icon" onClick={ToggleNavbar}>
    <FontAwesomeIcon icon={faPaw} />
</div> */}