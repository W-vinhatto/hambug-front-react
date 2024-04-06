import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Routes from './routes/routes'
import GlobalStyle from './styles/globalStyles'

import { UserProvider } from './hooks/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
)
