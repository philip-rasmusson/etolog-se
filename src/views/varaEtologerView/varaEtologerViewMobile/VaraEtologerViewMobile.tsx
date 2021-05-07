import { useState } from "react"

import './VaraEtologerViewMobile.css'
import etologErikJohansson from '../../../components/etologBox/img/etologerOld/etolog-Erik-Johansson.png'
import etologerMobile from '../img/etologerMobile.png'
import VaraEtologerViewData from '../data/VaraEtologerViewData'

import etologer from '../../../data/data-etologer.json'
import categories from '../../../data/data-categories.json'


import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"
import { EtologBoxMobile } from '../../../components/etologBox/etologBoxMobile/EtologBoxMobile'

export const VaraEtologerViewMobile = () => {

    const [filterCategory, setFilterCategory] = useState('')

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const selectCategory = (event: any) => {
        setFilterCategory(event)
    }
    const showEtologer = etologer.map((etologer) => {
        return (
            <option value={etologer.id}>
                {etologer.first_name} {etologer.last_name}
            </option>
        )
    })
    const showCategory = categories.map((category) => {

        return (
            <option value={category.category}>
                {category.category}
            </option>
        )
    })
    // const showCity = etologer.map((etologer) => {
    //     return (
    //         <option value={etologer.city}>
    //             {etologer.city}
    //         </option>
    //     )
    // })
    // const ShowEtologer = etologer.map((etologer) => {
    //     return (
    //         <option value={etologer.id}>
    //             {etologer.first_name} {etologer.last_name}
    //         </option>
    //     )
    // })
    const EtologArray = etologer.map((etologer) => {
        if (etologer.desc.includes(filterCategory)) {
            return (
                <div className="vara-etologer-etolog-box">
                    <EtologBoxMobile
                        id={etologer.id}
                        name={etologer.first_name + ' ' + etologer.last_name}
                        img={etologErikJohansson}
                        description={etologer.desc}
                        email={etologer.email}
                        city={etologer.city}
                    />
                </div>
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
                {/* <select className="vara-etologer-select-box box-shadow">
                    <option value="0">Välj etolog...</option>
                    {showEtologer}
                </select> */}
                <select className="vara-etologer-select-box box-shadow" onChange={(event) => selectCategory(event.target.value)}>
                    <option value="">Välj kategori...</option>
                    {showCategory}
                </select>
                {/* <select className="vara-etologer-select-box box-shadow">
                    <option value="0">Välj stad...</option>
                    {showCity}
                </select> */}
            </div>
            <div className="vara-etologer-mobile-etologbox-wrapper">
                {EtologArray}
            </div>
            <div className="vara-etologer-mobile-button">
                <button onClick={() => scrollToTop()}>Till toppen</button>
            </div>
        </div>
    )
}

