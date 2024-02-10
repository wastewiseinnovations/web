import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    background: #e0993d;
    white-space: nowrap;
    padding: 12px 30px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01BF71;
    }
`