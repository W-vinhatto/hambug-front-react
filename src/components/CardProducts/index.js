import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import {
  Conteiner,
  Image,
  ProductName,
  ProductPrice
} from './style'

function CardProducts ({ product }) {
  return (
    <Conteiner>
        <Image src={product.url} alt='imagem do produto' />
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <Button>Adicionar</Button>
    </Conteiner>

  )
}

export default CardProducts

CardProducts.propTypes = {
  product: PropTypes.object
}
