import { HeaderDesktop } from "./headerDesktop/HeaderDesktop"
import { HeaderMobile } from "./headerMobile/HeaderMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"


export const Header = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint.width ? <HeaderMobile /> : <HeaderDesktop />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
