import './DefaultPageLayoutDesktop.css'

export const DefaulPageLayoutDesktop = (props: { pageTitle?: string, pageSubheading?: string, paragraph?: string, imgPlacement?: string, backgroundColor?: any, img?: string, paragraphOne?: string, paragraphTwo?: string, imgAlt?: string }) => {

  const SectionOne = (props: { pageTitle?: string, pageSubheading?: string, paragraph?: string }) => {
    return (
      <div className="default-page-desktop-section-one">
        <h1>{props.pageTitle}</h1>
        <h4>{props.pageSubheading}</h4>
        <div>
          <p>{props.paragraph}</p>
        </div>
      </div>
    )
  }

  const SectionTwo = (props: { imgPlacement?: string, backgroundColor?: any, img?: string, paragraphOne?: string, paragraphTwo?: string, imgAlt?: string }) => {
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
                  <p>{props.paragraphOne}</p>
                  <br />
                  <p>{props.paragraphTwo}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="default-page-desktop-section-two">
            <div className="default-page-desktop-section-two-box" style={props.backgroundColor}>
              <div className="default-page-desktop-section-two-box-right">
                <div>
                  <p>{props.paragraphOne}</p>
                  <br />
                  <p>{props.paragraphTwo}</p>
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
    <div className="default-page-desktop-wrapper">
      <SectionOne
        pageTitle={props.pageTitle}
        pageSubheading={props.pageSubheading}
        paragraph={props.paragraph}
      />
      <SectionTwo
        backgroundColor={props.backgroundColor}
        imgPlacement={props.imgPlacement}
        img={props.img}
        paragraphOne={props.paragraphOne}
        paragraphTwo={props.paragraphTwo}
      />
    </div>
  )
}
