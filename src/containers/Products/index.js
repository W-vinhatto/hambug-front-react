import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import ImgProducts from '../../assets/bacgroundProducts.jpeg'
import CardProducts from '../../components/CardProducts'

import {
  Conteiner,
  ProductImg,
  CategoryButton,
  CategoryMenu,
  ProductsConteiner
} from './styled'

function Products () {
  const [activeCategory, setActiveCategory] = useState([0])
  const [Categories, setCategories] = useState([])

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')
      // criando um novo objeto com nome todos para filtrar
      const AllCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(AllCategories)
    }

    async function loadProducts () {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadCategories()
    loadProducts()
  }, [])

  return (
    <Conteiner>
      <ProductImg src={ImgProducts} alt='backgroud Produtos' />
      <CategoryMenu>
        {Categories &&
          Categories.map(category => (
            <CategoryButton
              type='button'
              key={category.id}
              onClick={() => { setActiveCategory(category.id) }}
              isActiveCategory={activeCategory === category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductsConteiner>

        { products && products.map(product => (
          <CardProducts key={product.id} product={product} />
        ))}

      </ProductsConteiner>
    </Conteiner>
  )
}

export default Products
