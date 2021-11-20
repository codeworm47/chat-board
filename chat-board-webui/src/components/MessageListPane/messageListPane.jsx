import "./MessageItem.css"
import React from "react";
import _ from "lodash"
import {useSelector} from "react-redux";
import MessageListItem from "../MessageListItem/MessageListItem"

const MessageListPane = (props) => {
    const state = useSelector((state) => state);
    return (
        <div style={{height: "500px"}} className="form-control">
            <ul>
                {!_.isEmpty(state.data) ? state.data.map((msg, key) => (<MessageListItem key={key}
                                                                                         messageUserName={msg.username}
                                                                                         text={msg.text}
                                                                                         date={msg.data}
                                                                                         userName={state.userName}


                />)) : <h3>There is no message</h3>
                }
            </ul>
        </div>
    );
};
export default MessageListPane;
