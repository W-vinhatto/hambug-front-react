/* import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Home from '../containers/Home'

function PrivateRouteHome () {
  const user = localStorage.getItem('codeburguer:userData')

  const nav = useNavigate()

  useEffect(() => {
    if (!user) {
      nav('/login')
    }
  }, [])

  return (
    <Home></Home>
  )
}

export default PrivateRouteHome
*/
