import { DesktopNavbar } from "./desktopNavigation/DesktopNavbar"
import { MobileNavbar } from "./mobileNavigation/MobileNavbar"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const Navbar = () => {
    const { width } = useWindowDimensions()

    const toggleDesktopOrMobileViewForNavbar = () => {
        return width <= 760 ? <MobileNavbar /> : <DesktopNavbar />
    }

    return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
