import { FooterDesktop } from "./footerDesktop/FooterDesktop"
import { FooterMobile } from "./footerMobile/FooterMobile"
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"

export const Footer = () => {
    const { width } = useWindowDimensions()

    const toggleDesktopOrMobileViewForNavbar = () => {
        return width <= DesktopMobileBreakpoint.width ? <FooterMobile /> : <FooterDesktop />
    }

    return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
