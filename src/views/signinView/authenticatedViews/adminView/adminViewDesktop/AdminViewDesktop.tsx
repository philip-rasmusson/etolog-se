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
import EtologBoxDataAdmin from '../components/etologBoxAdmin/data/EtologBoxDataAdmin'
import { UploadContainer } from '../../../../../containers/uploadContainer/UploadContainer'


export const AdminViewDesktop = () => {
  const [displayEtologer, setDisplayEtologer] = useState<boolean>(false)
  const [displayAddNewEtolog, setDisplayAddNewEtolog] = useState<boolean>(false)
  const [displayEtologerButtonText, setDisplayEtologerButtonText] = useState<string>('visa alla etologer')
  const [apiData, setApiData] = useState<any>([])
  const [newEtolog, setNewEtolog] = useState<any>()
  const [categoryArray, setCategoryArray] = useState<any>(['showAll'])
  const [lectureArray, setLectureArray] = useState<any>([])
  const [acceptNewEtolog, setAcceptNewEtolog] = useState<number>(0)


  const history = useHistory()

  const resetNewEtolog = () => {
    setNewEtolog([])
    setDisplayAddNewEtolog(false)
    setDisplayEtologer(false)
  }

  const newEtologNoEmptyInputs = (input: any) => {
    console.log(input.length)
    if (input.length > 0) {
      return input
    } else {
      setAcceptNewEtolog(acceptNewEtolog + 1)
      console.log(acceptNewEtolog)
      alert('error')
    }
  }

  const createEtolog = async () => {
    try {
      const createdEtolog = {
        first_name: newEtologNoEmptyInputs(newEtolog.first_name),
        last_name: newEtologNoEmptyInputs(newEtolog.last_name),
        desc: newEtologNoEmptyInputs(newEtolog.desc),
        email: newEtologNoEmptyInputs(newEtolog.email),
        city: newEtologNoEmptyInputs(newEtolog.city),
        homepage: newEtologNoEmptyInputs(newEtolog.homepage),
        lecture: lectureArray,
        star: newEtolog.star,
        county: newEtologNoEmptyInputs(newEtolog.county),
        categoryFilter: categoryArray,
        imgId: 0
      }

      await Axios.post('http://localhost:3001/etolog/', createdEtolog)
      setDisplayEtologer(true)
      setDisplayAddNewEtolog(false)
      setNewEtolog([])
      fetchData()

    } catch (error) {
      fetchData()

    }
  }

  const fetchData = async () => {
    const { data } = await Axios.get('http://localhost:3001/etolog')
    setApiData(data)
  }

  const showAllEtologer = () => {
    if (displayEtologer) {
      return apiData.map((etolog: any) => {
        return (<div className="admin-desktop-etolog-box" key={etolog._id}>
          <EtologBoxDesktopAdmin
            _id={etolog._id}
            fullName={etolog.first_name + ' ' + etolog.last_name}
            first_name={etolog.first_name}
            last_name={etolog.last_name}
            imgId={etolog.imgId}
            description={etolog.desc}
            email={etolog.email}
            city={etolog.city}
            star={etolog.star}
            county={etolog.county}
            homepage={etolog.homepage}
            categoryFilter={etolog.categoryFilter}
            lectureArray={etolog.lecture}
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
      setDisplayAddNewEtolog(false)
    }
  }
  const toggleAddNewEtolog = () => {
    if (!displayAddNewEtolog) {
      setDisplayEtologer(false)
      setDisplayEtologerButtonText('visa alla etologer')
      setDisplayAddNewEtolog(true)
    } else {
      setDisplayAddNewEtolog(false)
    }
  }

  const mapCategories = categories.map((item) => {
    const id = `category-${item.category}`
    return <label className="label-category"><input id={id} type="checkbox" key={item.category}
      onChange={event => {
        (event.target.checked)
          ? setCategoryArray([...categoryArray, item.category])
          : setCategoryArray(categoryArray.filter((y: any) => y !== item.category))
      }} />{item.category}</label>
  })

  const mapLectures = lectures.map((item) => {
    const id = `lecture-${item.lecture}`
    return <label className="label-lecture"><input id={id} type="checkbox" key={item.lecture}
      onChange={event => {
        (event.target.checked)
          ? setLectureArray([...lectureArray, item.lecture])
          : setLectureArray(lectureArray.filter((y: any) => y !== item.lecture))
      }} />{item.lecture}</label>
  })
  const mapCounty = counties.map((county) => {
    return (
      <option value={county.county} key={county.county}>
        {county.county}
      </option>
    )
  })
  const addNewEtolog = () => {
    if (displayAddNewEtolog)
      return (
        <div className="add-new-etolog-wrapper">
          <h1 className="add-new-etolog-title">{EtologBoxDataAdmin.addNewEtologTitle}</h1>
          <div className="add-new-etolog-form-wrapper">
            <form className="add-new-etolog-form">
              <div className="add-new-form-inner"><h4>{AdminViewData.firstName}</h4><input id="first_name" type="text" required
                onChange={event => setNewEtolog({ ...newEtolog, first_name: event.target.value })} /></div>
              <div className="add-new-form-inner"><h4>{AdminViewData.lastName}</h4><input id="last_name" type="text" required
                onChange={event => setNewEtolog({ ...newEtolog, last_name: event.target.value })} /></div>
              <div className="add-new-form-inner"><h4>{AdminViewData.city}</h4><input id="city" type="text" required
                onChange={event => setNewEtolog({ ...newEtolog, city: event.target.value })} /></div>
              <div className="add-new-form-inner">
                <h4>{AdminViewData.county}</h4>
                <select required
                  onChange={(event) => setNewEtolog({ ...newEtolog, county: event.target.value })}>
                  <option value=''>{AdminViewData.selectCounty}</option>
                  {mapCounty}
                </select>
              </div>
              <div className="add-new-form-inner"><h4>{AdminViewData.email}</h4><input id="email" type="text" required
                onChange={event => setNewEtolog({ ...newEtolog, email: event.target.value })} /></div>
              <div className="add-new-form-inner"><h4>{AdminViewData.homepage}</h4><input id="homepage" type="text"
                onChange={event => setNewEtolog({ ...newEtolog, homepage: event.target.value })} /></div>
              <div className="add-new-form-inner"><h4>{AdminViewData.description}</h4><input id="desc" type="text" required
                onChange={event => setNewEtolog({ ...newEtolog, desc: event.target.value })} /></div>
              <div className="add-new-form-inner"><h4>{AdminViewData.star}</h4><input id="star" type="checkbox"
                onChange={event => setNewEtolog({ ...newEtolog, star: event.target.checked })} /></div>
              <div className="div-array">
                <h4>{AdminViewData.categories}</h4>
                <div className="array-checkbox"> {mapCategories}</div>
              </div>
              <div className="div-array">
                <h4>{AdminViewData.lectures}</h4>
                <div className="array-checkbox"> {mapLectures}</div>
              </div>
              <div className="div-array">
                <h4>Bild</h4>
                <UploadContainer />
              </div>
              <div className="add-new-etolog-form-buttons">
                <button type="submit" value="sumbit" onClick={() => createEtolog()}>{AdminViewData.register}</button>
                <button onClick={() => resetNewEtolog()}>{AdminViewData.reset}</button>
              </div>
            </form>
          </div>
        </div>
      )
  }

  useEffect(() => {
    // fetchData()
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
      <div className="admin-desktop-updateEtolog-wrapper">
      </div>
    </>
  )
}
