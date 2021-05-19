import { AdminViewDesktop } from "./adminViewDesktop/AdminViewDesktop"

import { useWindowDimensions } from '../../../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../../../shared/global/DesktopMobileBreakpoint"


export const AdminView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint.width ? <AdminViewDesktop /> : <AdminViewDesktop />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}

