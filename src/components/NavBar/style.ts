import styled from 'styled-components';

export const NavBarDiv = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    background-image: linear-gradient(to right, #212121 0, #505050 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const WppIcon = styled.div`
    padding-left: 1.5rem;

    i {
        color: #25d366;
        font-size: 2rem;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.3);
            cursor: pointer;
        }
    
        @media ( width < 720px ) {
            transform: scale(1.2);
        }
    }
`

export const TextDiv = styled.div`
    color: white;
    text-align: center;
    font-size: 1.1rem;

    p {
        margin: 0.5rem 0;
    }

    p:nth-child(1) {
        background-color: white;
        color: black;
        border-radius: 1rem;
        padding: 0.2rem 1rem;

        @media (width < 480px ) {
            font-size: 1rem;
            padding: 0.2rem .5rem;
        }
    }

    p:nth-child(2) {
        font-weight: bold;
        
        @media (width < 480px ) {
            font-size: 1rem;
            padding: 0rem .5rem;
        }
        @media (width < 335px ) {
            font-size: .9rem;
        }
    }
`

export const CartIcon = styled.div`
    padding-right: 1.5rem;

    span {
        font-size: .8rem;
        color: white;
    }

    i {
        color: #25d366;
        font-size: 1.5rem;
        transition: transform 0.3s ease;

        &:hover{
            transform: scale(1.3);
            cursor: pointer;
        }

        @media ( width < 720px ) {
            transform: scale(1.2);
        }
    }
`
