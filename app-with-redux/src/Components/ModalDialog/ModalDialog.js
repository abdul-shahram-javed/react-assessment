import React from "react";
import { Modal } from "react-bootstrap";

function ModalDialog(props) {

  const {toggleModelDialog} = props

  const toggleModal = () => {
    toggleModelDialog();
  };

  return (
    <>
      <Modal show={true}>
        <Modal.Header closeButton onClick={toggleModal}>
          <Modal.Title>Movie Ballot</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Vote is successfully submitted, Thank you!</Modal.Body>
      </Modal>
    </>
  );
}
export default ModalDialog;
