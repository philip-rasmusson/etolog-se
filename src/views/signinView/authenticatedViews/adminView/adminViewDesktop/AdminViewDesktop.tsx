import { HeaderDesktop } from '../../../../../components/header/headerDesktop/HeaderDesktop'
import headerImg from '../img/headerAdminHeight700.jpg'

export const AdminViewDesktop = () => {
  return (
    <div>
      <HeaderDesktop headerImg={headerImg} />
      <h1>this is admin view</h1>
    </div>
  )
}
