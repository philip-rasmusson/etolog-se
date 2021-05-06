import './DefaultPageLayoutDesktop.css'

import { HeaderDesktop } from "../../header/headerDesktop/HeaderDesktop"

export const DefaulPageLayoutDesktop = (props: { pageTitle?: string, pageSubheading?: string, pageParagraph1?: string, pageParagraph2?: string, imgPlacement?: string, backgroundColor?: any, img?: string, headerImg?: any, sectionTwoParagraph1?: string, sectionTwoParagraph2?: string, imgAlt?: string }) => {

  const SectionOne = (props: { pageTitle?: string, pageSubheading?: string, pageParagraph1?: string, pageParagraph2?: string }) => {
    return (
      <div className="default-page-desktop-section-one-wrapper font-grey">
        <h1>{props.pageTitle}</h1>
        <h4>{props.pageSubheading}</h4>
        <div>
          <p>{props.pageParagraph1}</p>
          <p>{props.pageParagraph2}</p>
        </div>
      </div>
    )
  }

  const SectionTwo = (props: { imgPlacement?: string, backgroundColor?: any, img?: string, sectionTwoParagraph1?: string, sectionTwoParagraph2?: string, imgAlt?: string }) => {
    return (
      <>
        {props.imgPlacement === 'left' ? (
          <div className="default-page-desktop-section-two">
            <div className="default-page-desktop-section-two-box" style={props.backgroundColor}>
              <div className="default-page-desktop-section-two-box-left">
                <img src={props.img} alt=""></img>
              </div>
              <div className="default-page-desktop-section-two-box-right">
                <div>
                  <p>{props.sectionTwoParagraph1}</p>
                  <br />
                  <p>{props.sectionTwoParagraph2}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="default-page-desktop-section-two">
            <div className="default-page-desktop-section-two-box" style={props.backgroundColor}>
              <div className="default-page-desktop-section-two-box-right">
                <div>
                  <p>{props.sectionTwoParagraph1}</p>
                  <br />
                  <p>{props.sectionTwoParagraph2}</p>
                </div>
              </div>
              <div className="default-page-desktop-section-two-box-left">
                <img src={props.img} alt={props.imgAlt}></img>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
  return (
    <>
      <HeaderDesktop headerImg={props.headerImg} />
      <div className="default-page-desktop-wrapper background-white">
        <SectionOne
          pageTitle={props.pageTitle}
          pageSubheading={props.pageSubheading}
          pageParagraph1={props.pageParagraph1}
          pageParagraph2={props.pageParagraph2}
        />
        <SectionTwo
          backgroundColor={props.backgroundColor}
          imgPlacement={props.imgPlacement}
          img={props.img}
          sectionTwoParagraph1={props.sectionTwoParagraph1}
          sectionTwoParagraph2={props.sectionTwoParagraph2}
        />
      </div></>
  )
}
