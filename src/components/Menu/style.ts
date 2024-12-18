import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: #e2e2e2;
    position: relative;
`

export const OpacityBackground = styled.div`

    &.showBackground{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgb(0,0,0,0.5);
    }

`
export const ScrollDiv = styled.div`
    position: sticky;
    top: 6rem;
    left: 0;
    height: 0px;
`

export const ScrollTags = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: 12rem;
    height: 100vh;
    border-radius: 0 0 1rem 0;
    background-color: white;
    padding-left: .5rem;
    padding-top: .5rem;
    transition: all .5s ease;

    p {
        font-size: 1.2rem;
        font-weight: bold;
        color: #505050;
        padding: .4rem .5rem;
        cursor: pointer;

        @media ( width < 720px ) {
            font-size: 1rem;
            margin: 0 .5rem 0 0;
        }
    }

    .active {
        border-radius: 0.5rem;
        background-color: #505050;
        color: white;
    }

    @media ( width < 720px ) {
        &.hidden {
            left: -20rem;
        }
    }
`

export const ScrollMobile = styled.div`
    @media ( width < 720px) {
        position: absolute;
        top: 1rem;
        left: 1rem;
        z-index: 50;
        transition: all .5s ease;      

        i {
            border-radius: 10px;  
            padding: .5rem;
            background-color: #505050;
            font-size: 1.5rem;
            color: white;
        }

        &.hidden {
            left: -20rem;

            i {
                padding: 0;
            }
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
    align-content: flex-start;
    flex-wrap: wrap;
    max-width: 54rem;

    @media ( width < 1230px) {
        width: 100%;
    }
`