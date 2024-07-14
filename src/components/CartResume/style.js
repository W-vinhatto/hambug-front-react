import styled from 'styled-components'

export const MaxConteiner = styled.div``

export const Conteiner = styled.div`
    
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0, 0.03);
    padding: 15px;


    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    .conteiner-top{
        grid-gap: 10px 50px;
        display: grid;
        grid-template-areas:
        'title   title'
        'items   items-price'
        'delivery-tax   delivery-price'
        ;
    }

    .title{
        grid-area: title;
        margin-bottom: 20px;
    }

    .items{
        grid-area: items;
    }

    .items-price{
        grid-area: items-price;
    }

    .delivery-tax{
        grid-area: delivery-tax;
    }

    .delivery-price{
        grid-area: delivery-price;
    }
        

    .conteiner-bottom{
        margin-top: 50px;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 24px;
}
`
