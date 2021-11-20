import * as channelTypes from "./constants";

export function fetchMessagesAction(messages) {
  return {
    type: channelTypes.ACTION_FETCH_MESSAGES_SUCCESS,
    payload: messages,
  };
}

export function postNewMessageAction(message) {
  return {
    type: channelTypes.ACTION_POST_NEW_MESSAGE,
    payload: message,
  };
}

export function setUserNameAction(userName) {
  return {
    type: channelTypes.ACTION_SET_USERNAME,
    payload: userName,
  };
}