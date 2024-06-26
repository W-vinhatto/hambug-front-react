import React from 'react'

import { CategoryCarrosel, OfferCarrosel } from '../../components'

import ImgHome from '../../assets/burger (1) 1.svg'

import {
  Conteiner,
  HomeImg
} from './styled'

export function Home () {
  return (
        <Conteiner>
            <HomeImg src={ImgHome} alt='backgroudHome'/>
            <CategoryCarrosel/>
            <OfferCarrosel/>
        </Conteiner>
  )
}
