import React, {useState} from 'react'
import styled from 'styled-components'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/nav/NavBar'
import { Heading, Subtitle, TopLine, InfoContainer, InfoWrapper, InfoCard, Text, TextWrapper } from '../components/info_section/InfoElems'
import { FaqWrapper } from '../components/faq_section/FaqElems'
import Footer from '../components/footer/Footer'
import Faq from 'react-faq-component'
import {data2} from '../data/Data'
import icon from '../media/city.svg'

const Container = styled.div`
  background: #fafafa;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 50px;
`
const Img = styled.img`
    height: 200px;
    margin-bottom: 30px;
`

const HelpPage = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen)
    };

  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <div style={{"height": "60px", "background":"#fafafa"}}/>
    <InfoContainer id='help' color={"#fafafa"} height={"150px"}>
        <Heading>Ajuda 🔍</Heading>
        <div style={{"height": "30px"}}/>
    </InfoContainer>
    <Container>
    <FaqWrapper>
        <Faq data = {data2} styles={data2.styles}/>
        <div style={{"height": "30px"}}/>
     </FaqWrapper>
    </Container>
    <div style={{"display":"flex", "background":"#fafafa", "align-items":"center", "justify-content":"center"}}>
      <Img src={icon} />
    </div>
    <Footer />
    </> 
  )
}

export default HelpPage