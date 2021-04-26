import './VaraEtologerViewMobile.css'
import etologErikJohansson from '../../../components/etologBox/img/etologer/etolog-Erik-Johansson.png'
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
        <div>
            {EtologArray}
        </div>
    )
}