import './RadgivningViewMobile.css'
import RadgivningViewData from '../data/RadgivningViewData'
import catMobile from '../img/catMobile4.jpg'
import radgivning from '../img/radgivning.png'

import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"


export const RadgivningViewMobile = () => {
  return (
    <div className="radgivning-mobile-wrapper">
      <DefaulPageLayoutMobile
        pageTitle={RadgivningViewData.pageTitle}
        pageSubheading={RadgivningViewData.pageSubheading}
        paragraph={RadgivningViewData.pageParagraph1}
        imgMobile={catMobile}
        paragraphOne={RadgivningViewData.sectionTwoParagraph1}
      // paragraphTwo={RadgivningViewData.paragraphTwo}
      />
      <div className="radgivning-mobile-section-three-wrapper">
        <div>
          <p>
            {RadgivningViewData.sectionThreeParagraph}
          </p>
          <button>{RadgivningViewData.sectionThreeButton}</button>
        </div>
        <img src={radgivning} alt="" />
      </div>
    </div>
  )
}
