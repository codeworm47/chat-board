import React from "react";
import "./MessageListItem.css"

const messageListItem = (props) => (
    <li className={(props.userName === props.messageUserName ? "my-message" : null)}>
        <h6> {props.messageUserName}</h6>
        <h5>{props.text}</h5>
        <small>{props.date}</small>
    </li>)

export default messageListItem;