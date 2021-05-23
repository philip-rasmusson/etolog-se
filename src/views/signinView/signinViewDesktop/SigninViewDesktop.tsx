import './SigninViewDesktop.css'
import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import SigninHeader600 from '../img/sigingHeader600.jpg'
import { HeaderDesktop } from '../../../components/header/headerDesktop/HeaderDesktop'
import { UserContext } from '../../../shared/provider/UserProvider'
import RoutingPath from '../../../routes/RoutingPath'
import dotenv from 'dotenv'



export const SigninViewDesktop = () => {

  // const env = dotenv.config().parsed
  dotenv.config()

  const [username, setUsername] = useState<string>('User')
  const [password, setPassword] = useState<string>('')
  const [setAuthenticatedUser] = useContext(UserContext)
  const history = useHistory()


  const USER = process.env.REACT_APP_USER
  const PASSWORD = process.env.REACT_APP_PASSWORD

  // console.log(USER)
  // console.log(PASSWORD)

  const adminLogin = () => {
    if (password === PASSWORD && username === USER) {
      setAuthenticatedUser({ username, admin: true })
      history.push(RoutingPath.adminView)
    } else {
      alert('Access denied')
    }
  }

  return (
    <>
      <HeaderDesktop headerImg={SigninHeader600} />
      <div className="signin-desktop-wrapper">
        <div className="signin-desktop-form-wrapper">

          <form className="signin-desktop-form">
            <div>
              <label>Username: </label>
              <label>Password: </label>
            </div>
            <div>
              <input type="text" onChange={(event) => setUsername(event.target.value)} />
              <input type="password" onChange={(event) => setPassword(event.target.value)} />
            </div>
          </form>
          <button onClick={() => adminLogin()} >Log in</button>
        </div>
      </div>
    </>
  )
}
