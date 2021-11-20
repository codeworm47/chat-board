import * as actionTypes from "./channelTypes";
import {initialState} from "../States";

const channelListReducer = (
    state = initialState, action
) => {
    switch (action.type) {
        case actionTypes.FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case actionTypes.POST_NEW_MESSAGE:
            return {
                ...state,
                data: action.payload
            };
        case actionTypes.SHOW_USERNAME_MODAL:
            return {
                ...state,
                showUserNameModel: action.payload
            };
        case actionTypes.SET_USERNAME:
            return {
                ...state,
                userName: action.payload
            };
    }
    return state;
};

export default channelListReducer;
