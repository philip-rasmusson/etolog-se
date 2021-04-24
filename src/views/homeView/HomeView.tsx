import { HomeViewDesktop } from "./homeViewDesktop/HomeViewDesktop"
import { HomeViewMobile } from "./homeViewMobile/HomeViewMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"


export const HomeView = () => {
    const { width } = useWindowDimensions()

    const toggleDesktopOrMobileViewForNavbar = () => {
        return width <= DesktopMobileBreakpoint.width ? <HomeViewMobile /> : <HomeViewDesktop />
    }

    return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}

