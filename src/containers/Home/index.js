import React from 'react'

import { CategoryCarrosel, Header, OfferCarrosel } from '../../components'

import ImgHome from '../../assets/burger (1) 1.svg'

import {
  Conteiner,
  HomeImg
} from './styled'

export function Home () {
  return (
        <Conteiner>
            <Header></Header>
            <HomeImg src={ImgHome} alt='backgroudHome'/>
            <CategoryCarrosel/>
            <OfferCarrosel/>
        </Conteiner>
  )
}
