import { useState, useEffect } from "react"
import { animateScroll as scroll } from 'react-scroll'
import Axios from 'axios'

import etologerX from '../../../data/data-etologer.json'


import './ForelasningarViewDesktop.css'
import ForelasningarViewData from '../data/ForelasningarViewData'

import EtologBoxData from '../../../components/etologBox/data/EtologBoxData'

import headerImg from "../img/headerForelasningarHeight700.jpg"
import forelasningar from '../img/forelasningar.jpg'
import ForelasningarCategoriesImg from '../data/ForelasningarCategoriesImg'

import { EtologBoxDesktop } from "../../../components/etologBox/etologBoxDesktop/EtologBoxDesktop"
import { DefaulPageLayoutDesktop } from "../../../components/defaultPageLayout/defaultPageLayoutDesktop/DefaultPageLayoutDesktop"

export const ForelasningarViewDesktop = () => {

  const [filterCategory, setFilterCategory] = useState('star')
  const [etologer, setEtologer] = useState<any>(etologerX)
  // const [etologer, setEtologer] = useState<any>([])

  const fetchData = async () => {
    const { data } = await Axios.get('http://localhost:3001/etolog')
    setEtologer(data)
  }

  const selectCategory = (event: any) => {
    setFilterCategory(event)
  }

  const scrollEventHandler = (category: string) => {
    selectCategory(category)
    scroll.scrollTo(3000)
  }

  const CategoryIndex = (props: { headline?: string, paragraph: string }) => {
    return (
      <div className="forelasningar-desktop-section-two background-white font-grey">
        <h1 className="font-upper">{props.headline}</h1>
        <p className="">{props.paragraph}</p>
        <div className="forelasningar-desktop-category-select">
          <div className="forelasningar-desktop-category-select-inner">
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
      <div className="forelasningar-desktop-category-inner-box">
        <h4 className="font-upper text-shadow">
          {props.title}
        </h4>
        <img src={props.img} className="box-shadow" alt={props.title} onClick={() => scrollEventHandler(props.title)} />
      </div>
    )
  }
  const etologOuput = (etolog: any) => {
    if (etolog.lecture?.includes(filterCategory)) {
      return (<div className="vara-etolog-etolog-box" key={etolog._id}>
        <EtologBoxDesktop
          id={etolog.id}
          name={etolog.first_name + ' ' + etolog.last_name}
          img={etolog.imgId}
          description={etolog.desc}
          email={etolog.email}
          city={etolog.city}
          star={etolog.star}
          homepage={etolog.homepage}
        />
      </div>)
    } else {
      return <></>
    }
  }
  const EtologArrayStar = etologer.map((etolog: any) => {
    return etolog.star ? <div key={etolog.id}>{etologOuput(etolog)}</div> : <div key={etolog.id}></div>
  })
  const EtologArrayNoStar = etologer.map((etolog: any) => {
    return !etolog.star ? <div key={etolog.id}>{etologOuput(etolog)}</div> : <div key={etolog.id}></div>
  })

  useEffect(() => {
    // fetchData()
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }, [])

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
        {/* <Element name="etolog-box-wrapper" /> */}
        <div id="etolog-box-wrapper" className="forelasningar-desktop-etolog-box-wrapper background-white">
          {EtologArrayStar}
          {EtologArrayNoStar}
        </div>
        <p className="star-disclaimer-desktop">{EtologBoxData.starDesclaimer}</p>

      </div>
    </>
  )
}
