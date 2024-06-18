import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from '../containers/login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import Products from '../containers/Products'

import PrivateRoute from './privateRoutes'

function Routess () {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Register} />

        <PrivateRoute path='/' exact component={Home} />
        <PrivateRoute path='/produtos' component={Products} />

      </Switch>
    </Router>
  )
}

export default Routess
