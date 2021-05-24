import { useState } from "react"
import { animateScroll as scroll } from 'react-scroll'

import './ForelasningarViewMobile.css'
import forelasningarMobile from '../img/forelasningarMobile.jpg'
import ForelasningarViewData from "../data/ForelasningarViewData"

import etologer from '../../../data/data-etologer.json'
import EtologBoxData from '../../../components/etologBox/data/EtologBoxData'

import ForelasningarCategoriesImg from '../data/ForelasningarCategoriesImg'


import { EtologBoxMobile } from "../../../components/etologBox/etologBoxMobile/EtologBoxMobile"
import { DefaulPageLayoutMobile } from "../../../components/defaultPageLayout/defaultPageLayoutMobile/DefaultPageLayoutMobile"


export const ForelasningarViewMobile = () => {

  const [filterCategory, setFilterCategory] = useState('')

  const selectCategory = (event: any) => {
    setFilterCategory(event)
  }

  const scrollEventHandler = (category: string) => {
    selectCategory(category)
    scroll.scrollTo(1800)
  }

  const CategoryIndex = (props: { paragraph: string }) => {
    return (
      <div className="forelasningar-mobile-section-two background-white font-grey">
        <p className="">{props.paragraph}</p>
        <div className="forelasningar-mobile-category-select">
          <div className="forelasningar-mobile-category-select-inner">
            <CategoryInnerBox title={ForelasningarViewData.categoryHund} img={ForelasningarCategoriesImg.Hund} />
            <CategoryInnerBox title={ForelasningarViewData.categoryHast} img={ForelasningarCategoriesImg.Hast} />
            <CategoryInnerBox title={ForelasningarViewData.categoryEtologi} img={ForelasningarCategoriesImg.Etologi} />
            <CategoryInnerBox title={ForelasningarViewData.categoryKatt} img={ForelasningarCategoriesImg.Katt} />
            <CategoryInnerBox title={ForelasningarViewData.categoryKaninSmagnagare} img={ForelasningarCategoriesImg.Smadjur} />
            <CategoryInnerBox title={ForelasningarViewData.categoryDjurtraning} img={ForelasningarCategoriesImg.Djurtranig} />
            <CategoryInnerBox title={ForelasningarViewData.categoryReptil} img={ForelasningarCategoriesImg.Reptil} />
            <CategoryInnerBox title={ForelasningarViewData.categoryExotiska} img={ForelasningarCategoriesImg.Exotiska} />
            <CategoryInnerBox title={ForelasningarViewData.categoryLantbruketsDjur} img={ForelasningarCategoriesImg.LantbruketsDjur} />
            <CategoryInnerBox title={ForelasningarViewData.categoryRovdjur} img={ForelasningarCategoriesImg.Rovdjur} />
            <CategoryInnerBox title={ForelasningarViewData.categoryFaglar} img={ForelasningarCategoriesImg.Faglar} />
            <CategoryInnerBox title={ForelasningarViewData.categoryDjurskydd} img={ForelasningarCategoriesImg.Djurskydd} />
          </div>
        </div>
      </div>
    )
  }

  const CategoryInnerBox = (props: { title: string, img: string, }) => {
    return (
      <div className="forelasningar-mobile-category-inner-box">
        <h4 className="font-upper text-shadow" onClick={(event) => selectCategory(props.title)}>
          {props.title}
        </h4>
        <img src={props.img} className="box-shadow" alt={props.title} onClick={(event) => scrollEventHandler(props.title)} />
      </div>
    )
  }
  const ShowEtologer = etologer.map((etologer) => {
    if (etologer.lecture?.includes(filterCategory)) {
      return (
        <div className="vara-etologer-etolog-box" key={etologer.id}>
          <EtologBoxMobile
            id={etologer.id}
            name={etologer.first_name + ' ' + etologer.last_name}
            img={etologer.id}
            description={etologer.desc}
            email={etologer.email}
            city={etologer.city}
            homepage={etologer.homepage}
          />
        </div>
      )
    } else {
      return <div key={etologer.id}></div>
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
        <p className="star-disclaimer-mobile">{EtologBoxData.starDesclaimer}</p>

        {/* <button onClick={() => setFilterCategory('')} >Visa alla etologer</button> */}
      </div>
    </>
  )
}
