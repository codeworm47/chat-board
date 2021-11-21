import * as consts from "./constants";
export function fetchAllMessagesAction(messages) {
  return {
    type: consts.ACTION_FETCH_ALL_MESSAGES,
    payload: messages,
  };
}
export function receiveNewMessageAction(message) {
  return {
    type: consts.ACTION_RECEIVE_NEW_MESSAGE,
    payload: message,
  };
}

export function setUserNameAction(userName) {
  return {
    type: consts.ACTION_SET_USERNAME,
    payload: userName,
  };
}