import React from 'react'
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink} from './SideBarElems'

const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="/" onClick={toggle}>Início</SideBarLink>
                <SideBarLink to="/simulator" onClick={toggle}>Simulador</SideBarLink>
                <SideBarLink to="/help" onClick={toggle}>Ajuda</SideBarLink>
                <SideBarLink to="/about" onClick={toggle}>Sobre Nós</SideBarLink>
            </SideBarMenu>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar