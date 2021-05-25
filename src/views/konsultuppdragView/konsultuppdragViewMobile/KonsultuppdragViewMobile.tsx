
import { useEffect } from "react"
import './KonsultuppdragViewMobile.css'
import konsultuppdragMobile from '../img/konsultuppdragMobile.jpg'
import djurvardag from "../img/samarbetspartners/djurvardag.jpg"


import KonsultuppdragViewData from "../data/KonsultuppdragViewData"
import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"


export const KonsultuppdragViewMobile = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }, [])

    return (
        <div className="forelasning-mobile-wrapper">
            <DefaulPageLayoutMobile
                pageTitle={KonsultuppdragViewData.pageTitle}
                pageSubheading={KonsultuppdragViewData.pageSubheading}
                pageParagraph1={KonsultuppdragViewData.pageParagraph1}
                imgMobile={konsultuppdragMobile}
                sectionTwoParagraph1={KonsultuppdragViewData.sectionTwoParagraph1}
            />
            <div className="konsultuppdrag-mobile-samarbetspartners-wrapper">
                <h2>{KonsultuppdragViewData.sectionTitle}</h2>
                <div className="konsultuppdrag-mobile-samarbetspartners-img-wrapper">
                    <a href={KonsultuppdragViewData.linkOne} target="blank"><img src={djurvardag} alt={KonsultuppdragViewData.linkOne} className="konsultuppdrag-mobile-samarbetspartners-img" /></a>
                </div>
            </div>
        </div>
    )
}
