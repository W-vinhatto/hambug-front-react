import React from 'react'

import CartLogo from '../../assets/bacgroundHome.jpeg'
import { CartItems } from '../../components/CartItems'
import { CartImag, Conteiner } from './styled'

export function Cart () {
  return (
    <Conteiner>
      <CartImag src={CartLogo} alt="logo Cart" />
      <CartItems></CartItems>
    </Conteiner>
  )
}
