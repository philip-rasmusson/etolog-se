import { useHistory } from "react-router-dom"

import './HomeViewDesktop.css'
import djuragare from '../img/djuragare.png'
import kliniker from '../img/kliniker.png'
import verksamheter from '../img/verksamheter.png'
import homeviewImg from '../img/homeviewImgB.png'
import sectionTwoImg from '../img/dog-2983021_1920.jpg'
import sectionThreeImg from '../img/etolog-Johanna-Strandner.jpg'
import sectionFourImg from '../img/cat.jpg'

import HomeViewData from '../data/HomeViewData'
import RoutingPath from '../../../routes/RoutingPath'

export const HomeViewDesktop = () => {
    const history = useHistory()
    const HomeViewSectionOneBox = (props: { img?: string, img2?: string, headline?: string, paragraph?: string, display?: string, btn?: string, path?: any }) => {
        return (
            <>
                <div className="homeview-desktop-section-one-box">
                    <img src={props.img} alt="" className="homeview-desktop-img-desktop"></img>
                    <h2>{props.headline}</h2>
                    <span className="homeview-desktop-section-one-span">

                        <p>{props.paragraph}</p>
                        <button className="homeview-desktop-button" onClick={() => history.push(props.path)}>{props.btn}</button>
                    </span>
                </div>
            </>
        )
    }
    const HomeViewSection = (props: { mirror?: string, headline?: string, paragraph?: string, btn?: string, img?: string, path?: any }) => {
        return (
            <div>
                {props.mirror === 'yes' ? (
                    <div className="homeview-desktop-section-container-mirror">
                        <div className="homeview-desktop-section-right">
                            <h3>{props.headline}</h3>
                            <p>{props.paragraph}</p>
                            <button onClick={() => history.push(props.path)}>{props.btn}</button>
                        </div>
                        <div className="homeview-desktop-section-left">
                            <img src={props.img} alt="" />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="homeview-desktop-section-container">
                            <div className="homeview-desktop-section-left">
                                <img src={props.img} alt="" />
                            </div>
                            <div className="homeview-desktop-section-right">
                                <h3>{props.headline}</h3>
                                <p>{props.paragraph}</p>
                                <button onClick={() => history.push(props.path)}>{props.btn}</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    // const LinkToPath = (xx: string) => {
    //     history.push(xx)
    // }
    return (
        <div className="homeview-desktop-wrapper">
            <div className="homeview-desktop-intro-text">
                <h4>{HomeViewData.introText}</h4>
            </div>
            <div className="homeview-desktop-section-one">
                <div>
                    <HomeViewSectionOneBox
                        display="hidden"
                        img={djuragare}
                        headline={HomeViewData.sectionOneHeadline01}
                        paragraph={HomeViewData.sectionOneParagraph01}
                        btn={HomeViewData.sectionOneBtn01}
                        path={RoutingPath.konsultuppdragView}
                    />
                </div>
                <div>
                    <HomeViewSectionOneBox
                        img={kliniker}
                        headline={HomeViewData.sectionOneHeadline02}
                        paragraph={HomeViewData.sectionOneParagraph02}
                        btn={HomeViewData.sectionOneBtn02}
                        path={RoutingPath.konsultuppdragView}
                    />
                </div>
                <div>
                    <HomeViewSectionOneBox
                        img={verksamheter}
                        headline={HomeViewData.sectionOneHeadline03}
                        paragraph={HomeViewData.sectionOneParagraph03}
                        btn={HomeViewData.sectionOneBtn03}
                        path={RoutingPath.konsultuppdragView}
                    />
                </div>
            </div>
            <img
                src={homeviewImg}
                alt=""
                className="homeview-desktop-img"
            ></img>
            {/* <HomeViewSection
                img={sectionTwoImg}
                headline={HomeViewData.sectionTwoHeadline01}
                paragraph={HomeViewData.sectionTwoParagraph01}
                btn={HomeViewData.sectionTwoBtn01}
                path={RoutingPath.webkurser}
            /> */}

            <HomeViewSection
                mirror="yes"
                img={sectionThreeImg}
                headline={HomeViewData.sectionTwoHeadline02}
                paragraph={HomeViewData.sectionTwoParagraph02}
                btn={HomeViewData.sectionTwoBtn02}
                path={RoutingPath.varaEtologerView}
            />
            <HomeViewSection
                img={sectionFourImg}
                headline={HomeViewData.sectionTwoHeadline03}
                paragraph={HomeViewData.sectionTwoParagraph03}
                btn={HomeViewData.sectionTwoBtn03}
                path={RoutingPath.forelasningView}
            />
        </div>
    )
}