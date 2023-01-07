import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const ModalDeleteQuiz = (props) => {
  const { show, setShow, dataDelete } = props;
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete The User ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this quiz. id ={" "}
          <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              //   handleSubmitDeleteUser();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteQuiz;
