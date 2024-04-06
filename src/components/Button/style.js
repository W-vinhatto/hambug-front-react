import styled from 'styled-components'

export const BaseButton = styled.button`
    width: 180px;
    height: 40px;
    background-color: #9758a6;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    color: #ffffff;
    display: block;
    margin-left: auto;
    margin-right: auto;


    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`
