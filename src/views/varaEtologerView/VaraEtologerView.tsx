import { VaraEtologerViewDesktop } from "./varaEtologerViewDesktop/VaraEtologerViewDesktop"
import { VaraEtologerViewMobile } from "./varaEtologerViewMobile/VaraEtologerViewMobile"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"


export const VaraEtologerView = () => {
    const { width } = useWindowDimensions()

    const toggleDesktopOrMobileViewForNavbar = () => {
        return width <= DesktopMobileBreakpoint.width ? <VaraEtologerViewMobile /> : <VaraEtologerViewDesktop />
    }

    return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
