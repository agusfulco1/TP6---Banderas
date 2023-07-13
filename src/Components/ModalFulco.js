import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function ModalFulco() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
  
    return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Escriba su nombre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Nombre</InputGroup.Text>
            <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            />
        </InputGroup>
       </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
    );
}
export default ModalFulco;