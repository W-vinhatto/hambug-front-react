import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'

import ImgCategory from '../../assets/CATEGORIAS.png'

import {
  Conteiner,
  CategoryImg,
  ConteinerItens,
  Image,
  Button
} from './styled'

export function CategoryCarrosel () {
  const [Categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
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
            <CategoryImg src={ImgCategory} alt='logo da categoria'/>

            <Carousel itemsToShow={5}
            style={{ width: '90%' }} breakPoints={breackPoints} >
              {
                Categories && Categories.map(category => (
                  <ConteinerItens key={category.id}>
                    <Image src={category.url} alt='image categoria' />
                    <Button>{category.name}</Button>
                  </ConteinerItens>
                ))
              }
            </Carousel>
        </Conteiner>
  )
}
