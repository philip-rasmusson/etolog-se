import './ForelasningarViewMobile.css'
import forelasningarMobile from '../img/forelasningarMobile.jpg'
import ForelasningarViewData from "../data/ForelasningarViewData"
import etologErikJohansson from '../../../components/etologBox/img/etologer/etolog-Erik-Johansson.png'

import etologer from '../../../data/data-etologer.json'

import categoryGris from "../img/CategoryBox/category-gris.jpg"
import categoryHund from "../img/CategoryBox/category-hund.jpg"
import categoryHast from "../img/CategoryBox/category-hast.jpg"
import categoryKatt from "../img/CategoryBox/category-katt.jpg"
import categoryKanin from "../img/CategoryBox/category-kanin.jpg"
import categorySmadjur from "../img/CategoryBox/category-smadjur.jpg"

import { EtologBoxMobile } from "../../../components/etologBox/etologBoxMobile/EtologBoxMobile"
import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"


export const ForelasningarViewMobile = () => {
  const CategoryIndex = (props: { headline: string, paragraph: string }) => {
    return (
      <div className="forelasningar-mobile-section-two">
        <h1 className="font-upper">{props.headline}</h1>
        <p className="">{props.paragraph}</p>
        <div className="forelasningar-mobile-category-select">
          <div className="forelasningar-mobile-category-select-inner">
            <CategoryInnerBox title={ForelasningarViewData.category01} img={categoryHund} />
            <CategoryInnerBox title={ForelasningarViewData.category02} img={categoryHast} />
            <CategoryInnerBox title={ForelasningarViewData.category03} img={categoryGris} />
            <CategoryInnerBox title={ForelasningarViewData.category04} img={categoryKatt} />
            <CategoryInnerBox title={ForelasningarViewData.category05} img={categoryKanin} />
            <CategoryInnerBox title={ForelasningarViewData.category06} img={categorySmadjur} />
          </div>
        </div>
      </div>
    )
  }
  const CategoryInnerBox = (props: { title: string, img: string, }) => {
    return (
      <div className="forelasningar-mobile-category-inner-box">
        <div className="forelasningar-mobile-vertical-center">
          <h4 className="font-color-white font-upper text-shadow">
            {props.title}
          </h4>
        </div>
        <img src={props.img} className="box-shadow" alt={props.title} />
      </div>
    )
  }
  const ShowEtologer = etologer.map((etologer) => {
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
    <>
      <DefaulPageLayoutMobile
        pageTitle={ForelasningarViewData.pageTitle}
        pageSubheading={ForelasningarViewData.pageSubheading}
        paragraph={ForelasningarViewData.paragraph}
        imgMobile={forelasningarMobile}
        paragraphOne={ForelasningarViewData.paragraphOne}
        paragraphTwo={ForelasningarViewData.paragraphTwo}
      />
      <div className="forelasningar-mobile-wrapper">
        <CategoryIndex
          headline={ForelasningarViewData.categoryIndexHeadline}
          paragraph={ForelasningarViewData.categoryIndexHParagraph}
        />
        <div className="forelasningar-mobile-etolog-box-wrapper">
          {ShowEtologer}
        </div>
      </div>
    </>
  )
}
