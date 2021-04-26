
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
                        img2={djuragare}
                        headline="djurägare"
                        paragraph="Vi kan hjälpa dig med ditt husdjur!
          Oavsett om du behöver hjälp med 
          vardagsträning, beteendeproblematik 
          eller förebyggande träning."
                        btn="Boka en konsultation"
                    />
                </div>
                <div>
                    <HomeViewSectionOneBox
                        img={kliniker}
                        img2={homeviewImg4}
                        headline="kliniker"
                        paragraph="För ett trovärdigt holistiskt perspektiv bör också beteenderådgivning vara lika evidensbaserad och kvalitativ som veterinärmedicinen. Erbjud professionell beteende-rådgivning på din klinik."
                        btn="Boka en konsultation"
                    />
                </div>
                <div>
                    <HomeViewSectionOneBox
                        img={verksamheter}
                        img2={homeviewImg6}
                        headline="verksamheter"
                        paragraph="Våra etologer är utbildade i djurhållning, djurhälsa och smittskydd. Vi har också kompetens inom djurskydd, försöksdesign och avelsarbete. Vi kan erbjuda din verksamhet engagerade och sakkunniga konsulter. Våra etologer har nära samarbete med veterinär."
                        btn="Boka en konsultation"
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
                    headline="webkurser"
                    paragraph="Vill du och ditt djur lära er något nytt tillsammans? Behöver du en
          rolig present att ge bort? Det kommer att komma fler och fler
          webbkurser framöver så håll utkik!"
                    btn="se våra webkurser"
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
                    headline="våra etologer"
                    paragraph="En Etolog är en person som är utbildad i djurs beteenden och orsakerna bakom dem. Etologi är en fördjupning inom ämnet zoologi (biologi). 

          Våra Etologer har en bred grundkunskap om alla djurslag och djurs beteenden. Våra medlemmar har också specialiserat inom vissa områden eller mot vissa djurarter vilket gör att vi tillsammans har en mycket stor vetenskapligt förankrad kunskapsbas. 
          
          Alla våra etologer är anslutna till yrkesorganisationen för etologer, Sveriges Akademiska Etologer (SAE). De har tydliga kunskapskrav för sitt medlemskap vilket gör att du kan känna dig trygg med vår kompetens. "
                    btn="till våra etologer"
                />
            </div>
            <div className="border"></div>
            <div className="section-margin homeview-desktop-section-four">
                <HomeViewSection
                    img={sectionFourImg}
                    headline="föreläsningar"
                    paragraph="Vi skräddarsyr föreläsningen för dig! Alla våra föreläsare är utbildade etologer med god kompetens i sitt ämne. Vad vill du veta mer om? Hur lång föreläsning vill du ha? En serie på fler tillfällen? Workshop?

          Maila oss dina önskemål så tar vi fram ett koncept som fungerar för dig och din verksamhet. Vi erbjuder föreläsningar och kurser i djurhållning, djurhälsa, etologi, djurskydd och det mesta annat som rör djur"
                    btn="till föreläsningar"
                />
            </div>
        </div>
    )
}