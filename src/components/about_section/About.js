import React from 'react'
import icon from '../../media/world.jpg'
import { Heading, Subtitle, TopLine, InfoContainer, InfoWrapper, InfoCard, Img, Text, TextWrapper, ImgWrapper } from '../about_section/AboutElems'
import image from '../../media/world.jpg'

const About = () => {
  return (
    <InfoContainer id='test'>
        <InfoWrapper>
          <TextWrapper>
          <Heading>Sobre Nós 📖</Heading>
          <Text>Este é um teste para perceber como um texto sobre o que pretendemos fazer irá aparacer no ecrã. Se fica interessante ou não, vou tentar escrever o mauir texto possível ahahahahahahh, irá passar agr para outra linga.ffjdsoifusdfopdfodigogsdçgfdoiçgjodfogjfgpjzpdofghosdghofdflkdgkllkhgfdhklskjgsdfghslkshl ifihfio foogdsho fdsfp fdio dsfojdgpoap</Text>
          <Text>Teste de Linha</Text>
          <Text>Teste de Linha</Text>
          </TextWrapper>
          <ImgWrapper>
            <Img src={image} />
          </ImgWrapper>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default About