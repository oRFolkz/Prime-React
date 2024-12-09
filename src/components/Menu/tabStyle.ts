import styled from 'styled-components';

export const MenuItem = styled.div`
    width: 25rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    padding: 0 1rem;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        background-color: #d7d7d7;
    }

    .active {
        display: none;
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
    padding: 1rem 0 0 1rem;

    @media ( width < 420px) {
        font-size: .8rem;
    }
`

export const Description = styled.div`
    padding: 0 0 0 1rem;

    @media ( width < 420px) {
        font-size: .8rem;
    }
`

export const Price = styled.div`
    color: #505050;
    font-size: 1.2rem;
    padding: 0 0 1rem 1rem;

    @media ( width < 420px) {
        font-size: 1rem;
    }
`
