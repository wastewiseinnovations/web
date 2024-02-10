import React, {useState} from 'react'
import { Heading, Subtitle, TopLine, InfoContainer, InfoWrapper, InfoCard, Img, Text, TextWrapper, Column1, InfoRow, Column2, ImgWrapper, BtnWrap, Button, SmallText } from '../info_section/Info2Elems'
import { hover } from '@testing-library/user-event/dist/hover'
import image from '../../media/world.jpg'

const Info2 = ({imgStart}) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

  return (
    <InfoContainer id='product'>
        <InfoWrapper>
            <Heading>O Produto 🧱</Heading>
            <InfoRow imgStart={true}>
                <Column1>
                    <TextWrapper>
                        <TopLine>✔ SUSTENTÁVEL</TopLine>
                        <Subtitle>Nas diferentes fases de produção, utilizamos processos de fabrico menos prejudiciais para o ambiente, reduzindo também o uso de matéria-prima virgem.</Subtitle>
                        <TopLine>✔ EFICIÊNCIA ENERGÉTICA</TopLine>
                        <Subtitle>O nosso tijolo retém melhor o calor, comparativamente a um típico tijolo de argila.</Subtitle>
                        <TopLine>✔ REDUÇÃO DA TEMPERATURA DE FABRICO</TopLine>
                        <Subtitle>A temperatura dos fornos utilizados é reduzida em cerca de 900ºC, comparativamente às temperaturas de cura usuais </Subtitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrapper>
                        <Img src={image} />
                    </ImgWrapper>
                </Column2>
            </InfoRow>
            <BtnWrap>
                <Button to="/simulator" onMouseEnter={onHover} onMouseLeave={onHover}>     SIMULAR AGORA*     </Button>  
            </BtnWrap>
            <SmallText>*os custos finais são estimados pelo Simulador</SmallText>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default Info2