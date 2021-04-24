import { RadgivningViewDesktop } from "./radgivningVewDesktop/RadgivningViewDesktop"
import { RadgivningViewMobile } from "./radgivningVewMobile/RadgivningViewMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"


export const RadgivningView = () => {
    const { width } = useWindowDimensions()

    const toggleDesktopOrMobileViewForNavbar = () => {
        return width <= DesktopMobileBreakpoint.width ? <RadgivningViewMobile /> : <RadgivningViewDesktop />
    }

    return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
