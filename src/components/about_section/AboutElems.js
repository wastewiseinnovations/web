import styled from "styled-components";

export const InfoContainer = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 5000px;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    max-width: 1200px;
    margin-bottom: 40px;

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
    max-width: 1200px;
    flex-direction: column;
    align-items: center;
    display: flex;
`

export const Text = styled.p`
    color: #000;
    font-size: 1rem;
    text-align: center;
`

export const Heading = styled.h1`
    font-size: 2.8rem;
    

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const Subtitle = styled.h2`
    font-size: 1rem;
    margin-bottom: 35px;
`

export const ImgWrapper = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-left: 20px;
`

export const Img = styled.img`
    height: 200px;
    width: 200px;
`
 

