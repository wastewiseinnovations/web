import React, {forwardRef, useState} from 'react'
import { Btn, FieldSet, FormWrapper, Input, TextArea, Error, FormContainer, Heading } from './FormElems'
import { Link, useNavigate} from 'react-router-dom';
import { Modal } from '../modal/Modal';
import {Button} from '../info_section/Info2Elems'
import { useImperativeHandle } from 'react';

const initialState = {
    nome: '',
    assunto: '',
    mensagem: '',
}

const Form = forwardRef(({showResults}, ref) => {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const data = {name: 'John', email: 'email@email', subject: 'test', message:'testing info sent to another page'};
    const [showModal, setShowModal] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        console.log(state);
        
        for(let key in state) {
            if(state[key]==='') {
                setError(`Preencha o campo ${key}!`)
                return
            }
        }
        setError('');
        /*navigate("/simulator/results", {
            state: {
                name: state.nome*100/3+45,
                email: state.email,
                subject: state.assunto,
                message: state.mensagem
            }
           });*/
        showResults();
    }

    useImperativeHandle(ref, () => ({
        callParentFunction: handleSubmit,
    }));

    const handleInput = e => {
        const input = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({...prev, [input]:value}));
    }

  return (
    <>
            <FormContainer>
                <FieldSet>
                    <legend>Tipo de Cliente</legend>
                    <label>
                        <input type='radio' value='private' name='options' checked={state.options==='private'} onChange={handleInput}/>
                        Privado
                    </label>
                    <label>
                        <input type='radio' value='business' name='options' checked={state.options==='business'} onChange={handleInput}/>
                        Empresarial
                    </label>
                </FieldSet>
                <label htmlFor='rcd'>Nome</label>
                <Input type='number' name='nome' value={state.nome} onChange={handleInput}/>
                <label htmlFor='name'>Assunto</label>
                <Input type='text' name='assunto' maxLength='100' value={state.assunto} onChange={handleInput}/>
                <label htmlFor='message'>Mensagem</label>
                <TextArea name='mensagem' maxLength='500' value={state.mensagem} onChange={handleInput}/>
                {error && (
                    <Error><p>{error}</p></Error>
                )}
                <Btn onClick={handleSubmit}>ENVIAR</Btn>
            </FormContainer>
    </>
  )
});

export default Form