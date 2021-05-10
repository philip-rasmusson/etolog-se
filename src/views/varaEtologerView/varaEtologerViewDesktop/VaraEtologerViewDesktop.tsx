import { useState, } from "react"

import './VaraEtologerViewDesktop.css'

import varaEtologer from '../img/etologer.jpg'
import headerImg from "../img/headerVaraEtologer.jpg"

import VaraEtologerViewData from '../data/VaraEtologerViewData'

import etologer from '../../../data/data-etologer.json'
import county from '../../../data/data-county.json'
import categories from '../../../data/data-categories.json'

import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"
import { EtologBoxDesktop } from '../../../components/etologBox/etologBoxDesktop/EtologBoxDesktop'

import EtologBoxData from '../../../components/etologBox/data/EtologBoxData'

export const VaraEtologerViewDesktop = () => {

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
    const EtologArrayStar = etologer.map((etologer) => {
        if (etologer.star)
            if (etologer.categoryFilter.includes(filterCategory) && etologer.county.includes(filterCounty)) {
                return (
                    <div className="vara-etologer-etolog-box">
                        <EtologBoxDesktop
                            id={etologer.id}
                            name={etologer.first_name + ' ' + etologer.last_name}
                            img={etologer.id}
                            description={etologer.desc}
                            email={etologer.email}
                            city={etologer.city}
                            star={etologer.star}
                            homepage={etologer.homepage}
                        />
                    </div>
                )
            }
    })
    const EtologArrayNoStar = etologer.map((etologer) => {
        if (!etologer.star)
            if (etologer.categoryFilter.includes(filterCategory) && etologer.county.includes(filterCounty)) {
                return (
                    <div className="vara-etologer-etolog-box">
                        <EtologBoxDesktop
                            id={etologer.id}
                            name={etologer.first_name + ' ' + etologer.last_name}
                            img={etologer.id}
                            description={etologer.desc}
                            email={etologer.email}
                            city={etologer.city}
                            star={etologer.star}
                        />
                    </div>
                )
            }
    })
    return (
        <div className="vara-etologer-desktop-wrapper">
            <DefaulPageLayoutDesktop
                backgroundColor={VaraEtologerViewData.backgroundColor}
                pageTitle={VaraEtologerViewData.pageTitle}
                pageSubheading={VaraEtologerViewData.pageSubheading}
                pageParagraph1={VaraEtologerViewData.pageParagraph1}
                imgPlacement={VaraEtologerViewData.imgPlacement}
                img={varaEtologer}
                headerImg={headerImg}
                sectionTwoParagraph1={VaraEtologerViewData.sectionTwoParagraph1}
            />
            <div className="vara-etologer-desktop-search-box-wrapper">
                <select id="vara-etologer-select-box" className="vara-etologer-select-box" onChange={(event) => selectCategory(event.target.value)}>
                    <option value="showAll">{VaraEtologerViewData.selectCategory}</option>
                    {showCategory}
                </select>
                <select className="vara-etologer-select-box" onChange={(event) => selectCounty(event.target.value)}>
                    <option value="län">{VaraEtologerViewData.selectCounty}</option>
                    {showCounty}
                </select>
            </div>
            <div className="vara-etologer-desktop-etologer-wrapper">
                {EtologArrayStar}
                {EtologArrayNoStar}
            </div>
            <p className="star-disclaimer-desktop">{EtologBoxData.starDesclaimer}</p>
        </div>
    )
}
