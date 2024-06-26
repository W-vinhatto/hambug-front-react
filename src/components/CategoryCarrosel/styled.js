import styled from 'styled-components'

export const Conteiner = styled.div`
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    align-items: center;
    gap: 30px;

    .rec.rec-arrow {
        background-color: #9758a6;
        color:  #efefef;
    }

    .rec.rec-arrow:hover {
    border-radius: 50%;
    background-color: #efefef;
    border: 2px solid  #9758a6;
    color: #9758a6;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color:  #bebebf;
        color:  #efefef;
    }
`

export const CategoryImg = styled.img`
`
export const ConteinerItens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
`

export const Button = styled.button`
    background-color: #9758a6;
    box-shadow: 0px 5px 10px rgba(151, 88 ,166, 0.22);
    border-radius: 8px;

    height: 50px;
    border: none;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
    cursor: pointer;

    &:hover{
        background-color: transparent;
        border: solid 2px  #9758a6;

        color:  #9758a6;
    }

    &:active{
        border: solid 2px  red;
        color: red;
    }
`
