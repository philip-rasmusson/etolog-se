import { useState, } from "react"

import './VaraEtologerViewDesktop.css'

import varaEtologer from '../img/etologer.jpg'
import headerImg from "../img/headerVaraEtologerHeight700.jpg"

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
    const etologOuput = (etolog: any) => {
        if (etolog.categoryFilter.includes(filterCategory) && etolog.county.includes(filterCounty))
            return (<div className="vara-etolog-etolog-box">
                <EtologBoxDesktop
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
    const EtologArrayStar = etologer.map((etolog) => {
        if (etolog.star) return <>{etologOuput(etolog)}</>
    })
    const EtologArrayNoStar = etologer.map((etolog) => {
        if (!etolog.star) return <>{etologOuput(etolog)}</>
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
