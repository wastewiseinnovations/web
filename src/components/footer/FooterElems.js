import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #363636;
`

export const FooterWrapper = styled.div`
    padding: 0 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820 px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160 px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%
    }
`

export const FooterTitle = styled(Link)`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

export const  SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`
export const SocialMediaWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 5px;
    width: 240 px;
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`