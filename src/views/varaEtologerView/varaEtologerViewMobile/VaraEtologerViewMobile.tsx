import { useState } from "react"

import './VaraEtologerViewMobile.css'

import etologerMobile from '../img/etologerMobile.png'
import VaraEtologerViewData from '../data/VaraEtologerViewData'

import etologer from '../../../data/data-etologer.json'
import county from '../../../data/data-county.json'
import categories from '../../../data/data-categories.json'

import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"
import { EtologBoxMobile } from '../../../components/etologBox/etologBoxMobile/EtologBoxMobile'

import EtologBoxData from '../../../components/etologBox/data/EtologBoxData'


export const VaraEtologerViewMobile = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const [filterCategory, setFilterCategory] = useState('showAll')
    const [filterCounty, setFilterCounty] = useState('län')

    const selectCategory = (event: any) => {
        setFilterCategory(event)
    }
    const selectCounty = (event: any) => {
        setFilterCounty(event)
    }
    const showCategory = categories.map((category) => {
        return (
            <option value={category.category}>
                {category.category}

            </option>
        )
    })
    const showCounty = county.map((county) => {
        return (
            <option value={county.county}>
                {county.county}
            </option>
        )
    })
    const etologOuput = (etolog: any) => {
        return (<div className="vara-etolog-etolog-box">
            <EtologBoxMobile
                id={etolog.id}
                name={etolog.first_name + ' ' + etolog.last_name}
                img={etolog.id}
                description={etolog.desc}
                email={etolog.email}
                city={etolog.city}
                star={etolog.star}
                homepage={etolog.homepage}
            />
        </div>)
    }
    const etologArrayWithStar = etologer.map((etolog) => {
        if (etolog.star)
            if (etolog.categoryFilter.includes(filterCategory) && etolog.county.includes(filterCounty)) {
                return (
                    <>
                        {etologOuput(etolog)}
                    </>
                )
            }
    })
    const etologArrayNoStar = etologer.map((etolog) => {
        if (!etolog.star)
            if (etolog.categoryFilter.includes(filterCategory) && etolog.county.includes(filterCounty)) {
                return (
                    <>
                        {etologOuput(etolog)}
                    </>
                )
            }
    })
    return (
        <div className="vara-etologer-mobile-wrapper" id="vara-etologer-mobile-id">
            <DefaulPageLayoutMobile
                pageTitle={VaraEtologerViewData.pageTitle}
                pageSubheading={VaraEtologerViewData.pageSubheading}
                pageParagraph1={VaraEtologerViewData.pageParagraph1}
                imgMobile={etologerMobile}
                sectionTwoParagraph1={VaraEtologerViewData.sectionTwoParagraph1}
            // paragraphTwo={VaraEtologerViewData.paragraphTwo}
            />
            <div className="vara-etologer-mobile-search-box-wrapper">
                <select className="vara-etologer-select-box" onChange={(event) => selectCategory(event.target.value)}>
                    <option value="showAll">{VaraEtologerViewData.selectCategory}</option>
                    {showCategory}
                </select>
                <select className="vara-etologer-select-box" onChange={(event) => selectCounty(event.target.value)}>
                    <option value="län">{VaraEtologerViewData.selectCounty}</option>
                    {showCounty}
                </select>
            </div>
            <div className="vara-etologer-mobile-etologbox-wrapper">
                {etologArrayWithStar}
                {etologArrayNoStar}
            </div>
            <div className="vara-etologer-mobile-button">
                <button onClick={() => scrollToTop()}>Till toppen</button>
            </div>
            <p className="star-disclaimer-mobile">{EtologBoxData.starDesclaimer}</p>

        </div>
    )
}

