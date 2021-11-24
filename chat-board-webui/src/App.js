import "./App.css";
import MessageListPane from "./components/MessageListPane/MessageListPane";
import Header from "./hoc/header/Header";
import EditorPanel from "./components/EditorPanel/editorPanel";
import UserNameModal from "./components/UserNameModal/UserNameModal"
import {useDispatch, useSelector} from "react-redux";
import {useState, useContext} from "react";
import {Container, Row} from 'react-bootstrap';
import {WebSocketContext} from './WebSocket'
import {
    fetchMessages,
    setUserName,
} from "./store/actionCreator";

const App = () => {
    const dispatch = useDispatch();
    const [showUserNameModal, setShowUserNameModal] = useState(true);
    const state = useSelector((state) => state);
    const ws = useContext(WebSocketContext);

    const handleClose = () => {
        setShowUserNameModal(false);
        dispatch(fetchMessages());
    }

    const handleChange = (e) => {
        dispatch(setUserName(e.target.value))
    }

    const handleSend = (value) => {
        let chat = {text: value, userName: state.userName}
       // socket.emit('chat', chat);
        //dispatch(postNewMessage(chat))
        console.log("m ", chat)
        ws.sendMessage(chat);
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
                        handleSend={handleSend}>
                    </EditorPanel>
                </div>
            </Row>
        </Container>
    );
};
export default App;
