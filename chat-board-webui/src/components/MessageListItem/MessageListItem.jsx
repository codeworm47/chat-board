import React from "react";

const messageListItem = (props) => (
    <li key={props.key} className={props.userName === props.messageUserName ? "my-message" : null}>
        <h6> {props.messageUserName}</h6>
        <h5>{props.text}</h5>
        <small>{props.date}</small>
    </li>)

export default messageListItem;