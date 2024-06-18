import React from 'react'

import CategoryCarrosel from '../../components/CategoryCarrosel'
import OfferCarrosel from '../../components/OfferCarrosel'

import ImgHome from '../../assets/burger (1) 1.svg'

import {
  Conteiner,
  HomeImg
} from './styled'

function Home () {
  return (
        <Conteiner>
            <HomeImg src={ImgHome} alt='backgroudHome'/>
            <CategoryCarrosel/>
            <OfferCarrosel/>
        </Conteiner>
  )
}

export default Home
