import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './Common/components/HomePage'

import './App.css'
import SignInRoute from './Authentication/routes/SignInRoute'
import { Provider } from 'mobx-react'
import stores from './Common/stores'
import { ProtectedRoute } from './Common/components/ProtectedRoute/ProtectedRoute'
import {
   COVID_19_DASHBOARD_PATH,
   COVID_19_SIGN_IN_PAGE_PATH
} from './Common/routes/RouteConstants'
import Covid19DashBoardRoute from './Covid19DashBoard/routes/Covid19DashBoardRoute'

const App = () => {
   return (
      <Provider {...stores}>
         <Router basename={process.env.PUBLIC_URL}>
            <Switch>
               <Route
                  exact
                  path={COVID_19_SIGN_IN_PAGE_PATH}
                  component={SignInRoute}
               />
               <ProtectedRoute
                  exact
                  path={COVID_19_DASHBOARD_PATH}
                  component={Covid19DashBoardRoute}
               />

               <Route path='/'>
                  <HomePage />
               </Route>
            </Switch>
         </Router>
      </Provider>
   )
}

export default App
