import styled from 'styled-components';

export const MenuItem = styled.div`
    width: 25rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;
    transition: all .2s ease;

    .active {
        display: none;
    }

    @media ( width > 720px) {
         &:hover {
            background-color: #d7d7d7;
    }

    @media ( width < 1230px) {
        width: 45%;
    }

    @media ( width < 1060px) {
        width: 100%;
    }
`

export const ImgDiv = styled.div`
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: .5rem;
    }   
`

export const TxtDiv = styled.div`
    @media ( width < 1060px) {
        width: 80%;
    }
`


export const ItemName = styled.div`
    color: #505050;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 0 0 1rem;

    @media ( width < 420px) {
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

export const Price = styled.p`
    margin: .8rem auto;
    width: 70%;
    padding: .2rem 0;
    border-radius: 10px;
    text-align: center;
    background-color: green;
    color: white;
    font-size: 1rem;

    @media ( width < 425px) {
        font-size: .9rem;
        width: 60%;
        padding: .5rem 0;
    }
`

export const AcrecimosDiv = styled.div`
    width: 100%;
    font-weight: bold;
    border-bottom: 2px solid gray;
    height: auto;
    transition: all 1s ease;

    &.hidden {
        display: none;
    }
`

export const AcreTxtDiv = styled.div`
    margin: .5rem auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .4rem;
`

export const AcreTxt = styled.p`
    margin: 0;
`

export const AcreTxtIcon = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;

    .fa-plus {
        color: white;
        background-color: #505050;
        padding: .1rem .2rem .2rem .2rem;
        border-radius: .5rem;
    }
        
    .fa-minus {
        color: white;
        background-color: #505050;
        padding: .1rem .3rem .2rem .3rem;
        border-radius: .5rem;
    }
`