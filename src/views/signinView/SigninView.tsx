import { SigninViewDesktop } from "./signinViewDesktop/SigninViewDesktop"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"


export const SigninView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint.width ? <SigninViewDesktop /> : <SigninViewDesktop />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}

//test
