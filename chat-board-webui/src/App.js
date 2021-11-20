import "./App.css";
import MessageListPane from "./components/message-list-pane/messageListPane";
import Header from "./components/utility-components/header/header";
import EditorPanel from "./components/editor-panel/editorPanel";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Modal, Container, Row} from 'react-bootstrap';
import {
    fetchMessages,
    postNewMessage,
    showUserNameModal,
    hideUserNameModal, setUserName
} from "./store/actionCreator";

const App = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showUserNameModal());

    }, []);
    //const [modalState, setModalState] = useState(true);
    const state = useSelector((state) => state);

    // const handleShow = () => {
    //     //setModalState(true);
    // }

    const handleClose = () => {
        dispatch(fetchMessages());

        dispatch(hideUserNameModal());
    }

    const handleChange = (e) => {
        dispatch(setUserName(e.target.value))
    }

    return (
        <Container>
            <Modal show={state.showUserNameModel}>
                <Modal.Body>
                    <Row>
                        <p>Please choose a user name.</p>
                    </Row>
                    <Row>
                        <input type="text" value={state.userName} onChange={handleChange}/>
                    </Row>
                    <Row>
                        <button type="button" className="btn btn-primary"
                                onClick={handleClose}
                                disabled={state.userName === ""}>
                            Continue </button>
                    </Row>
                </Modal.Body>
            </Modal>
            <Row>
                <Header title="Chat board"/>
            </Row>
            <Row>
                <div className="col-9 bg-light p-2 border border-primary">
                    <MessageListPane/>
                    <EditorPanel
                        handleSend={(value) => {
                            dispatch(
                                postNewMessage(
                                    {date: "", text: value, username: state.userName}
                                ))
                        }}>
                    </EditorPanel>
                </div>
            </Row>
        </Container>
    );
};
export default App;
