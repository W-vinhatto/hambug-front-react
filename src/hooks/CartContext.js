import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartproducts, setCartproducts] = useState([])

  const putProdutInCart = async product => {
    const cartIndex = cartproducts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartproducts

      newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1

      setCartproducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = ([...cartproducts, product])
      setCartproducts(newCartProducts)
    }

    await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(newCartProducts))
  }

  useEffect(() => {
    const loseruserData = async () => {
      const clientCartData = await localStorage.getItem('codeburguer:cartInfo')

      if (clientCartData) {
        setCartproducts(JSON.parse(clientCartData))
      }
    }

    loseruserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProdutInCart, cartproducts }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
