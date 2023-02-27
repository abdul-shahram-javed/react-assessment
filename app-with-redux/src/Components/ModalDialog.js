import React from 'react'
import { Modal, Button } from 'react-bootstrap'
function ModalDialog(props) {

  const toggleModal = () => {
    props.toggleModelDialog()
  }
  
  return (
    <>
      <Modal show={true}>
        <Modal.Header closeButton onClick={toggleModal}>
          <Modal.Title>Movie Ballot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          SUCCESS
        </Modal.Body>
      </Modal>
    </>
  )
}
export default ModalDialog