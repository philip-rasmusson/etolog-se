import './ForelasningarViewDesktop'
import ForelasningarViewData from '../data/ForelasningarViewData'

import forelasningar from '../img/forelasningar.jpg'
import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"

export const ForelasningarViewDesktop = () => {
  return (
    <div>
      <DefaulPageLayoutDesktop
        backgroundColor={ForelasningarViewData.backgroundColor}
        pageTitle={ForelasningarViewData.pageTitle}
        pageSubheading={ForelasningarViewData.pageSubheading}
        paragraph={ForelasningarViewData.paragraph}
        imgPlacement={ForelasningarViewData.imgPlacement}
        img={forelasningar}
        paragraphOne={ForelasningarViewData.paragraphOne}
        paragraphTwo={ForelasningarViewData.paragraphTwo}
      />
    </div>
  )
}
