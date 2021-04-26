import './RadgivningViewMobile.css'
import RadgivningViewData from '../data/RadgivningViewData'
import catMobile from '../img/catMobile4.jpg'
import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"


export const RadgivningViewMobile = () => {
  return (
    <div className="radgivning-mobile-wrapper">
      <DefaulPageLayoutMobile
        pageTitle={RadgivningViewData.pageTitle}
        pageSubheading={RadgivningViewData.pageSubheading}
        paragraph={RadgivningViewData.paragraph}
        imgMobile={catMobile}
        paragraphOne={RadgivningViewData.paragraphOne}
        paragraphTwo={RadgivningViewData.paragraphTwo}
      />
      <div className="radgivning-mobile-white-space"></div>
    </div>
  )
}
