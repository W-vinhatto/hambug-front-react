import React from 'react'
import formatCurrency from '../../utils/formatCurrency'

import { Header, Conteiner, Body, EmptyCart } from './style'

import { useCart } from '../../hooks/CartContext'

export function CartItems () {
  const { cartproducts } = useCart()
  return (

    <Conteiner>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartproducts && cartproducts.length > 0
        ? cartproducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p className='product-name' >{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className='quantity-conteiner' >
              <button>-</button>
              <p>{product.quantity}</p>
              <button>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
        : (
          <EmptyCart>
            Carinho Vazio
          </EmptyCart>
          )
      }
    </Conteiner>
  )
}
