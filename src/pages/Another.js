import React, {useState} from 'react'
import { Btn } from '../components/form/FormElems';
import { Modal } from '../components/modal/Modal';

export const Another = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
  return (
    <>
    <Btn onClick={openModal}>ENVIAR</Btn>
    <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}
