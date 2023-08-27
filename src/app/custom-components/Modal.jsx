import { Button, Modal } from "@themesberg/react-bootstrap";
import React from "react";

export function Modals({show,onClose,title,children,button1,button2}) {
  return (
    <React.Fragment>
      <Modal
        as={Modal.Dialog}
        dialogClassName="90w"
        size="lg"
        fullscreen="lg-down"
        show={show}
        onHide={onClose}
      >
        <Modal.Header>
          <Modal.Title className="h6">{title}</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={onClose} />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
       {button1?   <Button variant="secondary"> </Button> : <></>}
        {button2?  <Button variant="link" onClick={onClose} className="text-gray ms-auto"> 
            Okay
          </Button>:<></>}
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
