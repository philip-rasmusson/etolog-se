import { useState } from "react"

import './VaraEtologerViewDesktop.css'

import etologErikJohansson from '../../../components/etologBox/img/etologerOld/etolog-Erik-Johansson.png'
import varaEtologer from '../img/etologer.jpg'
import headerImg from "../img/headerVaraEtologer.jpg"

import VaraEtologerViewData from '../data/VaraEtologerViewData'

import etologer from '../../../data/data-etologer.json'
import cities from '../../../data/data-city.json'
import categories from '../../../data/data-categories.json'

import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"
import { EtologBoxDesktop } from '../../../components/etologBox/etologBoxDesktop/EtologBoxDesktop'

import AnnaHarenius from '../../../components/etologBox/img/etologer/Anna-Harenius.jpg'
import AnnaRoos from '../../../components/etologBox/img/etologer/Anna-Roos.jpg'



export const VaraEtologerViewDesktop = () => {

    const [filterName, setFilterName] = useState('')
    const [filterCategory, setFilterCategory] = useState('')
    const [filterCity, setFilterCity] = useState('')


    const selectName = (event: any) => {
        setFilterName(event)
    }
    const selectCategory = (event: any) => {
        setFilterCategory(event)
    }
    const selectCity = (event: any) => {
        setFilterCity(event)
    }


    // const showName = etologer.map((etologer) => {
    //     return (
    //         <option value={etologer.id}>
    //             {etologer.first_name} {etologer.last_name}
    //         </option>
    //     )
    // })

    const showCategory = categories.map((category) => {

        return (
            <option value={category.category}>
                {category.category}
            </option>
        )
    })
    // const showCity = cities.map((city) => {
    //     return (
    //         <option value={city.city}>
    //             {city.city}
    //         </option>
    //     )
    // })
    const EtologArray = etologer.map((etologer) => {
        if (etologer.desc.includes(filterCategory)) {
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
                {/* <select className="vara-etologer-select-box box-shadow" onChange={(event) => selectName(event.target.value)}>
                    <option value="0">Välj etolog...</option>
                    {showName}
                </select> */}
                <select id="vara-etologer-select-box" className="vara-etologer-select-box box-shadow" onChange={(event) => selectCategory(event.target.value)}>
                    <option value=" ">Välj kategori...</option>
                    {showCategory}
                </select>
                {/* <select className="vara-etologer-select-box box-shadow" onChange={(event) => selectCity(event.target.value)}>
                    <option value="0">Välj stad...</option>
                    {showCity}
                </select> */}
            </div>
            <div className="vara-etologer-desktop-etologer-wrapper">
                {EtologArray}
            </div>
        </div>
    )
}
