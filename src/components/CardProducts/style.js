import styled from 'styled-components'

export const Conteiner = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 30px 60px rgba(57,57,57, 0.1);
    border-radius: 30px;
    width: max-content;

    display: flex;
    gap: 12px;
    padding: 16px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Image = styled.img`
    width: 150px;
    border-radius: 10px;
`

export const ProductName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`

export const ProductPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

    margin-top: 30px;
`
