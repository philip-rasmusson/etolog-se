import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import { ForelasningarView } from "../views/forelasningarView/ForelasningarView"
import { HomeView } from "../views/homeView/HomeView"
import { KonsultuppdragView } from "../views/konsultuppdragView/KonsultuppdragView"
import { RadgivningView } from "../views/radgivningView/RadgivningView"
import { VaraEtologerView } from "../views/varaEtologerView/VaraEtologerView"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"

import RoutingPath from './RoutingPath'

export const Routes = (props: { children?: React.ReactChild }) => {
  return (
    <Router>
      {props.children}
      <Header />
      <Switch>
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
