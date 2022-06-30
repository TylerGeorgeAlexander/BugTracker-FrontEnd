import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./containers/Login";

import { Route } from "react-router-dom";
import { useToken } from "./components/App/useToken";

const Routes = ({ setToken }) => {
  return (
 
      <Switch>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

  );
};