import './ForelasningarViewMobile.css'
import forelasningarMobile from '../img/forelasningarMobile.jpg'

import ForelasningarViewData from "../data/ForelasningarViewData"
import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"


export const ForelasningarViewMobile = () => {
  return (
    <div className="forelasning-mobile-wrapper">
      <DefaulPageLayoutMobile
        pageTitle={ForelasningarViewData.pageTitle}
        pageSubheading={ForelasningarViewData.pageSubheading}
        paragraph={ForelasningarViewData.paragraph}
        imgMobile={forelasningarMobile}
        paragraphOne={ForelasningarViewData.paragraphOne}
        paragraphTwo={ForelasningarViewData.paragraphTwo}
      />
      <div className="forelasning-mobile-white-space"></div>
    </div>
  )
}
