import * as actionTypes from "./constants";
import {initialState} from "./initialStates";

const ChatBoardReducer = (
    state = initialState, action
) => {
    switch (action.type) {
        case actionTypes.ACTION_FETCH_ALL_MESSAGES:
            return {
                ...state,
                data: action.payload
            };
        case actionTypes.ACTION_SET_USERNAME:
            return {
                ...state,
                userName: action.payload
            };

        case actionTypes.ACTION_RECEIVE_NEW_MESSAGE:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        default:
            return initialState;
    }
};

export default ChatBoardReducer;
