import React from 'react'
import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'

import { Button } from '../Button'

import {
  Conteiner,
  Image,
  ProductName,
  ProductPrice
} from './style'

export function CardProducts ({ product }) {
  const { putProdutInCart } = useCart()
  return (
    <Conteiner>
        <Image src={product.url} alt='imagem do produto' />
        <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={ () => putProdutInCart(product)} >Adicionar</Button>

        </div>
    </Conteiner>

  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
