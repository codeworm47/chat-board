import {Modal, Row} from "react-bootstrap";
import "./UserNameModal.css"
const userNameModal = (props) => {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            props.handleClose();
        }
    };
    return (<Modal show={props.showUserNameModal}>
        <Modal.Body>
            <div className="p-1 userName-model">
                <Row>
                    <p>Please choose a user name.</p>
                </Row>
                <Row>
                    <input type="text" onKeyPress={handleKeyPress} value={props.userName} onChange={props.handleChange}/>
                </Row>
                <Row className="mt-2 button-row">
                    <button type="button" className="btn btn-primary w-50 mt-3"
                            onClick={props.handleClose}
                            disabled={props.userName === ""}>
                        Continue </button>
                </Row>
            </div>

        </Modal.Body>
    </Modal>)
}

export default userNameModal;