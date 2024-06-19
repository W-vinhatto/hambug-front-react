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
        <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button>Adicionar</Button>
        </div>
    </Conteiner>

  )
}

export default CardProducts

CardProducts.propTypes = {
  product: PropTypes.object
}
