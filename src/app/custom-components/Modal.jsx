import { Button, Modal } from "@themesberg/react-bootstrap";
import React from "react";

export function Modals(props) {
  return (
    <React.Fragment>
      <Modal
        as={Modal.Dialog}
        dialogClassName="90w"
        size="lg"
        fullscreen="lg-down"
        show={props.show}
        onHide={props.onClose}
      >
        <Modal.Header>
          <Modal.Title className="h6">{props.title}</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={props.onClose} />
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ props.steps === 1 ?  props.onClose :()=>{props.previousStep(1)}}> {props.steps === 1 ? "Close" : "Back"} </Button>
          <Button variant="link" className="text-gray ms-auto" onClick={()=>{props.nextStep(1)}} >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
