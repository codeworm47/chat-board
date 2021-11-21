import React from "react";
import _ from "lodash"
import MessageListItem from "../MessageListItem/MessageListItem"

const MessageListPane = (props) => (
    <div style={{minHeight: "500px"}} className="form-control">
        <ul>
            {!_.isEmpty(props.messages) ? props.messages.map((msg, key) => (<MessageListItem key={key}
                                                                                             messageUserName={msg.username}
                                                                                             text={msg.text}
                                                                                             date={msg.data}
                                                                                             userName={props.userName}


            />)) : <h3>There is no message</h3>
            }
        </ul>
    </div>
);
export default MessageListPane;
