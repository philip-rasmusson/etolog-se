import './SigninViewDesktop.css'
import SigninHeader from '../img/sigingHeader.jpg'
import { HeaderDesktop } from '../../../components/header/headerDesktop/HeaderDesktop'

export const SigninViewDesktop = () => {
  return (
    <>
      <HeaderDesktop headerImg={SigninHeader} />
      <div className="signin-desktop-wrapper">
        <div className="signin-desktop-form-wrapper">

          <form className="signin-desktop-form">
            <label>Username: </label><input type="text" /><br />
            <label>Password: </label><input type="text" /><br />
            <input type="submit" value="Log in" />
          </form>
        </div>
      </div>
    </>
  )
}
