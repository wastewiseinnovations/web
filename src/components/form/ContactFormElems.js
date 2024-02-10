import styled from "styled-components"; 
import css from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
    background-color: #fff;
`

export const FormContainer = styled.form`
    padding: 30px;
    width: 800px;
    background-color: #fff;
    box-sizing: border-box;
    
`

export const Input = styled.input`
    display: block;
    width: 100%; 
    background-color: #eee;
    height: 30px;
    border: 1px solid #ddd;
    margin: 0 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`

export const Btn = styled.button`
    display: block;
    background-color: #f7797d;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    resize: none;
    background-color: #eee;
    height: 40px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`

export const FieldSet = styled.fieldset`
    border: 1px solid #ddd;
    padding: 10px;
    margin: 20px 0;
    
    legend {
        padding: 0 10px;
    }

    label {
        padding-right: 20px;
    }

    input {
        margin-right: 10px;
    }
`

export const Error = styled.div`
    color: red;
    font-weight: 700;
    margin: 0 0 40px 0; 
`

export const Heading = styled.h2`
    font-weight: 400;
`