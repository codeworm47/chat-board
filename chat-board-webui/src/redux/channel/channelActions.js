import * as channelTypes from "./channelTypes";

export function fetchMessagesSuccess(messages) {
  return {
    type: channelTypes.FETCH_MESSAGES_SUCCESS,
    payload: messages,
  };
}

export function postNewMessageSuccess(channels) {
  return {
    type: channelTypes.POST_NEW_MESSAGE,
    payload: channels,
  };
}

export function showUserNameModalAction() {
  return {
    type: channelTypes.SHOW_USERNAME_MODAL,
    payload: true,
  };
}

export function hideUserNameModalAction() {
  return {
    type: channelTypes.SHOW_USERNAME_MODAL,
    payload: false,
  };
}

export function setUserNameAction(userName) {
  return {
    type: channelTypes.SET_USERNAME,
    payload: userName,
  };
}