import { useHistory } from "react-router-dom"

import './HomeViewMobile.css'

import homeviewImg from '../img/homeviewImg.png'
import homeviewImg2 from '../img/homeviewImg3.jpg'
import homeviewImg4 from '../img/homeviewImg4.jpg'
import homeviewImg6 from '../img/homeviewImg6.jpg'
import sectionTwoImg from '../img/dog-2983021_1920.jpg'
import sectionThreeImg from '../img/etolog-Johanna-Strandner.jpg'
import sectionFourImg from '../img/cat.jpg'

import HomeViewData from '../data/HomeViewData'
import RoutingPath from '../../../routes/RoutingPath'


export const HomeViewMobile = () => {
    const history = useHistory()

    const HomeViewSection = (props: { mirror?: string, headline?: string, paragraph?: string, btn?: string, img?: string, path?: any }) => {
        return (
            <div className="homeview-mobile-section-wrapper">
                <h3>{props.headline}</h3>
                <p>{props.paragraph}</p>
                <button onClick={() => history.push(props.path)}>{props.btn}</button>
            </div>
        )
    }
    return (
        <div className="homeview-mobile-wrapper font-grey">
            <div className="homeview-mobile-intro-text">
                <p>{HomeViewData.introText}</p>
            </div>
            <img
                src={homeviewImg}
                alt=""
                className="homeview-mobile-img"
            ></img>
            <div>
                <HomeViewSection
                    headline={HomeViewData.sectionTwoHeadline01}
                    paragraph={HomeViewData.sectionTwoParagraph01}
                    btn={HomeViewData.sectionTwoBtn01}
                    path={RoutingPath.homeView}
                />
            </div>
            <img
                src={homeviewImg2}
                alt=""
                className="homeview-mobile-img2"
            ></img>
            <div>
                <HomeViewSection
                    headline={HomeViewData.sectionTwoHeadline02}
                    paragraph={HomeViewData.sectionTwoParagraph02}
                    btn={HomeViewData.sectionTwoBtn02}
                    path={RoutingPath.varaEtologerView}
                />
            </div>
            <img
                src={homeviewImg4}
                alt=""
                className="homeview-mobile-img2"
            ></img>
            <div>
                <HomeViewSection
                    headline={HomeViewData.sectionTwoHeadline03}
                    paragraph={HomeViewData.sectionTwoParagraph03}
                    btn={HomeViewData.sectionTwoBtn03}
                    path={RoutingPath.forelasningView}
                />
            </div>
        </div>
    )
}