import React, {useState} from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/nav/NavBar'
import SmallHero from '../components/hero_section/SmallHero'
import Info from '../components/info_section/Info'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { data, homeObjOne } from '../data/Data'
import CardsInfo from '../components/cards_section/CardsInfo'
import { Button } from '../components/BtnElems'
import { FaqSection } from '../components/faq_section/FaqElems'
import MyFaq from '../components/faq_section/Faq'
import Faq from 'react-faq-component'
import About from '../components/about_section/About'
import PagesNavBar from '../components/nav/PagesNavBar'
import Form from '../components/form/Form'
import styled from 'styled-components'
import { Heading, Subtitle, TopLine, InfoContainer, InfoWrapper, InfoCard, Img, Text, TextWrapper } from '../components/info_section/InfoElems'
import { Modal } from '../components/modal/Modal';
import { useRef } from 'react'


const Container = styled.div`
  min-height: 800px;
  background: #479e35;
  align-items: center;
  justify-content: center;
  display: flex;
`

export const Simulator = () => {

  const [isOpen, setIsOpen] = useState(false);
  const childRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  const openModal = () => {
      console.log("Teste");
      setShowModal(prev => !prev);
      //document.body.style.overflow = "hidden";
      console.log("A");
  };

  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <div style={{"height": "60px", "background":"#479e35"}}/>
    <InfoContainer id='mission' background={"#479e35"} height={"200px"}>
        <Heading color='#fff'>Simulador 📠📃🧾📊📋</Heading>
        <TextWrapper>
        <Text color='#fff'>O simulador faz isto e aquilo e não sei mais o quê. Fazer disclaimer de tudo o que implica no simulador. Todos os items são de preechimento obrigatório.</Text>
        </TextWrapper>
    </InfoContainer>
    <Container>
      <Form ref={childRef} showResults={openModal}/>
    </Container>
    <Footer />
    <Modal showModal={showModal} setShowModal={setShowModal} /> 
    </> 
  )
}

export default Simulator
