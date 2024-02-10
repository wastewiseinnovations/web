import styled from "styled-components";
import { Link } from 'react-router-dom'

export const InfoContainer = styled.div`
    background: #fafafa;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`



export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1''col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Text = styled.p`
    color: #000;
    font-size: 1rem;
    text-align: center;
`

export const Heading = styled.h1`
    font-size: 2.8rem;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const Subtitle = styled.p`
    font-size: 1rem;
    margin-bottom: 35px;
    max-width: 500px;
    text-align: justify;
`

export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
`

export const TopLine = styled.p`
    color: #479e35;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    
    &:hover {
        color: #327026;
        font-weight: 700;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0 0 0;
`

export const Button = styled(Link)`
    background: #87d278;
    width: 300px;
    white-space: nowrap;
    padding: 12px 30px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        background: #479e35;
        color: #fff;
    }
`

export const SmallText = styled.p`
    font-size: 0.7rem;
    padding-bottom: 30px;
    justify-content: center;
    display: flex;
    color: #363636;
`
 

