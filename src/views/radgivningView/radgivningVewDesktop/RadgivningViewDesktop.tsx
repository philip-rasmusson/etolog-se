import './RadgivningViewDesktop.css'
import RadgivningViewData from '../data/RadgivningViewData'
import cat from '../img/cat4.jpg'
import radgivning from '../img/radgivning.png'

import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"

export const RadgivningViewDesktop = () => {
  return (
    <div className="radgivning-desktop-wrapper">
      <DefaulPageLayoutDesktop
        backgroundColor={RadgivningViewData.backgroundColor}
        pageTitle={RadgivningViewData.pageTitle}
        pageSubheading={RadgivningViewData.pageSubheading}
        paragraph={RadgivningViewData.paragraph}
        imgPlacement={RadgivningViewData.imgPlacement}
        img={cat}
        paragraphOne={RadgivningViewData.paragraphOne}
        paragraphTwo={RadgivningViewData.paragraphTwo}
      />
      <div className="radgivning-dekstop-section-three-wrapper">
        <div>
          <p>
            {RadgivningViewData.sectionThreeParagraph}
          </p>
          <button>{RadgivningViewData.sectionThreeButton}</button>
        </div>
        <img src={radgivning} alt=""></img>
      </div>
    </div>
  )
}
