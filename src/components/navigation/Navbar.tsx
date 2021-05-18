import { DesktopNavbar } from "./desktopNavigation/DesktopNavbar"
import { MobileNavbar } from "./mobileNavigation/MobileNavbar"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"


export const Navbar = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint.width ? <MobileNavbar /> : <DesktopNavbar />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
