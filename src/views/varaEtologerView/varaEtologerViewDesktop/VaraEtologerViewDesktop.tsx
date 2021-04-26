import './VaraEtologerViewDesktop.css'

import etologErikJohansson from '../../../components/etologBox/img/etologer/etolog-Erik-Johansson.png'
import varaEtologer from '../img/etologer.jpg'
import VaraEtologerViewData from '../data/VaraEtologerViewData'

import etologer from '../../../data/data-etologer.json'

import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"
import { EtologBoxDesktop } from '../../../components/etologBox/etologBoxDesktop/EtologBoxDesktop'



export const VaraEtologerViewDesktop = () => {
    const ShowEtologer = etologer.map((etologer) => {
        return (
            <option value={etologer.id}>
                {etologer.first_name} {etologer.last_name}
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
                paragraph={VaraEtologerViewData.paragraph}
                imgPlacement={VaraEtologerViewData.imgPlacement}
                img={varaEtologer}
                paragraphOne={VaraEtologerViewData.paragraphOne}
                paragraphTwo={VaraEtologerViewData.paragraphTwo}
            />
            <div className="vara-etologer-desktop-etologer-wrapper">
                {EtologArray}
            </div>
        </div>
    )
}
