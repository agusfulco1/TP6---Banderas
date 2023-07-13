import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function ModalFulco(props) {
    const [show, setShow] = useState(true);
    const [text, setText] = useState("")
    const handleClose = () => {
      setShow(false);
      props.setOpen(true)
      console.log(text)
      props.setJugador(
        {
          nombre: text,
          puntaje: 0
        }
      )
    }
    const handleChange = (event) => {
      setText(event.target.value)
    }
    
    
  
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
            onChange={handleChange}
            value={text}
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