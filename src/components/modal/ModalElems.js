import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 15;
`

export const ModalWrapper = styled.div`
    width: 900px;
    max-height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 10px;
    position: relative;
    z-index: 15;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    
    @media screen and (max-width: 468px) {
        width: 75px;
    }
`

export const CloseModalBtn = styled(FaTimes)`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    padding: 0;
    z-index: 10;
`