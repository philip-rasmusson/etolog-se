
import './KonsultuppdragViewMobile.css'
import konsultuppdragMobile from '../img/konsultuppdragMobile.jpg'

import KonsultuppdragViewData from "../data/KonsultuppdragViewData"
import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"


export const KonsultuppdragViewMobile = () => {
    return (
        <div className="forelasning-mobile-wrapper">
            <DefaulPageLayoutMobile
                pageTitle={KonsultuppdragViewData.pageTitle}
                pageSubheading={KonsultuppdragViewData.pageSubheading}
                pageParagraph1={KonsultuppdragViewData.pageParagraph1}
                imgMobile={konsultuppdragMobile}
                sectionTwoParagraph1={KonsultuppdragViewData.sectionTwoParagraph1}
            />
            <div className="forelasning-mobile-white-space"></div>
        </div>
    )
}
