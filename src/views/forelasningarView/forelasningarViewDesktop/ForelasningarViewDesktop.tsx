import { useState } from "react"

import { imgEtologer } from "../../../data/imgEtologer"

import './ForelasningarViewDesktop.css'
import ForelasningarViewData from '../data/ForelasningarViewData'


import etologer from '../../../data/data-etologer.json'
import EtologBoxData from '../../../components/etologBox/data/EtologBoxData'

import headerImg from "../img/headerForelasningar.jpg"
import forelasningar from '../img/forelasningar.jpg'
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
import categoryDjurskydd from "../img/CategoryBox/category-djurskydd.jpg"

import categories from '../../../data/data-categories.json'

import { EtologBoxDesktop } from "../../../components/etologBox/etologBoxDesktop/EtologBoxDesktop"
import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"

export const ForelasningarViewDesktop = () => {

  const [filterCategory, setFilterCategory] = useState('star')

  const selectCategory = (event: any) => {
    setFilterCategory(event)
  }

  const CategoryIndex = (props: { headline?: string, paragraph: string }) => {
    return (
      <div className="forelasningar-desktop-section-two background-white font-grey">
        <h1 className="font-upper">{props.headline}</h1>
        <p className="">{props.paragraph}</p>
        <div className="forelasningar-desktop-category-select">
          <div className="forelasningar-desktop-category-select-inner">
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
            <CategoryInnerBox title={ForelasningarViewData.category12} img={categoryDjurskydd} />
          </div>
        </div>
      </div>
    )
  }
  const CategoryInnerBox = (props: { title: string, img: string, }) => {
    return (
      <div className="forelasningar-desktop-category-inner-box">
        <h4 className="font-upper text-shadow">
          {props.title}
        </h4>
        <img src={props.img} className="box-shadow" alt={props.title} onClick={(event) => selectCategory(props.title)} />
      </div>
    )
  }
  const ShowEtologer = etologer.map((etologer) => {
    if (etologer.lecture?.includes(filterCategory)) {
      return (
        <div className="forelasningar-desktop-etolog-box">
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
    <>
      <DefaulPageLayoutDesktop
        backgroundColor={ForelasningarViewData.backgroundColor}
        pageTitle={ForelasningarViewData.pageTitle}
        pageSubheading={ForelasningarViewData.pageSubheading}
        pageParagraph1={ForelasningarViewData.pageParagraph1}
        imgPlacement={ForelasningarViewData.imgPlacement}
        img={forelasningar}
        headerImg={headerImg}
        sectionTwoParagraph1={ForelasningarViewData.sectionTwoParagraph1}
      />
      <div className="forelasningar-desktop-wrapper background-white">
        <CategoryIndex
          paragraph={ForelasningarViewData.categoryIndexHParagraph}
        />
        <div className="forelasningar-desktop-selectbox-wrapper">
        </div>
        <div className="forelasningar-desktop-etolog-box-wrapper background-white">
          {ShowEtologer}
        </div>
        <p className="star-disclaimer-desktop">{EtologBoxData.starDesclaimer}</p>

      </div>
    </>
  )
}
