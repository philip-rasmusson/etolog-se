import './FooterDesktop.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '../../../../node_modules/@fortawesome/free-brands-svg-icons'

export const FooterDesktop = () => {
  return (
    <div className="footer-desktop-body">
      <div className="footer-desktop-container">
        <div className="footer-desktop-container-left">
          <h1>OM OSS</h1>
          <p>
            Etolog.se lanserades den 1 oktober 2018 och drivs genom företaget
            Yoma Consulting AB, ett konsultbolag verksamma inom
            veterinärbranschen. Idén bakom konceptet var att samla etologer för
            att djurägare och företag lättare skulle hitta rätt när man behöver
            hjälp med sitt djur eller stöd i sin verksamhet. Vi vill att fler
            ska förstå vad en etolog gör och när man kan ta hjälp av en etolog.
            <br />
            <br />
            För både verksamheter och enskilda djurägare blir vår plattform en
            rikstäckande mötesplats som underlättar kontakten med yrkesverksamma
            etologer. Idag har vi etologer från Malmö i söder till Sundsvall i
            norr! Vi erbjuder etologkonsulter för olika verksamheter inom
            djursektorn, anordnar onlinekurser, konsulterar djurägare och
            föreläser om djursbeteenden.
          </p>
        </div>
        <div className="footer-desktop-container-right">
          <h2 className="footer-desktop-container-right-boka">BOKA</h2>
          <div className="footer-desktop-container-right-social-media">
            <div>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
      </div>
      <p className="footer-desktop-copyright">©2021 All Rights Reserved - Yoma Consulting</p>
    </div>
  )
}

