import React from 'react'

import CategoryCarrosel from '../../components/CategoryCarrosel'

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
        </Conteiner>
  )
}

export default Home
