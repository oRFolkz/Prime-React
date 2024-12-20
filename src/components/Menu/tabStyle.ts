import styled from 'styled-components';

export const MenuItem = styled.div`
    height: 10rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;
    transition: all .2s ease;
    border-bottom: 1px solid black;

    &.active {
    @media ( width < 840px ) {
        display: block
    }
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
        width: 90%;
        margin: .4rem auto;
        padding: 0rem !important;

        img {
            width: 100%;
            height: auto;
        }
    }

    &.hideBorder {
        border-bottom: 1px solid transparent;
    }
`

export const ImgDiv = styled.div`
    width: 35%;

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: .5rem;
    }

    &.lanches {
        width: auto;
    }

    &.active {
        width: 60%;
        @media ( width < 840px ) {
            width: 100%;
        }
    }
`

export const TxtDiv = styled.div`
    width: 65%;

    &.lanches {
        width: auto;
    }

    &.active {
        width: 70%;
        @media ( width < 840px ) {
            width: 100%;
        }
    }
`


export const ItemName = styled.div`
    color: #505050;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 0 0 1rem;

    @media ( width > 420px) {
        font-size: .8rem;
    }
`

export const Description = styled.div`
    padding: .5rem 0 .5rem 1rem;

    @media ( width < 420px) {
        font-size: .8rem;
    }
`

export const Adicionais = styled.p`
    display: inline-block;
    color: white;
    font-size: 1.2rem;
    margin: 0 0 0 1rem;
    padding: .2rem .6rem;
    border-radius: 5px;
    background-color: black;
    font-weight: bold;
        
    .fa-arrow-down {
        margin-left: .3rem;
    }

    &.backGroundColor {
        background-color: green;
    }
    
    @media ( width < 420px) {
        font-size: .8rem;
    }
`

export const PriceDiv = styled.div`
    width: 100%;
    border-bottom: 2px solid gray;
`

export const Price = styled.p`
    margin: .6rem auto;
    width: 80%;
    padding: .5rem 0;
    border-radius: 10px;
    text-align: center;
    background-color: green;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    @media ( width < 425px) {
        font-size: .9rem;
    }
    @media ( width > 840px) {
            width: 60%;
    }
`

export const AcrecimosDiv = styled.div`
    width: 100%;
    height: auto;
    transition: all 1s ease;

    &.hidden {
        display: none;
    }
    
    &.active {
        @media ( width > 840px ) {
            margin: auto;
            width: 70%;
    }
`

export const AcreTxtDiv = styled.div`
    margin: .5rem auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .4rem;
    font-weight: bold;

    span {
        font-size: 0.8rem;
        font-weight: normal;
    }
`

export const AcreTxt = styled.p`
    margin: 0;
`

export const AcreTxtIcon = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .fa-plus {
        color: white;
        background-color: green;
        padding: .5rem .5rem .5rem .5rem;
        border-radius: .5rem;
    }
        
    .fa-minus {
        color: white;
        background-color: red;
        padding: .5rem .5rem .5rem .5rem;
        border-radius: .5rem;
    }
`