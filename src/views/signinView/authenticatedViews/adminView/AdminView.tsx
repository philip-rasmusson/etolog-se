import { AdminViewDesktop } from "./adminViewDesktop/AdminViewDesktop"
import { AdminViewMobile } from "./adminViewMobile/AdminViewMobile"

import { useWindowDimensions } from '../../../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../../../shared/global/DesktopMobileBreakpoint"


export const AdminView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint.width ? <AdminViewMobile /> : <AdminViewDesktop />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}

