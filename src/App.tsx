import './shared/global/css/Global.css'

import { Routes } from "./routes/Routes"

import { Navbar } from "./components/navigation/Navbar"


export const App = () => {
  return (
    <Routes>
      <Navbar />
    </Routes>
  )
}


