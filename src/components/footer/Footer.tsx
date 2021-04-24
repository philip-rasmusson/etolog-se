import { FooterDesktop } from "./footerDesktop/FooterDesktop"
import { FooterMobile } from "./footerMobile/FooterMobile"
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const Footer = () => {
    const { width } = useWindowDimensions()

    const toggleDesktopOrMobileViewForNavbar = () => {
        return width <= 760 ? <FooterMobile /> : <FooterDesktop />
    }

    return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
