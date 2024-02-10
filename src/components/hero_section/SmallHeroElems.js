import styled from "styled-components"
import {Link as LinkRoute} from "react-router-dom"
import {Link as LinkScroll} from "react-scroll"
import {FaBars} from "react-icons/fa"

export const HeroContainer = styled.div`
    background: #7dba85;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1000px;
    z-index: 1;
    position: relative;
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: fill;
    object-fit: fill;
    background: #232a34;
`
export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: fill;
    object-fit: fill;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 0px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`

export const Img = styled.img`
    height: 450px;
    width: 450px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const HeroP = styled.p`
    color: #fff;
    font-size: 30px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
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

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
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
        align-items: center;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`