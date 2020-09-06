import React from "react"

import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch } from "react-router-dom"

import Home from "@/screens/home"

export default () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
