import {Modal, Row} from "react-bootstrap";

const userNameModal = (props) => (<Modal show={props.showUserNameModal}>
    <Modal.Body>
        <Row>
            <p>Please choose a user name.</p>
        </Row>
        <Row>
            <input type="text" value={props.userName} onChange={props.handleChange}/>
        </Row>
        <Row>
            <button type="button" className="btn btn-primary"
                    onClick={props.handleClose}
                    disabled={props.userName === ""}>
                Continue </button>
        </Row>
    </Modal.Body>
</Modal>)

export default userNameModal;