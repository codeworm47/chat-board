import React from "react";
import "./MessageListItem.css"

const messageListItem = (props) => (
    <li className={"chat-item "+ (props.userName === props.messageUserName ? "my-message" : "")}>
        <h6 className={"name"}> <b> {props.userName !== props.messageUserName ? props.messageUserName : "You"} </b> said</h6>
        <h3>{props.text}</h3>
        <h6 className={"date"}>{props.date}</h6>
    </li>)

export default messageListItem;