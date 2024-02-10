import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {Nav, NavBarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavLogo} from './NavBarElems';
import logo from '../../media/logo.png'
import letters from '../../media/logo_letters.png'

const NavBar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.width<=768) {
      if(window.scrollY>=350) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    } else if(window.width<=480) {
      if(window.scrollY>=250) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    } else {
      if(window.scrollY>=500) {
      setScrollNav(true)
      } else {
      setScrollNav(false)
      }
  }
}

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
    <Nav scrollNav={scrollNav}>
      <NavBarContainer>
        <NavLogo to='/' scrollNav={scrollNav}>
          <img src={letters} style={{"height":"70px", "paddingRight":"10px", "paddingTop":"50px"}}/>
        </NavLogo>
        <NavLogo to='/' scrollNav={!scrollNav}>
          <img src={logo} style={{"height":"50px", "paddingRight":"10px"}}/>
        </NavLogo>
        <MobileIcon onClick={toggle} scrollNav={scrollNav}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/" scrollNav={scrollNav}>Início</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/simulator" scrollNav={scrollNav}>Simulador</NavLinks> 
          </NavItem>
          <NavItem>
            <NavLinks to="/help" scrollNav={scrollNav}>Ajuda</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about"scrollNav={scrollNav}>Sobre Nós</NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
    </>
  );
};

export default NavBar;
