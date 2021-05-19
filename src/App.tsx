import './shared/global/css/Global.css'

import { Routes } from "./routes/Routes"

import { Navbar } from "./components/navigation/Navbar"
import { UserProvider } from './shared/provider/UserProvider'


export const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Navbar />
      </Routes>
    </UserProvider>
  )
}


