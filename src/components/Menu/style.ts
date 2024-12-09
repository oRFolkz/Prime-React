import styled from 'styled-components';

export const MainContainer = styled.div`
    position: relative;
    background-color: #e2e2e2;
`

export const ScrollDiv = styled.div`
    width: 20rem;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    padding-left: 1rem;
    transition: all 1s ease;

    p {
        font-size: 1.2rem;
        font-weight: bold;
        color: #505050;
        margin: 1rem 1rem 0 0;
        padding: .5rem;
        cursor: pointer;
        transition: all .5s ease;

        @media ( width < 720px ) {
            font-size: 1rem;
            margin: 0;
        }
    }

    .active {
        border-radius: 0.5rem;
        background-color: #505050;
        color: white;
    }

    @media ( width < 720px ) {
        padding-top: .5rem;
        padding-left: .2rem;
        width: 12rem;
        transition: all .5s ease;
    
        &.hidden {
            left: -200px !important;
        }

        &.show {
            left: 0px !important;
        }
    }
`

export const ScrollMobile = styled.div`
    display: none;

    @media ( width < 720px) {
        display: block;
        position: absolute;
        top: 1.5rem;
        background-color:  #505050;
        color: white;
        padding: .5rem;
        border-radius: 10px;   
        transition: all .5s ease;

        i {
            font-size: 1.5rem;
        }
            
        &.hidden {
            left: -300px !important;
        }

        &.show {
            left: .5rem !important;
        }
    }
`
export const SelectedMenuBG = styled.div`
    margin: 0;
    padding: 1rem 0;
    display: flex;
    justify-content: center;

    @media ( width < 1570px) {
        justify-content: start;
        padding-left: 22rem;
    }

    @media ( width < 1230px) {
        padding-right: 1rem;
    }

    @media ( width < 720px) {
        padding-left: 2rem;
    }
`

export const SelectedMenu = styled.div`
    background-color: white;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    max-width: 54rem;

    @media ( width < 1230px) {
        width: 100%;
    }
`