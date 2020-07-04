import React, { Suspense } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'mobx-react'

import HomePage from './Common/components/HomePage'
import './App.css'
import SignInRoute from './Authentication/routes/SignInRoute'
import stores from './Common/stores'
import { ProtectedRoute } from './Common/components/ProtectedRoute/ProtectedRoute'
import {
   COVID_19_DASHBOARD_PATH,
   COVID_19_SIGN_IN_PAGE_PATH
} from './Common/routes/RouteConstants'
import Covid19DashBoardRoute from './Covid19DashBoard/routes/Covid19DashBoardRoute'
import i18n from './Authentication/i18n'

const App = () => {
   return (
      <Provider {...stores}>
         <I18nextProvider i18n={i18n}>
            <Suspense fallback={true}>
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
            </Suspense>
         </I18nextProvider>
      </Provider>
   )
}

export default App
