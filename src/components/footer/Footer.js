import React from 'react'
import {FaFacebook, FaYoutube, FaInstagram} from 'react-icons/fa'
import logo from '../../media/white_logo.png'
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterItems, FooterTitle, FooterLink, SocialMedia, SocialMediaWrapper, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElems'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <SocialMedia>
                <SocialMediaWrapper>
                    <img src={logo} style={{"height":"100px", "paddingRight":"10px"}}/>
                    <WebsiteRights> © {(new Date().getFullYear())} Todos os direitos reservados. </WebsiteRights>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer