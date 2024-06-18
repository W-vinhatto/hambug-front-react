import styled from 'styled-components'

export const Conteiner = styled.div``

export const ProductImg = styled.img`
    width: 100vw;
`

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${props => props.isActiveCategory ? '#9758a6' : '#9a9a9d'};
    border-bottom: ${props => props.isActiveCategory ? '2px solid #9758a6' : '#9a9a9d'};
    font-size: 17px;
    line-height: 20px;
    margin-top: 10px
`

export const ProductsConteiner = styled.div``
