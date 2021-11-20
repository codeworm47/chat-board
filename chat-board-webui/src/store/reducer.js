import * as actionTypes from "./constants";
import {initialState} from "./initialStates";

const channelListReducer = (
    state = initialState, action
) => {
    switch (action.type) {
        case actionTypes.ACTION_FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case actionTypes.ACTION_POST_NEW_MESSAGE:
            return {
                ...state,
                data: action.payload
            };
        case actionTypes.ACTION_SHOW_USERNAME_MODAL:
            return {
                ...state,
                showUserNameModel: action.payload
            };
        case actionTypes.ACTION_SET_USERNAME:
            return {
                ...state,
                userName: action.payload
            };
    }
    return state;
};

export default channelListReducer;
