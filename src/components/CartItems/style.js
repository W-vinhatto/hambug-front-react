import styled from 'styled-components'

export const Conteiner = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0, 0.3);
    padding: 10px;
    width: max-content;
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    border-bottom: 1px solid #b5b5b5 ;

    p{
    font-size: 16px;
    color: #b5b5b5;
}
`

export const Body = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: max-content;
   

img{
    width: 120px;
    border-radius: 10px;
}

p{
    font-size: 16px;
    margin-top: 5px;
}

.product-name{
    width: 150px;
}

.quantity-conteiner{
    display: flex;
    gap: 20px;

    button{
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }
}
`

export const TotalConteiner = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    button{
        background: transparent ;
        border: none;
        cursor: pointer;
    }

    img{
        width: 30px;
    }
`

export const EmptyCart = styled.div`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`
