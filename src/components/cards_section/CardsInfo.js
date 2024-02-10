import React, { useState } from 'react'
import icon from '../../media/world.jpg'
import icon1 from '../../media/container.svg'
import icon2 from '../../media/factory.svg'
import icon3 from '../../media/construction.svg'
import { Heading, Subtitle, TopLine, InfoContainer, InfoWrapper, InfoCard, Img } from './CardsInfoElems'
import {Button} from '../BtnElems'
import { hover } from '@testing-library/user-event/dist/hover'
import Modal from '../modal/Modal'

const CardsInfo = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

  return (
    <InfoContainer id='test'>
        <InfoWrapper>
            <InfoCard>
                <Subtitle>RECEBEMOS</Subtitle>
                <Img src={icon1} />
                <TopLine>Através dos nossos parceiros, obtemos a matéria-prima: resíduos de construção e demolição selecionados e tratados.</TopLine>
            </InfoCard>
            <InfoCard>
                <Subtitle>TRANSFORMAMOS</Subtitle>
                <Img src={icon2} />
                <TopLine>Damos uma nova vida aos resíduos</TopLine>
            </InfoCard>
            <InfoCard>
                <Subtitle>RECOLHEMOS</Subtitle>
                <Img src={icon3} />
                <TopLine>Nós recolhemos o teu entulho de construções e renovações. Tudo pra ter um texto grande</TopLine>
            </InfoCard>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default CardsInfo