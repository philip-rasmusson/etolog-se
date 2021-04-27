import './KonsultuppdragViewDesktop.css'
import konsultuppdrag from '../img/konsultuppdrag.jpg'

import KonsultuppdragViewData from '../data/KonsultuppdragViewData'

import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"

export const KonsultuppdragViewDesktop = () => {
    const ContactForm = () => {
        return <form></form>
    }
    return (
        <div>
            <DefaulPageLayoutDesktop
                backgroundColor={KonsultuppdragViewData.backgroundColor}
                pageTitle={KonsultuppdragViewData.pageTitle}
                pageSubheading={KonsultuppdragViewData.pageSubheading}
                paragraph={KonsultuppdragViewData.paragraph}
                imgPlacement={KonsultuppdragViewData.imgPlacement}
                img={konsultuppdrag}
                paragraphOne={KonsultuppdragViewData.paragraphOne}
                paragraphTwo={KonsultuppdragViewData.paragraphTwo}
            />
        </div>
    )
}
