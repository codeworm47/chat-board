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
