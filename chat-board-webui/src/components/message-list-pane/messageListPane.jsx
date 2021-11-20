import "./MessageItem.css"
import React from "react";
import { useSelector } from "react-redux";

const MessageListPane = (props) => {
  const state = useSelector((state) => state);
  return (
    <div style={{ height: "500px" }} className="form-control">
      <ul>
        {(state.data)?.map((msg, key) => (
          <li key={key} className={state.userName === msg.username ? "my-message" : null}>
            <h5>{msg.text}</h5>
            <small>{msg.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MessageListPane;
