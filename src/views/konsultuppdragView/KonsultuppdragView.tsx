import { KonsultuppdragViewDesktop } from "./konsultuppdragViewDesktop/KonsultuppdragViewDesktop"
import { KonsultuppdragViewMobile } from "./konsultuppdragViewMobile/KonsultuppdragViewMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"


export const KonsultuppdragView = () => {
    const { width } = useWindowDimensions()

    const toggleDesktopOrMobileViewForNavbar = () => {
        return width <= DesktopMobileBreakpoint.width ? <KonsultuppdragViewMobile /> : <KonsultuppdragViewDesktop />
    }

    return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
