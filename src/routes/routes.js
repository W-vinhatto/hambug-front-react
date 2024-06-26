import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Login, Register, Home, Products, Cart } from '../containers'

import PrivateRoute from './privateRoutes'

function Routess () {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Register} />

        <PrivateRoute path='/' exact component={Home} />
        <PrivateRoute path='/produtos' component={Products} />

        <PrivateRoute path='/carrinho' component={Cart} />

      </Switch>
    </Router>
  )
}

export default Routess
