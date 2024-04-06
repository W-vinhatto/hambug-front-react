import styled from 'styled-components'
import BackgroundImg from '../../assets/padrao-sem-emenda-de-fast-food-com_202271-545.avif'

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${BackgroundImg});

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Backgroundregister = styled.img`
    height: 70%;
    width: 400px;
    border-radius: 10px 0 0 10px;


    @media screen and (min-width: 1030px) and (orientation: portrait) {
        height: 40%;
    }

    @media screen and (max-width: 594px) and (orientation: portrait) {
        display: none;
    }

    @media screen and (max-width: 932px) and (orientation: landscape) {
        display: none;
    }
`

export const ConteinerItens = styled.div`
    background: rgb(34,34,34);
    border-radius: 0 10px 10px 0;
    height: 70%;

    padding: 0 40px 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        text-align: center;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
    }


    @media screen and (min-width: 1030px) and (orientation: portrait) {
        height: 40%;
    }


    @media screen and (max-height: 730px) and (orientation: portrait) {
        height: 80%;
    }

    @media screen and (max-width: 932px) and (orientation: landscape) {
        flex-direction: row;
        border-radius: 15px;

        h1{
            display: none;
        }
    }
`

export const ImgLogo = styled.img`
    width: 200px;
`
export const SectionLogin = styled.div`
    form {
    display: flex;
    flex-direction: column;
    }
`

export const Label = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: left;
`

export const Imput = styled.input`
    width: 228px;
    height: 25px;
    background-color: #ffffff;
    box-shadow: 2px 2px 10px #9758a6;
    border-radius: 5px;
    border: ${props => props.error ? '2px solid #cc1717;' : 'none'};
    padding-left: 10px;
`

export const SingnInlink = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;

    a{
        cursor: pointer;
        text-decoration: underline;
    }
`

export const Error = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #cc1717;
    margin-top: 2px;
`
