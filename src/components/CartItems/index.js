import React from 'react'
import formatCurrency from '../../utils/formatCurrency'
import lixeira from '../../assets/lixeira.png'

import { Header, Conteiner, Body, EmptyCart, TotalConteiner } from './style'

import { useCart } from '../../hooks/CartContext'

export function CartItems () {
  const { cartproducts, increaseProducts, decreaseProducts, deleteProducts } = useCart()
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
              <button onClick={() => decreaseProducts(product.id)} >-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>

            <TotalConteiner key={product.id}>
              <p>{formatCurrency(product.quantity * product.price)}</p>
              <button onClick={() => deleteProducts(product.id)} >
                <img src={lixeira} />
                </button>
          </TotalConteiner>
          </Body>
        ))
        : (
    <EmptyCart>
      Carinho Vazio
    </EmptyCart>
          )
}
    </Conteiner >
  )
}
