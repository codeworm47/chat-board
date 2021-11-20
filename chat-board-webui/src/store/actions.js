import * as channelTypes from "./constants";

export function fetchMessagesSuccess(messages) {
  return {
    type: channelTypes.ACTION_FETCH_MESSAGES_SUCCESS,
    payload: messages,
  };
}

export function postNewMessageSuccess(channels) {
  return {
    type: channelTypes.ACTION_POST_NEW_MESSAGE,
    payload: channels,
  };
}

export function showUserNameModalAction() {
  return {
    type: channelTypes.ACTION_SHOW_USERNAME_MODAL,
    payload: true,
  };
}

export function hideUserNameModalAction() {
  return {
    type: channelTypes.ACTION_SHOW_USERNAME_MODAL,
    payload: false,
  };
}

export function setUserNameAction(userName) {
  return {
    type: channelTypes.ACTION_SET_USERNAME,
    payload: userName,
  };
}