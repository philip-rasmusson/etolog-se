import './DefaultPageLayoutMobile.css'

export const DefaulPageLayoutMobile = (props: { pageTitle?: string, pageSubheading?: string, pageParagraph1?: string, imgPlacement?: string, backgroundColor?: any, sectionTwoParagraph1?: string, imgMobile?: string, imgMobileAlt?: string }) => {
  const SectionOne = (props: { pageTitle?: string, pageSubheading?: string, pageParagraph1?: string }) => {
    return (
      <div className="default-page-mobile-section-one">
        <h1>{props.pageTitle}</h1>
        <h4>{props.pageSubheading}</h4>
        <div>
          <p>{props.pageParagraph1}</p>
        </div>
      </div>
    )
  }


  const SectionTwo = (props: { sectionTwoParagraph1?: string, imgMobile?: string, imgMobileAlt?: string }) => {
    return (
      <div className="default-page-mobile-section-two-wrapper">
        <img
          src={props.imgMobile}
          alt={props.imgMobileAlt}
          className="default-page-mobile-section-img-mobile"
        />
        <p>{props.sectionTwoParagraph1}</p>
      </div>
    )
  }

  return (
    <div className="default-page-layout-mobile-wrapper">
      <SectionOne
        pageTitle={props.pageTitle}
        pageSubheading={props.pageSubheading}
        pageParagraph1={props.pageParagraph1}
      />

      <SectionTwo
        imgMobile={props.imgMobile}
        imgMobileAlt={props.imgMobileAlt}
        sectionTwoParagraph1={props.sectionTwoParagraph1}
      />
    </div>
  )
}
