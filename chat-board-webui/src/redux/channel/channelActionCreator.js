import {Dispatch} from "react";
import axios from "axios";
import {
    fetchMessagesSuccess,
    postNewMessageSuccess,
    showUserNameModalAction,
    hideUserNameModalAction,
    setUserNameAction,
} from "./channelActions";
import {use} from "express/lib/router";

export const fetchMessages = () => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/messages")
            .then((response) => {
                dispatch(fetchMessagesSuccess(response.data));
            })
    };
};

export const postNewMessage = (message) => {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/message", {message: message})
            .then((response) => {
                dispatch(postNewMessageSuccess(response.data));
            })
    };
};


export const showUserNameModal = () => {
    return (dispatch) => dispatch(showUserNameModalAction());
};

export const hideUserNameModal = () => {
    return (dispatch) => dispatch(hideUserNameModalAction());
};

export const setUserName = (userName) => {
    return (dispatch) => dispatch(setUserNameAction(userName));
};