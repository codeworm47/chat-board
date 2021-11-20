import { Dispatch } from "react";
import axios from "axios";
import {
  fetchMessagesSuccess,
  postNewMessageSuccess,
} from "./channelActions";

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
      .post("http://localhost:8080/message", { message: message })
      .then((response) => {
        dispatch(postNewMessageSuccess(response.data));
      })
  };
};
