import "./App.css";
import MessageListPane from "./components/message-list-pane/messageListPane";
import Header from "./components/utility-components/header/header";
import EditorPanel from "./components/editor-panel/editorPanel";
import Row from "./components/utility-components/row/row";
import {useDispatch} from "react-redux";
import {useEffect, Fragment} from "react";
import ContainerDiv from './hoc/ContainerDiv'
import {
    fetchMessages,
    postNewMessage,
} from "./redux/channel/channelActionCreator";

const App = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMessages());
    }, []);
    return (
        <ContainerDiv>
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
                                    {date: "", text: value, username: ""}
                                ))
                        }}>
                    </EditorPanel>
                </div>
            </Row>
        </ContainerDiv>
    );
};
export default App;
