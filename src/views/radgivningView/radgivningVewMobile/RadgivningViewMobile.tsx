import { useEffect } from "react"
import { useHistory } from "react-router-dom"

import './RadgivningViewMobile.css'
import RadgivningViewData from '../data/RadgivningViewData'
import catMobile from '../img/catMobile4.jpg'
import radgivning from '../img/radgivning.png'

import RoutingPath from '../../../routes/RoutingPath'
import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"


export const RadgivningViewMobile = () => {
  const history = useHistory()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }, [])

  return (
    <div className="radgivning-mobile-wrapper">
      <DefaulPageLayoutMobile
        pageTitle={RadgivningViewData.pageTitle}
        pageSubheading={RadgivningViewData.pageSubheading}
        pageParagraph1={RadgivningViewData.pageParagraph1}
        imgMobile={catMobile}
        sectionTwoParagraph1={RadgivningViewData.sectionTwoParagraph1}
      // paragraphTwo={RadgivningViewData.paragraphTwo}
      />
      <div className="radgivning-mobile-section-three-wrapper">
        <div className="radgivning-mobile-section-three-text">
          <p>
            {RadgivningViewData.sectionThreeParagraph}
          </p>
          <button onClick={() => history.push(RoutingPath.varaEtologerView)}>{RadgivningViewData.sectionThreeButton}</button>
        </div>
        <img src={radgivning} alt="" />
      </div>
    </div>
  )
}
