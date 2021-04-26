import { EtologBoxDesktop } from "./etologBoxDesktop/EtologBoxDesktop"
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"

export const EtologBox = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint.width ? <EtologBoxDesktop /> : <EtologBoxDesktop />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}

