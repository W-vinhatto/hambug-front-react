import React from 'react'

import CartLogo from '../../assets/burger (1) 1.svg'
import { CartItems, CartResume } from '../../components'
import { CartImag, Conteiner, AllCart } from './styled'

export function Cart () {
  return (
    <Conteiner>
      <CartImag src={CartLogo} alt="logo carrinho" />
      <AllCart>
      <CartItems></CartItems>
      <CartResume></CartResume>
      </AllCart>
    </Conteiner>
  )
}
