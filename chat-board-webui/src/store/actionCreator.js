import axios from "axios";
import {
    fetchAllMessagesAction,
    setUserNameAction,
    receiveNewMessageAction
} from "./actions";

export const fetchMessages = () => {
    return (dispatch) => {
        axios
            .get("http://localhost:8888/messages")
            .then((response) => {
                dispatch(fetchAllMessagesAction(response.data));
            })
    };
};

export const setUserName = (userName) => {
    return (dispatch) => dispatch(setUserNameAction(userName));
};


export const receiveNewMessage = (message) => {
    return (dispatch) => {
        dispatch(receiveNewMessageAction(message));
    };
};