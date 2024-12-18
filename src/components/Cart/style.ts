import styled from 'styled-components';

export const CartBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: rgb(0,0,0,0.8);
`

export const CartDiv = styled.div`
    z-index: 100;
    position: fixed;
    top: 96px;
    bottom: 0;
    height: 420px;
    width: 100%;
    background-color: gray;
    border-radius: 0 0 1rem 1rem;
    overflow: hidden;
`

export const ValorFinal = styled.div`
    background-color: green;
    width: 60%;
    margin: .4rem auto 0 auto;
    border-radius: 1rem;
    padding: .8rem .5rem;
    text-align: center;
    color: white;
    font-weight: bold;
`

export const CartCard = styled.div`
    width: 80%;
    padding: 1rem;
    border-radius: 1rem;
    margin: .5rem auto 0 auto;
    display: flex;
    background-color: white;
`

export const CartImg = styled.div`
    width: 100px;
    height: 100px;
    margin-right: .5rem;

    img  {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
`

export const CartTxt = styled.div`
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CartName = styled.div`
    font-weight: bold;
    color: #505050;
`

export const CartDescription = styled.div`
`

export const QuantValorDiv = styled.div`
    display:flex;
`

export const Quantidade = styled.div`
    width: 95px;
    background-color: black;
    color: white;
    font-weight: bold;
    padding: .2rem .4rem;
    margin-right: .3rem;
    border-radius: 20px;
`

export const Valor = styled.div`
    width: 60px;
    background-color: green;
    color: white;
    font-weight: bold;
    padding: .2rem .4rem;
    border-radius: 20px;
`