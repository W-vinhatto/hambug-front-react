import React from 'react'

import ImgHome from '../../assets/imgHomeBacground.jpeg'

import { Conteiner } from './styled'

function Home () {
  return (
        <Conteiner>
            <img src={ImgHome}/>
        </Conteiner>
  )
}

export default Home
