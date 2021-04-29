import './ForelasningarViewMobile.css'
import forelasningarMobile from '../img/forelasningarMobile.jpg'
import ForelasningarViewData from "../data/ForelasningarViewData"
import etologErikJohansson from '../../../components/etologBox/img/etologer/etolog-Erik-Johansson.png'

import etologer from '../../../data/data-etologer.json'

import categoryGris from "../img/CategoryBox/category-gris.jpg"
import categoryHund from "../img/CategoryBox/category-hund.jpg"
import categoryHast from "../img/CategoryBox/category-hast.jpg"
import categoryKatt from "../img/CategoryBox/category-katt.jpg"
import categorySmadjur from "../img/CategoryBox/category-smadjur.jpg"
import categoryEtologi from "../img/CategoryBox/category-etologi.jpg"
import categoryDjurtranig from "../img/CategoryBox/category-djurtraning.jpg"
import categoryReptil from "../img/CategoryBox/category-reptil.jpg"
import categoryExotiska from "../img/CategoryBox/category-exotiska.jpg"
import categoryRovdjur from "../img/CategoryBox/category-rovdjur.jpg"
import categoryFaglar from "../img/CategoryBox/category-faglar.jpg"

import { EtologBoxMobile } from "../../../components/etologBox/etologBoxMobile/EtologBoxMobile"
import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"


export const ForelasningarViewMobile = () => {
  const CategoryIndex = (props: { paragraph: string }) => {
    return (
      <div className="forelasningar-mobile-section-two background-white font-grey">
        <p className="">{props.paragraph}</p>
        <div className="forelasningar-mobile-category-select">
          <div className="forelasningar-mobile-category-select-inner">
            <CategoryInnerBox title={ForelasningarViewData.category01} img={categoryHund} />
            <CategoryInnerBox title={ForelasningarViewData.category02} img={categoryHast} />
            <CategoryInnerBox title={ForelasningarViewData.category03} img={categoryEtologi} />
            <CategoryInnerBox title={ForelasningarViewData.category04} img={categoryKatt} />
            <CategoryInnerBox title={ForelasningarViewData.category05} img={categorySmadjur} />
            <CategoryInnerBox title={ForelasningarViewData.category06} img={categoryDjurtranig} />
            <CategoryInnerBox title={ForelasningarViewData.category07} img={categoryReptil} />
            <CategoryInnerBox title={ForelasningarViewData.category08} img={categoryExotiska} />
            <CategoryInnerBox title={ForelasningarViewData.category09} img={categoryGris} />
            <CategoryInnerBox title={ForelasningarViewData.category11} img={categoryRovdjur} />
            <CategoryInnerBox title={ForelasningarViewData.category10} img={categoryFaglar} />
          </div>
        </div>
      </div>
    )
  }
  const CategoryInnerBox = (props: { title: string, img: string, }) => {
    return (
      <div className="forelasningar-mobile-category-inner-box">
        <h4 className="font-upper text-shadow">
          {props.title}
        </h4>
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
        pageParagraph1={ForelasningarViewData.pageParagraph1}
        imgMobile={forelasningarMobile}
        sectionTwoParagraph1={ForelasningarViewData.sectionTwoParagraph1}
      />
      <div className="forelasningar-mobile-wrapper background-white">
        <CategoryIndex
          paragraph={ForelasningarViewData.categoryIndexHParagraph}
        />
        <div className="forelasningar-mobile-etolog-box-wrapper background-white">
          {ShowEtologer}
        </div>
      </div>
    </>
  )
}
