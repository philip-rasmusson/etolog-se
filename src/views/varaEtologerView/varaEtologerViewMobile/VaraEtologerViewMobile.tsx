import './VaraEtologerViewMobile.css'
import etologErikJohansson from '../../../components/etologBox/img/etologer/etolog-Erik-Johansson.png'
import etologerMobile from '../img/etologerMobile.png'
import VaraEtologerViewData from '../data/VaraEtologerViewData'


import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"

import etologer from '../../../data/data-etologer.json'
import { EtologBoxMobile } from '../../../components/etologBox/etologBoxMobile/EtologBoxMobile'

export const VaraEtologerViewMobile = () => {
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
                    <EtologBoxMobile
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
        <div className="vara-etologer-mobile-wrapper">
            <DefaulPageLayoutMobile
                pageTitle={VaraEtologerViewData.pageTitle}
                pageSubheading={VaraEtologerViewData.pageSubheading}
                paragraph={VaraEtologerViewData.paragraph}
                imgMobile={etologerMobile}
                paragraphOne={VaraEtologerViewData.paragraphOne}
            // paragraphTwo={VaraEtologerViewData.paragraphTwo}
            />
            <div className="vara-etologer-mobile-etologbox-wrapper">
                {EtologArray}
            </div>
            <div className="vara-etologer-mobile-button">
                <button>Till toppen</button>
            </div>
        </div>
    )
}

