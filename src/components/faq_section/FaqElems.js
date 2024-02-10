import styled from "styled-components";

export const FaqSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 0 20px;
    background: #fff;
`

export const FaqContainer = styled.div`
    position: absolute;
    top: 30%;
`

export const FaqWrapper = styled.div`
    background: #fff;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    cursor: pointer;

    h1 {
        padding: 2rem;
        font-size: 2rem;
    }

    span {
        margin-right: 1.5rem;
    }
`

export const FaqDropdown = styled.div`
    background: #fff;
    color: #00ffb9;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #00ffb9;
    border-top: 1px solid #00ffb9;

    p {
        font-size: 2rem;
    }
`

export const Heading = styled.h1`
    font-size: 2.8rem;
    margin-bottom: 30px;
    

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`