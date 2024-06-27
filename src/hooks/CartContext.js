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

  // função para ser usada geral para deletar produtos
  const deleteProducts = async productId => {
    const newCart = cartproducts.filter(product => product.id !== productId)

    setCartproducts(newCart)
    await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(newCart))
  }

  // função de acrescetar produtos no carrinho
  const increaseProducts = async productId => {
    const newCart = cartproducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    // criado variavel pegando id que vem da função quado tem on click-
    // comparando com id valido atraves do map e se caso tem id acrescenta +1 no quantyti
    // caso nao tenha mantem o produto original do map
    // após faz nova atualização do set(array original)
    setCartproducts(newCart)
    await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(newCart))
  }

  // função Tirar produtos no carrinho
  const decreaseProducts = async productId => {
    const cartIndex = cartproducts.findIndex(pr => pr.id === productId)
    // fazendo verificação na posição do array em index caso produto tenha quantyti maior que 1 ,então tira 1
    if (cartproducts[cartIndex].quantity > 1) {
      const newCart = cartproducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      // criado variavel pegando id que vem da função quado tem on click-
      // comparando com id valido atraves do map e se caso tem id  -1 no quantyti
      // caso nao tenha mantem o produto original do map
      // após faz nova atualização do set(array original)
      setCartproducts(newCart)
      await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(newCart))
    } else {
      deleteProducts(productId)
    }
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
    <CartContext.Provider value={{
      putProdutInCart,
      cartproducts,
      increaseProducts,
      decreaseProducts,
      deleteProducts
    }}>
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
