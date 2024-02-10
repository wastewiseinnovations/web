import React, {useState} from 'react'
import {data1} from '../../data/Data'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'
import { FaqContainer, FaqSection, FaqWrapper, FaqDropdown, Heading } from './FaqElems'
import Faq from 'react-faq-component'


const MyFaq = () => {

    return (
        <FaqSection>
            <Heading>Perguntas Frequentes 🔍</Heading>
            <FaqWrapper>
                 <Faq data = {data1} styles={data1.styles}/>
            </FaqWrapper>
            <div style={{"height": "30px"}}/>
        </FaqSection>
    )

    /*const[clicked, setClicked] = useState(false)

    const toogle = index => {
        if(clicked===index) {
            return setClicked(null)
        }
        setClicked(index)
    }

  return (
    <IconContext.Provider value={{color: '#00FFB9', size: '25px'}}>
        <FaqSection>
            <FaqContainer>
                {Data.map((item, index) => {
                    return (
                        <>
                        <FaqWrapper onClick={() => toogle(index)} key={index}>
                            <h1>{item.question}</h1>
                            <span>{clicked===index ? <FiMinus/> : <FiPlus/>}</span>
                        </FaqWrapper>
                        {clicked === index ? (
                            <FaqDropdown>
                                <p>{item.answer}</p>
                            </FaqDropdown>
                        ) : null}
                        </>
                    );
                })}
            </FaqContainer>
        </FaqSection>
    </IconContext.Provider>
  ) */

}

export default MyFaq