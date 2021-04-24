import { ForelasningarViewDesktop } from "./forelasningarViewDesktop/ForelasningarViewDesktop"
import { ForelasningarViewMobile } from "./forelasningarViewMobile/ForelasningarViewMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"


export const ForelasningarView = () => {
    const { width } = useWindowDimensions()

    const toggleDesktopOrMobileViewForNavbar = () => {
        return width <= DesktopMobileBreakpoint.width ? <ForelasningarViewMobile /> : <ForelasningarViewDesktop />
    }

    return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}

