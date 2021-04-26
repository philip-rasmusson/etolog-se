import './DefaultPageLayoutMobile.css'

export const DefaulPageLayoutMobile = (props: { pageTitle?: string, pageSubheading?: string, paragraph?: string, imgPlacement?: string, backgroundColor?: any, paragraphOne?: string, paragraphTwo?: string, imgMobile?: string, imgMobileAlt?: string }) => {
  const SectionOne = (props: { pageTitle?: string, pageSubheading?: string, paragraph?: string }) => {
    return (
      <div className="default-page-mobile-section-one">
        <h1>{props.pageTitle}</h1>
        <h4>{props.pageSubheading}</h4>
        <div>
          <p>{props.paragraph}</p>
        </div>
      </div>
    )
  }

  const SectionImg = (props: { imgMobile?: string, imgMobileAlt?: string }) => {
    return (
      <img
        src={props.imgMobile}
        alt={props.imgMobileAlt}
        className="default-page-mobile-section-img-mobile"
      />
    )
  }

  const SectionTwo = (props: { paragraphOne?: string, paragraphTwo?: string, }) => {
    return (
      <div className="default-page-mobile-section-two">
        <p>{props.paragraphOne}</p>
        <br />
        <p>{props.paragraphTwo}</p>
      </div>
    )
  }

  return (
    <div className="default-page-layout-mobile-wrapper">
      <SectionOne
        pageTitle={props.pageTitle}
        pageSubheading={props.pageSubheading}
        paragraph={props.paragraph}
      />
      <SectionImg
        imgMobile={props.imgMobile}
        imgMobileAlt={props.imgMobileAlt}
      />
      <SectionTwo
        paragraphOne={props.paragraphOne}
        paragraphTwo={props.paragraphTwo}
      />
    </div>
  )
}
