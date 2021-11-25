import React from "react";
import "./MessageListItem.css"

const messageListItem = (props) => {
    const parseDate = (d) => {
        let date = new Date(d);
        return `${date.toDateString()} ${date.getHours()}:${date.getMinutes()}`;
    }
    return (
        <li className={"chat-item " + (props.userName === props.messageUserName ? "my-message" : "")}>
            <h6 className={"name"}>
                <b className={"name-placeholder"}> {props.userName !== props.messageUserName ? props.messageUserName : "You"} </b> said
            </h6>
            <h4>{props.text}</h4>
            <h6 className={"date"}>{parseDate(props.date)}</h6>
        </li>)
}

export default messageListItem;