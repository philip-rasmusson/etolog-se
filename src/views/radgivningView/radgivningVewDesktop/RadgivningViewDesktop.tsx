import './RadgivningViewDesktop.css'
import RadgivningViewData from '../data/RadgivningViewData'
import cat from '../img/cat4.jpg'
import radgivning from '../img/radgivning.png'

import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"

export const RadgivningViewDesktop = () => {
  return (
    <div className="radgivning-dekstop-wrapper background-white">
      <DefaulPageLayoutDesktop
        backgroundColor={RadgivningViewData.backgroundColor}
        pageTitle={RadgivningViewData.pageTitle}
        pageSubheading={RadgivningViewData.pageSubheading}
        pageParagraph1={RadgivningViewData.pageParagraph1}
        pageParagraph2={RadgivningViewData.pageParagraph2}
        imgPlacement={RadgivningViewData.imgPlacement}
        img={cat}
        sectionTwoParagraph1={RadgivningViewData.sectionTwoParagraph1}
      />
      <div className="radgivning-dekstop-section-three-wrapper background-white">
        <div className="radgivning-dekstop-section-three-text-wrapper">
          <div className="radgivning-dekstop-section-three-text box-shadow font-grey">
            <p>
              {RadgivningViewData.sectionThreeParagraph}
            </p>
            <button>{RadgivningViewData.sectionThreeButton}</button>
          </div>
        </div>
        <div className="radgivning-dekstop-section-three-img">
          <img src={radgivning} alt="" />
        </div>
      </div>
    </div>
  )
}
