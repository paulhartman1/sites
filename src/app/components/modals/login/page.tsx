import { Modal } from "@nextui-org/react";

export default function LoginModal(props: any) {
    return(<Modal
        closeButton
        aria-labelledby="modal-title"
        open={props.open}
        onClose={props.onClose}
      >
        <Modal.Body>
          <h1>Login</h1>
        </Modal.Body>
        </Modal>);
}