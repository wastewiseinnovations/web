import React from 'react'
import icon from '../../media/world.jpg'
import { Heading, Subtitle, TopLine, InfoContainer, InfoWrapper, InfoCard, Img, Text, TextWrapper } from '../info_section/InfoElems'

const Info = () => {
  return (
    <InfoContainer id='mission' background={'#fff'}>
        <Heading>A Nossa Missão 🌱</Heading>
        <TextWrapper>
        <Text>A construção é o setor que produz mais resíduos em Portugal e, por isso, pretendemos trazer uma maior sustentabilidade 
          ao utilizar esses mesmos resíduos na produção de novos materiais de construção, dando-lhes os devido valor. 
          Comprometemo-nos em manter esse o nosso foco: construir um futuro melhor.<br />
          Veja o nosso vídeo de apresentação <a href='https://www.youtube.com/watch?v=csCUpDwEAWk'  target="_blank" rel="noopener noreferrer">aqui.</a>
        </Text>
        </TextWrapper>
    </InfoContainer>
  )
}

export default Info