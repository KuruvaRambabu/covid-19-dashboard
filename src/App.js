import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Common/components/HomePage";


import "./App.css";
import SignInRoute from "./Authentication/routes/SignInRoute/";
import { Provider } from "mobx-react";
import authenticationStore from "./Common/stores/index"

const App = () => {
  
  return (
    <Provider authenticationStore={authenticationStore} >
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/sign-in-page" component={SignInRoute} />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
