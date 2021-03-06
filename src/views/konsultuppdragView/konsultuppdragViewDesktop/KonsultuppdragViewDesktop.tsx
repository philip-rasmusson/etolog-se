import { useEffect } from "react"
import './KonsultuppdragViewDesktop.css'
import headerImg from "../img/headerKonsultuppdragHeight700b.jpg"
import djurvardag from "../img/samarbetspartners/djurvardag.jpg"
import bottomImg from "../img/bottomImg.png"

import konsultuppdrag from '../img/konsultuppdrag.jpg'

import KonsultuppdragViewData from '../data/KonsultuppdragViewData'

import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"

export const KonsultuppdragViewDesktop = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }, [])
    return (
        <div>
            <DefaulPageLayoutDesktop
                backgroundColor={KonsultuppdragViewData.backgroundColor}
                pageTitle={KonsultuppdragViewData.pageTitle}
                pageSubheading={KonsultuppdragViewData.pageSubheading}
                pageParagraph1={KonsultuppdragViewData.pageParagraph1}
                imgPlacement={KonsultuppdragViewData.imgPlacement}
                img={konsultuppdrag}
                headerImg={headerImg}
                sectionTwoParagraph1={KonsultuppdragViewData.sectionTwoParagraph1}
            />
            <div className="konsultuppdrag-desktop-samarbetspartners-wrapper">
                <h2>{KonsultuppdragViewData.sectionTitle}</h2>
                <div className="konsultuppdrag-desktop-samarbetspartners-img-wrapper">
                    <a href={KonsultuppdragViewData.linkOne} target="blank"><img src={djurvardag} alt={KonsultuppdragViewData.linkOne} className="konsultuppdrag-desktop-samarbetspartners-img" /></a>
                </div>
            </div>
            <img className="kontulsuppdrag-desktop-bottom-img" src={bottomImg} alt="error" />
        </div>
    )
}

