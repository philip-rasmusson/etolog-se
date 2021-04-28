import './KonsultuppdragViewDesktop.css'
import konsultuppdrag from '../img/konsultuppdrag.jpg'

import KonsultuppdragViewData from '../data/KonsultuppdragViewData'

import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"

export const KonsultuppdragViewDesktop = () => {

    return (
        <div>
            <DefaulPageLayoutDesktop
                backgroundColor={KonsultuppdragViewData.backgroundColor}
                pageTitle={KonsultuppdragViewData.pageTitle}
                pageSubheading={KonsultuppdragViewData.pageSubheading}
                pageParagraph1={KonsultuppdragViewData.pageParagraph1}
                imgPlacement={KonsultuppdragViewData.imgPlacement}
                img={konsultuppdrag}
                sectionTwoParagraph1={KonsultuppdragViewData.sectionTwoParagraph1}
            />
        </div>
    )
}

