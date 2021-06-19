import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
// import { UserContext } from '../shared/provider/UserProvider'


import { ForelasningarView } from "../views/forelasningarView/ForelasningarView"
import { HomeView } from "../views/homeView/HomeView"
import { KonsultuppdragView } from "../views/konsultuppdragView/KonsultuppdragView"
import { RadgivningView } from "../views/radgivningView/RadgivningView"
import { VaraEtologerView } from "../views/varaEtologerView/VaraEtologerView"
// import { SigninView } from "../views/signinView/SigninView"
// import { AdminView } from "../views/signinView/authenticatedViews/adminView/AdminView"
import { Footer } from "../components/footer/Footer"

import RoutingPath from './RoutingPath'

export const Routes = (props: { children?: React.ReactChild }) => {
  // const [authenticatedUser] = useContext(UserContext)

  // const adminRequired = () => {
  //   return authenticatedUser.admin ? AdminView : SigninView
  // }

  return (
    <Router>
      {props.children}
      {/* <Header /> */}
      <Switch>
        <Route exact path={RoutingPath.root} component={HomeView} />
        <Route exact path={RoutingPath.forelasningView} component={ForelasningarView} />
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.konsultuppdragView} component={KonsultuppdragView} />
        <Route exact path={RoutingPath.radgivningView} component={RadgivningView} />
        <Route exact path={RoutingPath.varaEtologerView} component={VaraEtologerView} />
      </Switch>
      <Footer />
    </Router>
  )
}
