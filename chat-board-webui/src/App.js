import "./App.css";
import MessageListPane from "./components/MessageListPane/MessageListPane";
import Header from "./hoc/header/Header";
import EditorPanel from "./components/EditorPanel/editorPanel";
import UserNameModal from "./components/UserNameModal/UserNameModal"
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Container, Row} from 'react-bootstrap';
import {
    fetchMessages,
    postNewMessage,
    setUserName
} from "./store/actionCreator";

const App = (props) => {
    const dispatch = useDispatch();
    const [showUserNameModal, setShowUserNameModal] = useState(true);
    const state = useSelector((state) => state);

    const handleClose = () => {
        setShowUserNameModal(false);
        dispatch(fetchMessages());
    }

    const handleChange = (e) => {
        dispatch(setUserName(e.target.value))
    }

    return (
        <Container>
            <UserNameModal
                showUserNameModal={showUserNameModal}
                userName={state.userName}
                handleChange={handleChange}
                handleClose={handleClose}
            />

            <Row>
                <Header title="Chat board"/>
            </Row>
            <Row>
                <div className="col-9 bg-light p-2 border border-primary">
                    <MessageListPane messages={state.data} userName={state.userName}/>
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
