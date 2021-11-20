import {Dispatch} from "react";
import axios from "axios";
import {
    fetchMessagesAction,
    postNewMessageAction,
    setUserNameAction,
} from "./actions";

export const fetchMessages = () => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/messages")
            .then((response) => {
                dispatch(fetchMessagesAction(response.data));
            })
    };
};

export const postNewMessage = (message) => {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/message", {message: message})
            .then((response) => {
                dispatch(postNewMessageAction(response.data));
            })
    };
};

export const setUserName = (userName) => {
    return (dispatch) => dispatch(setUserNameAction(userName));
};