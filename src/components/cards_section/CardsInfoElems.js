import styled from "styled-components";

export const InfoContainer = styled.div`
    background: #fff;
    display: flex;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 5000px;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    max-width: 1100px;
    background: #fff;
    padding: 0 0 30px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const InfoCard = styled.div`
    display: flex;
    background: #e7eae7;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 380px;
    margin: 0 10px 0px 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }

    @media screen and (max-width: 768px) {
        height: 350px;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 480px) {
        font-size: 320px;
    }
`



export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1''col2'` : `'col1 col1' 'col2 col2'`)}
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

export const TopLine = styled.p`
    color: #000;
    font-size: 1rem;
    text-align: center;
    padding: 10px;

    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const Heading = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const Subtitle = styled.h1`
    font-size: 1.5rem;
    color: #183613;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`

export const ImgWrapper = styled.div`
    max-width: 555px;
    background: #fff;
    height: 100%;
`

export const Img = styled.img`
    height: 150px;
    width: 250px;
`
 

