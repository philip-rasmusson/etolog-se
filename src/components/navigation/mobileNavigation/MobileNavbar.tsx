import './MobileNavbar.css'
import NavbarData from '../data/NavbarData'
import RoutingPath from '../../../routes/RoutingPath'
import GlobalData from "../../../data/GlobalData"

import { useHistory } from 'react-router-dom'
import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPaw } from '@fortawesome/free-solid-svg-icons'

export const MobileNavbar = () => {
    const history = useHistory()

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
        <div className="navbar-mobile-wrapper font-grey">
            <h3 className="navbar-mobile-logo" onClick={() => history.push(RoutingPath.homeView)}>
                {NavbarData.logo}
            </h3>
            <div className="navbar-mobile-menu-icon" onClick={() => ToggleNavbar()}>
                <FontAwesomeIcon icon={navbarIcon} />
            </div>
            <div className="navbar-mobile-menu" id="navbar-mobile-menu-id">
                <p
                    className="navbar-mobile-menu-item"
                    onClick={() => LinkFunction(RoutingPath.radgivningView)}
                >
                    {NavbarData.radgivning}
                </p>
                <p
                ><a href={GlobalData.webkurserLink} target="_blank" rel="noopener noreferrer" className="link-nav">

                        {NavbarData.webkurser}
                    </a>
                </p>
                <p
                    className="navbar-mobile-menu-item"
                    onClick={() => LinkFunction(RoutingPath.forelasningView)}
                >
                    {NavbarData.forelasningar}
                </p>
                <p
                    className="navbar-mobile-menu-item"
                    onClick={() => LinkFunction(RoutingPath.konsultuppdragView)}
                >
                    {NavbarData.konsultuppdrag}
                </p>
                <p
                    className="navbar-mobile-menu-item"
                    onClick={() => LinkFunction(RoutingPath.varaEtologerView)}
                >
                    {NavbarData.varaEtologer}
                </p>
            </div>
        </div>
    )
}
