import styled from "styled-components"
import {Link as LinkRoute} from "react-router-dom"
import {Link as LinkScroll} from "react-scroll"
import {FaTimes} from "react-icons/fa"

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #ffffffd9;
    display: grid;
    align-items; center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
`

export const SideBarWrapper = styled.div`
    color: #fff;
    justify-content: center;
    align-content: center;
`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 70px);
    text-align: center;
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6. 70px);
    }
`



export const SideBarLink = styled(LinkScroll)`
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        font-weight:600;
        text-decoration: underline;
        text-underline-offset: 7px;
        text-decoration-color: #00000080;
        transition: 0.2s ease-in-out;
    }
`


export const CloseIcon = styled(FaTimes)`
    color: #737373;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem; 
    right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    background: transparent;
`