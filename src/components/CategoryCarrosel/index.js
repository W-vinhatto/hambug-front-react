import React, { useEffect } from 'react'

import ImgCategory from '../../assets/CATEGORIAS.png'
import api from '../../services/api'

import {
  Conteiner,
  CategoryImg
} from './styled'

function CategoryCarrosel () {
  useEffect(() => {
    async function loadCategories () {
      const response = await api.get('categories')

      console.log(response)
    }

    loadCategories()
  }, [])

  return (
        <Conteiner>
            <CategoryImg src={ImgCategory}/>
        </Conteiner>
  )
}

export default CategoryCarrosel
