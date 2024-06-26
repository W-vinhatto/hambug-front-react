import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Routes from './routes/routes'
import GlobalStyle from './styles/globalStyles'

import AppProvider from './hooks'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
)
