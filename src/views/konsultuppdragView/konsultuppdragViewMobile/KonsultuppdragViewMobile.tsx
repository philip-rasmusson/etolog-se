
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
                paragraph={KonsultuppdragViewData.paragraph}
                imgMobile={konsultuppdragMobile}
                paragraphOne={KonsultuppdragViewData.paragraphOne}
                paragraphTwo={KonsultuppdragViewData.paragraphTwo}
            />
            <div className="forelasning-mobile-white-space"></div>
        </div>
    )
}
