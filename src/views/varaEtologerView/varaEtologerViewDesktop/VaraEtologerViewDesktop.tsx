import { useState } from "react"

import './VaraEtologerViewDesktop.css'

import etologErikJohansson from '../../../components/etologBox/img/etologer/etolog-Erik-Johansson.png'
import varaEtologer from '../img/etologer.png'
import VaraEtologerViewData from '../data/VaraEtologerViewData'

import etologer from '../../../data/data-etologer.json'
import city from '../../../data/data-city.json'
import categories from '../../../data/data-categories.json'

import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"
import { EtologBoxDesktop } from '../../../components/etologBox/etologBoxDesktop/EtologBoxDesktop'
import { AnyARecord } from 'node:dns'



export const VaraEtologerViewDesktop = () => {

    const [filterCategory, setFilterCategory] = useState('')

    // const handleSelectedCategoryChange = (event: any, target: keyof createNewProduct) => {
    //     const find = (productCategories.find(({ productCategoryName }) => productCategoryName === event.target.value))
    //     setProduct({ ...product, [target]: find?._id })
    // }

    // const selectCategoryB = () => {
    //     return <select onChange={(event) => handleSelectedCategoryChange(event, 'productCategory')} >
    //         {productCategories.map((x: productCategoryNameId) => <option key={x?._id}>{x?.productCategoryName}</option>)}
    //     </select>
    // }

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

    // const showLecture = () => {
    //     for (let i = 0; i < VaraEtologerViewData.lectures.length; i++) {
    //         console.log(VaraEtologerViewData.lectures)
    //         return (
    //             <option value={i}>
    //                 {VaraEtologerViewData.lectures[i]}
    //             </option>)
    //     }
    // }

    const showCategory = categories.map((x) => {

        return (
            <option value={x.category}>
                {x.category}
            </option>
        )
    })
    const showCity = city.map((city) => {
        return (
            <option value={city.key}>
                {city.value}
            </option>
        )
    })
    const EtologArray = etologer.map((etologer) => {
        if (etologer.desc.includes(filterCategory)) {
            return (
                <div className="vara-etologer-etolog-box">
                    <EtologBoxDesktop
                        id={etologer.id}
                        name={etologer.first_name + ' ' + etologer.last_name}
                        img={etologErikJohansson}
                        description={etologer.desc}
                        phone={etologer.phone}
                        email={etologer.email}
                        city={etologer.city}
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
                sectionTwoParagraph1={VaraEtologerViewData.sectionTwoParagraph1}
            />
            <div className="vara-etologer-desktop-search-box-wrapper">
                <select className="vara-etologer-select-box box-shadow">
                    <option value="0">Välj etolog...</option>
                    {showEtologer}
                </select>
                <select id="vara-etologer-select-box" className="vara-etologer-select-box box-shadow" onChange={(event) => selectCategory(event.target.value)}>
                    <option value="0">Välj kategori...</option>
                    {showCategory}
                </select>
                <select className="vara-etologer-select-box box-shadow">
                    {showCity}
                </select>
            </div>
            <div className="vara-etologer-desktop-etologer-wrapper">
                {EtologArray}
            </div>
        </div>
    )
}
