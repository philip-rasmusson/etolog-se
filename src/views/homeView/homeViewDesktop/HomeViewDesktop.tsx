
import './HomeViewDesktop.css'
import djuragare from '../img/djuragare.png'
import kliniker from '../img/kliniker.png'
import verksamheter from '../img/verksamheter.png'
import homeviewImg from '../img/homeviewImg.png'
import homeviewImg2 from '../img/homeviewImg3.jpg'
import homeviewImg4 from '../img/homeviewImg4.jpg'
import homeviewImg6 from '../img/homeviewImg6.jpg'
import sectionTwoImg from '../img/dog-2983021_1920.jpg'
import sectionThreeImg from '../img/etolog-Johanna-Strandner.jpg'
import sectionFourImg from '../img/cat.jpg'

import HomeViewData from '../data/HomeViewData'

export const HomeViewDesktop = () => {
    const HomeViewSectionOneBox = (props: { img?: string, img2?: string, headline?: string, paragraph?: string, display?: string, btn?: string }) => {
        return (
            <>
                <div className="homeview-desktop-section-one-box">
                    <img src={props.img} alt="" className="homeview-desktop-img-desktop"></img>
                    <h2>{props.headline}</h2>
                    <p>{props.paragraph}</p>
                    <button className="homeview-desktop-button">{props.btn}</button>
                </div>
            </>
        )
    }
    const HomeViewSection = (props: { mirror?: string, headline?: string, paragraph?: string, btn?: string, img?: string }) => {
        return (
            <div>
                {props.mirror === 'yes' ? (
                    <div className="homeview-desktop-section-container sectionMirror">
                        <div className="homeview-desktop-section-right">
                            <h3>{props.headline}</h3>
                            <p>{props.paragraph}</p>
                            <button>{props.btn}</button>
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
                                <button>{props.btn}</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    return (
        <div className="homeview-desktop-body">
            <div className="homeview-desktop-section-one">
                <div>
                    <HomeViewSectionOneBox
                        display="hidden"
                        img={djuragare}
                        headline={HomeViewData.sectionOneHeadline01}
                        paragraph={HomeViewData.sectionOneParagraph01}
                        btn={HomeViewData.sectionOneBtn01}
                    />
                </div>
                <div>
                    <HomeViewSectionOneBox
                        img={kliniker}
                        headline={HomeViewData.sectionOneHeadline02}
                        paragraph={HomeViewData.sectionOneParagraph02}
                        btn={HomeViewData.sectionOneBtn02}
                    />
                </div>
                <div>
                    <HomeViewSectionOneBox
                        img={verksamheter}
                        headline={HomeViewData.sectionOneHeadline03}
                        paragraph={HomeViewData.sectionOneParagraph03}
                        btn={HomeViewData.sectionOneBtn03}
                    />
                </div>
            </div>
            <img
                src={homeviewImg}
                alt=""
                className="section-margin homeview-desktop-body-img"
            ></img>
            <div className="section-margin homeViewSectionTwo">
                <HomeViewSection
                    img={sectionTwoImg}
                    headline={HomeViewData.sectionTwoHeadline01}
                    paragraph={HomeViewData.sectionTwoParagraph01}
                    btn={HomeViewData.sectionTwoBtn01}
                />
            </div>
            <div className="border"></div>
            <img
                src={homeviewImg2}
                alt=""
                className="section-margin homeview-desktop-body-img2"
            ></img>
            <div className="section-margin homeViewSectionThree">
                <HomeViewSection
                    mirror="yes"
                    img={sectionThreeImg}
                    headline={HomeViewData.sectionTwoHeadline02}
                    paragraph={HomeViewData.sectionTwoParagraph02}
                    btn={HomeViewData.sectionTwoBtn02}
                />
            </div>
            <div className="border"></div>
            <div className="section-margin homeview-desktop-section-four">
                <HomeViewSection
                    img={sectionFourImg}
                    headline={HomeViewData.sectionTwoHeadline03}
                    paragraph={HomeViewData.sectionTwoParagraph03}
                    btn={HomeViewData.sectionTwoBtn03}
                />
            </div>
        </div>
    )
}