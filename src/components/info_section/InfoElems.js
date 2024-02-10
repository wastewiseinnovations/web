import styled from "styled-components";

export const InfoContainer = styled.div`
    background: ${props => (props.color)};
    display: flex;
    height: ${props => (props.height)};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 250px;
    }

    @media screen and (max-width: 480px) {
        height: 300px;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    max-width: 1000px;
    margin: 0 auto;

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

    @media screen and (max-width: 768px) {
        width: 750px;
    }

    @media screen and (max-width: 480px) {
        width: 460px;
    }
`

export const Text = styled.p`
    color: ${props => (props.color)};
    font-size: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const Heading = styled.h1`
    font-size: 2.8rem;
    margin-bottom: 10px;
    color: ${props => (props.color)};
    
    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const Subtitle = styled.h2`
    font-size: 1rem;
    margin-bottom: 35px;
`

export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`
 

