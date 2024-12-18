import styled from 'styled-components';

export const BannerDiv = styled.div`
    background-color: black;
    height: 20rem;
    width: 100%;
    margin-top: 6rem;
    position: relative;
    
    .backgroundImg {
        max-height: 20rem;
        width: 100%;
        object-fit: cover; 
        opacity: 0.6;
    }

    img {
        width: 100%;
        height: 100%;
    }
`

export const BannerTxt = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        border: 5px solid #fff;
        max-width: 110px;
        max-height: 110px;

        @media (width < 480px ) {
            margin-top: 1rem;
        }
    }

    h1 {
        color: white;
        font-weight: bold;
        margin:  0 0 .6rem 0;
    }

    .open {
        color: green;
    }

    .closed {
        color: red;
    }
`

export const OpenClosedTxt = styled.div` 
    padding: .4rem 0rem;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: white;
    border-radius: .5rem;
    transition: all .4s ease;

    &:hover {
        cursor: pointer;
    }
`

export const Time = styled.div`
    color: white;
    margin-top: .8rem;
    font-size: 1.1rem;
    font-weight: bold;
    white-space: nowrap;
    transition: all .4s ease;

    
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    i {
        color: white;
        font-size: 1.4rem;
        margin-right: .5rem;
    }

    span {
        font-weight: normal;
    }
`