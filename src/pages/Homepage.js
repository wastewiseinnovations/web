import React, {useState} from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/nav/NavBar'
import Hero from '../components/hero_section/Hero'
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
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Info2 from '../components/info_section/Info2'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <Hero />
    <Info />
    <CardsInfo />
    <Info2 imgStart={false}/>
    <MyFaq />
    <Footer />

    </>   
  )
}

export default HomePage