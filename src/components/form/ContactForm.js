import React, {useState} from 'react'
import { Btn, FieldSet, FormWrapper, Input, TextArea, Error, FormContainer, Heading } from './FormElems'
import { Link, useNavigate} from 'react-router-dom';
import { Modal } from '../modal/Modal';

const initialState = {
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
}

const Form = () => {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const data = {name: 'John', email: 'email@email', subject: 'test', message:'testing info sent to another page'};

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
        navigate("/simulator/results", {
            state: {
                name: state.nome*100/3+45,
                email: state.email,
                subject: state.assunto,
                message: state.mensagem
            }
           });
    }

    const handleInput = e => {
        const input = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({...prev, [input]:value}));
    }

  return (
    <>
            <FormContainer>
                <legend>Tipo de Cliente</legend>
                    <label>
                        <input type='radio' value='opção 1' name='options' checked={state.options==='opção 1'} onChange={handleInput}/>
                        Opção 1
                    </label>
                    <label>
                        <input type='radio' value='opção 2' name='options' checked={state.options==='opção 2'} onChange={handleInput}/>
                        Opção 2
                    </label>
                <label htmlFor='email'>Email</label>
                <Input type='email' name='email' value={state.email} onChange={handleInput}/>
                <label htmlFor='name'>Nome</label>
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
}

export default Form