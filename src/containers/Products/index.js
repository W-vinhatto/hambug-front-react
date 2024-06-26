import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'

import ImgProducts from '../../assets/bacgroundProducts.jpeg'
import { CardProducts } from '../../components'

import {
  Conteiner,
  ProductImg,
  CategoryButton,
  CategoryMenu,
  ProductsConteiner
} from './styled'

export function Products () {
  const [activeCategory, setActiveCategory] = useState([0])
  const [Categories, setCategories] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')
      // criando um novo objeto com nome todos para filtrar
      const AllCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(AllCategories)
    }

    async function loadProducts () {
      const { data: allProducts } = await api.get('products')

      const newValue = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newValue)
    }

    loadCategories()
    loadProducts()
  }, [])

  // filtrando produtos de acordo com id da categoria selecionada
  useEffect(() => {
  // caso valr da categoria seja 0 estou adicionando valor de todos os produtos dentro do set Estado
    if (activeCategory === 0) {
      setFilterProducts(products)
    } else {
      const newFilterProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setFilterProducts(newFilterProducts)
    }
  }, [products, activeCategory])

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

        { filterProducts && filterProducts.map(product => (
          <CardProducts key={product.id} product={product} />
        ))}

      </ProductsConteiner>
    </Conteiner>
  )
}
