import './VaraEtologerViewDesktop.css'

import etologErikJohansson from '../../../components/etologBox/img/etologer/etolog-Erik-Johansson.png'
import varaEtologer from '../img/etologer.png'
import VaraEtologerViewData from '../data/VaraEtologerViewData'

import etologer from '../../../data/data-etologer.json'

import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"
import { EtologBoxDesktop } from '../../../components/etologBox/etologBoxDesktop/EtologBoxDesktop'



export const VaraEtologerViewDesktop = () => {
    const showEtologer = etologer.map((etologer) => {
        return (
            <option value={etologer.id}>
                {etologer.first_name} {etologer.last_name}
            </option>
        )
    })
    const showCategory = etologer.map((etologer) => {
        return (
            <option value={etologer.id}>
                {etologer.lecture}
            </option>
        )
    })
    const showCity = etologer.map((etologer) => {
        return (
            <option value={etologer.city}>
                {etologer.city}
            </option>
        )
    })
    const EtologArray = etologer.map((etologer) => {
        if (etologer.id < 7) {
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
                <select className="vara-etologer-select-box box-shadow">
                    <option value="0">Välj kategori...</option>
                    {showCategory}
                </select>
                <select className="vara-etologer-select-box box-shadow">
                    <option value="0">Välj stad...</option>
                    {showCity}
                </select>
            </div>
            <div className="vara-etologer-desktop-etologer-wrapper">
                {EtologArray}
            </div>
        </div>
    )
}
