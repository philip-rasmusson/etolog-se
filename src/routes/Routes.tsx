import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../shared/provider/UserProvider'


import { ForelasningarView } from "../views/forelasningarView/ForelasningarView"
import { HomeView } from "../views/homeView/HomeView"
import { KonsultuppdragView } from "../views/konsultuppdragView/KonsultuppdragView"
import { RadgivningView } from "../views/radgivningView/RadgivningView"
import { VaraEtologerView } from "../views/varaEtologerView/VaraEtologerView"
import { SigninView } from "../views/signinView/SigninView"
import { AdminView } from "../views/signinView/authenticatedViews/adminView/AdminView"
import { Footer } from "../components/footer/Footer"

import RoutingPath from './RoutingPath'

export const Routes = (props: { children?: React.ReactChild }) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

  console.log(authenticatedUser.admin)
  const adminRequired = () => {
    return authenticatedUser.admin ? AdminView : HomeView
  }

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
        <Route exact path={RoutingPath.signinView} component={SigninView} />
        {/* <Route exact path={RoutingPath.adminView} component={AdminView} /> */}
        <Route exact path={RoutingPath.adminView} component={adminRequired()} />
      </Switch>
      <Footer />
    </Router>
  )
}
