import React from "react";
import _ from "lodash"
import MessageListItem from "../MessageListItem/MessageListItem"
import "./MessageListPane.css"
const MessageListPane = (props) => (
    <div className="form-control messages-list">
        <ul>
            {!_.isEmpty(props.messages) ? props.messages.map((msg, key) => (<MessageListItem key={key}
                                                                                             messageUserName={msg.userName}
                                                                                             text={msg.text}
                                                                                             date={msg.data}
                                                                                             userName={props.userName}


            />)) : <h3>There is no message</h3>
            }
        </ul>
    </div>
);
export default MessageListPane;
