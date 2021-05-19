import './SigninViewDesktop.css'
import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import SigninHeader600 from '../img/sigingHeader600.jpg'
import { HeaderDesktop } from '../../../components/header/headerDesktop/HeaderDesktop'
import { UserContext } from '../../../shared/provider/UserProvider'
import RoutingPath from '../../../routes/RoutingPath'



export const SigninViewDesktop = () => {

  const [username, setUsername] = useState<string>('User')
  const [password, setPassword] = useState<string>('')
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  const history = useHistory()

  const secretUser = 'admin'
  const secretPassword = 'admin'

  const adminLogin = () => {
    if (password === secretPassword && username === secretUser) {
      setAuthenticatedUser({ username, admin: true })
      console.log(authenticatedUser.admin)
      history.push(RoutingPath.adminView)
    } else {
      alert('Access denied')
    }
  }

  const login = () => {
    setAuthenticatedUser(username)
    console.log(username)
  }

  return (
    <>
      <HeaderDesktop headerImg={SigninHeader600} />
      <div className="signin-desktop-wrapper">
        <div className="signin-desktop-form-wrapper">

          <form className="signin-desktop-form">
            <label>Username: </label><input type="text" onChange={(event) => setUsername(event.target.value)} /><br />
            <label>Password: </label><input type="text" onChange={(event) => setPassword(event.target.value)} /><br />
            <input type="submit" value="Log in" onClick={() => adminLogin()} />
          </form>
        </div>
      </div>
    </>
  )
}
