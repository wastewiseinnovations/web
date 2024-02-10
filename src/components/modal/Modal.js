import React, {useRef, useEffect, useCallback} from 'react'
import { Background, CloseModalBtn, ModalWrapper } from './ModalElems'
import {useSpring, animated} from 'react-spring'

export const Modal = ({showModal, setShowModal}) => {
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false);
            //document.body.style.overflow = "unset";
        }
    }

  return (
    <>
    {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>

                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    <h1>Teste</h1>
                </div>
                <CloseModalBtn onClick={() => {setShowModal(prev => !prev); /*document.body.style.overflow = "unset";*/}}/>
            </ModalWrapper>
            </animated.div>
        </Background>
    ) : null}
    </>
  )
}