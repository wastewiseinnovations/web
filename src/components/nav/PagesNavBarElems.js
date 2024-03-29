import styled from "styled-components"
import {Link as LinkRoute} from "react-router-dom"
import {Link as LinkScroll} from "react-scroll"
import {FaBars} from "react-icons/fa"

export const Nav  = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#ffffffd9' : 'transparent')};
    height: 60px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;
    -webkit-backdrop-filter: ${({scrollNav}) => (scrollNav ? 'blur(8px)' : 'none')};
    backdrop-filter: ${({scrollNav}) => (scrollNav ? 'blur(8px)' : 'none')};
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease; 
    }
`

export const NavLogo = styled(LinkRoute)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: ${({scrollNav}) => (!scrollNav ? 'flex' : 'none')};;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const Wrapper = styled.div`
    flex-direction: row;
    
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkRoute)`
    color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        font-weight:600;
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color:  ${({scrollNav}) => (scrollNav ? '#00000080' : '#ffffff80')};
    }
`



export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8 rem;
        cursor: pointer;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};;
    }
`