import { useHistory } from "react-router-dom"

import HeaderImg from '../../../components/header/img/headerDesktop.jpg'
import { HeaderDesktop } from "../../../components/header/headerDesktop/HeaderDesktop"

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
import GlobalData from "../../../data/GlobalData"

export const HomeViewDesktop = () => {
    const history = useHistory()

    const HomeViewSectionOneBox = (props: { img?: string, img2?: string, headline?: string, paragraph?: string, btn?: string, path?: any, mailto?: boolean }) => {

        const linkToViewOrMail = () => {
            return props.mailto
                ? <a href={GlobalData.infoMail} style={{ textDecoration: 'none' }}><button className="homeview-desktop-button">{props.btn}</button></a>
                : <button className="homeview-desktop-button" onClick={() => history.push(props.path)}>{props.btn}</button>
        }
        return (
            <>
                <div className="homeview-desktop-section-one-box">
                    <img src={props.img} alt="" className="homeview-desktop-img-desktop"></img>
                    <h2>{props.headline}</h2>
                    <span className="homeview-desktop-section-one-span">

                        <p>{props.paragraph}</p>
                        {linkToViewOrMail()}
                    </span>
                </div>
            </>
        )
    }
    const HomeViewSection = (props: { mirror?: string, headline?: string, paragraph?: string, btn?: string, img?: string, path?: any, hasExternalLink: boolean }) => {
        const externalOrLocalLink = () => {
            return props.hasExternalLink
                ? <button onClick={() => window.open(props.path)}>{props.btn}</button>
                : <button onClick={() => history.push(props.path)}>{props.btn}</button>
        }
        return (
            <div>
                {props.mirror === 'yes' ? (
                    <div className="homeview-desktop-section-container-mirror">
                        <div className="homeview-desktop-section-right">
                            <h3>{props.headline}</h3>
                            <p>{props.paragraph}</p>
                            {externalOrLocalLink()}
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
                                {externalOrLocalLink()}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <>
            <HeaderDesktop slogan={HomeViewData.headerSlogan} headerImg={HeaderImg} />
            <div className="homeview-desktop-wrapper">
                <div className="homeview-desktop-intro-text">
                    <h4>{HomeViewData.introText}</h4>
                </div>
                <div className="homeview-desktop-section-one">
                    <div>
                        <HomeViewSectionOneBox
                            img={djuragare}
                            headline={HomeViewData.sectionOneHeadline01}
                            paragraph={HomeViewData.sectionOneParagraph01}
                            btn={HomeViewData.sectionOneBtn01}
                            path={RoutingPath.varaEtologerView}
                        />
                    </div>
                    <div>
                        <HomeViewSectionOneBox
                            img={kliniker}
                            headline={HomeViewData.sectionOneHeadline02}
                            paragraph={HomeViewData.sectionOneParagraph02}
                            btn={HomeViewData.sectionOneBtn02}
                            path={RoutingPath.konsultuppdragView}
                            mailto={true}
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
                <HomeViewSection
                    mirror="no"
                    img={sectionTwoImg}
                    headline={HomeViewData.sectionTwoHeadline01}
                    paragraph={HomeViewData.sectionTwoParagraph01}
                    btn={HomeViewData.sectionTwoBtn01}
                    path={RoutingPath.webkurser}
                    hasExternalLink={true}

                />
                <HomeViewSection
                    mirror="yes"
                    img={sectionThreeImg}
                    headline={HomeViewData.sectionTwoHeadline02}
                    paragraph={HomeViewData.sectionTwoParagraph02}
                    btn={HomeViewData.sectionTwoBtn02}
                    path={RoutingPath.varaEtologerView}
                    hasExternalLink={false}

                />
                <HomeViewSection
                    img={sectionFourImg}
                    headline={HomeViewData.sectionTwoHeadline03}
                    paragraph={HomeViewData.sectionTwoParagraph03}
                    btn={HomeViewData.sectionTwoBtn03}
                    path={RoutingPath.forelasningView}
                    hasExternalLink={false}

                />
            </div>
        </>
    )
}