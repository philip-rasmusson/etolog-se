import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './AdminViewDesktop.css'
import AdminViewData from '../data/AdminViewData'
import { EtologBoxDesktopAdmin } from "../components/etologBoxAdmin/etologBoxDesktopAdmin/EtologBoxDesktopAdmin"
import { HeaderDesktop } from '../../../../../components/header/headerDesktop/HeaderDesktop'
import headerImg from '../img/headerAdminHeight700.jpg'
import Axios from 'axios'
import RoutingPath from '../../../../../routes/RoutingPath'
import categories from '../../../../../data/data-categories.json'
import lectures from '../../../../../data/data-lectures.json'
import counties from '../../../../../data/data-county.json'


export const AdminViewDesktop = () => {

  const history = useHistory()

  const [displayEtologer, setDisplayEtologer] = useState<boolean>(false)
  const [displayAddNewEtolog, setDisplayAddNewEtolog] = useState<boolean>(false)
  const [displayEtologerButtonText, setDisplayEtologerButtonText] = useState<string>('visa alla etologer')
  const [apiData, setApiData] = useState<any>([])
  const [newEtolog, setNewEtolog] = useState<any>()
  const [categoryArray, setCategoryArray] = useState<any>([])
  // const [filterCounty, setFilterCounty] = useState('län')

  const fetchData = async () => {
    const { data } = await Axios.get('http://localhost:3001/etolog')
    setApiData(data)
    console.log(data)
  }

  const showAllEtologer = () => {
    if (displayEtologer) {
      return apiData.map((etolog: any) => {
        return (<div className="admin-desktop-etolog-box" key={etolog._id}>
          <EtologBoxDesktopAdmin
            _id={etolog._id}
            fullName={etolog.first_name + ' ' + etolog.last_name}
            imgId={etolog.imgId}
            description={etolog.desc}
            email={etolog.email}
            city={etolog.city}
            star={etolog.star}
            homepage={etolog.homepage}
            render={() => fetchData()}
          />
        </div>)
      })
    }
  }

  const toggleShowEtologer = () => {
    if (displayEtologer) {
      setDisplayEtologer(false)
      setDisplayEtologerButtonText('visa alla etologer')
    } else {
      setDisplayEtologer(true)
      setDisplayEtologerButtonText('göm alla etologer')
    }
  }

  const toggleAddNewEtolog = () => {
    if (!displayAddNewEtolog) {
      setDisplayEtologer(false)
      setDisplayAddNewEtolog(true)
    } else {
      setDisplayAddNewEtolog(false)
    }
  }

  const mapCategories = categories.map((x) => {
    const id = `category-${x.category}`
    return <label className="label-category"><input id={id} type="checkbox" onChange={event => setCategoryArray([{ ...categoryArray, categoryFilter: x.category }])} />{x.category}</label>
  })

  const mapLectures = lectures.map((x) => {
    const id = `lecture-${x.lecture}`
    return <label><input id={id} type="checkbox" />{x.lecture}</label>
  })


  const selectCounty = (county: any) => {
    setNewEtolog({ ...newEtolog, county })
  }

  const showCounty = counties.map((county) => {
    return (
      <option value={county.county}>
        {county.county}
      </option>
    )
  })

  const addNewEtolog = () => {
    if (displayAddNewEtolog)
      return (
        <div className="add-new-etolog-wrapper">
          <h1>adding new etolog</h1>
          <div className="add-new-etolog-form-wrapper">
            <form className="add-new-etolog-form">
              <div className="add-new-form-inner"><h4>Förnamn</h4><input id="first_name" type="text" onChange={event => setNewEtolog({ ...newEtolog, first_name: event.target.value })} /></div>
              <div className="add-new-form-inner"><h4>Efternamn</h4><input id="last_name" type="text" onChange={event => setNewEtolog({ ...newEtolog, last_name: event.target.value })} /></div>
              <div className="add-new-form-inner"><h4>Stad</h4><input id="city" type="text" onChange={event => setNewEtolog({ ...newEtolog, city: event.target.value })} /></div>
              <div className="add-new-form-inner">
                <h4>Län</h4>
                <select onChange={(event) => selectCounty(event.target.value)}>
                  <option value=''>Välj ett län</option>
                  {showCounty}
                </select>
              </div>
              {/* <div className="add-new-form-inner"><h4>Län</h4><input id="county" type="text" onChange={event => setNewEtolog({ ...newEtolog, county: event.target.value })} /></div> */}
              <div className="add-new-form-inner"><h4>Email</h4><input id="email" type="text" onChange={event => setNewEtolog({ ...newEtolog, email: event.target.value })} /></div>
              <div className="add-new-form-inner"><h4>Hemsida</h4><input id="homepage" type="text" onChange={event => setNewEtolog({ ...newEtolog, homepage: event.target.value })} /></div>
              <div className="add-new-form-inner"><h4>Beskrivnig</h4><input id="desc" type="text" onChange={event => setNewEtolog({ ...newEtolog, desc: event.target.value })} /></div>

              <div className="add-new-form-inner"><h4>Stjärnmärkt</h4><input id="star" type="checkbox" onChange={event => setNewEtolog({ ...newEtolog, star: event.target.checked })} /></div>

              <div className="div-array">
                <h4>Kategorier</h4>
                <form id="category-array-form" className="array-checkbox"> {mapCategories}</form>
              </div>

              <div className="div-array">
                <h4>Föreläsningar</h4>
                <div className="array-checkbox"> {mapLectures}</div>
              </div>
              <div className="add-new-etolog-form-buttons">
                <button type="submit" value="sumbit">Registrera</button>
                <button>Rensa</button>
              </div>
            </form><br />
            {/* {/* <button onClick={() => { console.log(categoryArray) }}>Registrera</button> */}
            <button onClick={() => { console.log(newEtolog) }}>Registrera</button>
          </div>
        </div>
      )
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <HeaderDesktop headerImg={headerImg} />
      <div className="admin-desktop-wrapper font-grey">
        <h1>{AdminViewData.pageTitle}</h1>
        <h4>{AdminViewData.pageSubheading}</h4>
        <div className="admin-desktop-buttons-wrapper">
          <button className="admin-desktop-button-one" onClick={() => toggleShowEtologer()}>{displayEtologerButtonText}</button>
          <button className="admin-desktop-button-two" onClick={() => toggleAddNewEtolog()}>{AdminViewData.buttonTwo}</button>
          <button className="admin-desktop-button-three" onClick={() => history.push(RoutingPath.signinView)}>{AdminViewData.buttonThree}</button>
        </div>
      </div>
      <div className="admin-desktop-etologer-wrapper">
        {showAllEtologer()}
      </div>
      <div className="admin-desktop-addNewEtolog-wrapper">
        {addNewEtolog()}
      </div>

    </>
  )
}
