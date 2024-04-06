import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '../containers/login'
import Register from '../containers/Register'
import PrivateRouteHome from './private-routes'

function Routess () {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={Login} />
        <Route path='/cadastro' Component={Register} />

        <Route path='/' Component={PrivateRouteHome}/>
      </Routes>
    </Router>
  )
}

export default Routess
