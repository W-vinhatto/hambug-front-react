import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../utils/formatCurrency'

import ImgOffer from '../../assets/OFERTAS.png'

import {
  Conteiner,
  OfferImg,
  ConteinerItens,
  Image,
  Button
} from './styled'

function OfferCarrosel () {
  const [Offer, setOffer] = useState([])

  useEffect(() => {
    async function loadOffer () {
      const { data } = await api.get('products')
      // filtrando somente produtos em offer
      const onlyOffers = data
        .filter(product => product.offer)
      // usando map para para formatar price como currency
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setOffer(onlyOffers)
    }

    loadOffer()
  }, [])

  const breackPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }

  ]

  return (
        <Conteiner>
            <OfferImg src={ImgOffer} alt='logo da categoria'/>

            <Carousel itemsToShow={5}
            style={{ width: '90%' }} breakPoints={breackPoints} >
              {
                Offer && Offer.map(products => (
                  <ConteinerItens key={products.id}>
                    <Image src={products.url} alt='image produto' />
                    <p>{products.name}</p>
                    <p>{products.formatedPrice}</p>
                    <Button>Peça Agora</Button>
                  </ConteinerItens>
                ))
              }
            </Carousel>
        </Conteiner>
  )
}

export default OfferCarrosel
