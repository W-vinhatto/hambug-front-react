import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async newuserdata => {
    setUserData(newuserdata)

    await localStorage.setItem('codeburguer:userData', JSON.stringify(newuserdata))
  }

  useEffect(() => {
    const loseruserData = async () => {
      const clientInfo = await localStorage.getItem('codeburguer:userData')

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }

    loseruserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('userUser must be used with UserContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
