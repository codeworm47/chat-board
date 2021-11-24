import React from "react";
import "./MessageListItem.css"

const messageListItem = (props) => (
    <li className={"chat-item "+ (props.userName === props.messageUserName ? "my-message" : "")}>
        <h6> {props.userName !== props.messageUserName ? props.messageUserName : "You"} said</h6>
        <h3>{props.text}</h3>
        <small>{props.date}</small>
    </li>)

export default messageListItem;