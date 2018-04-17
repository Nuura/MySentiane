import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedUsers = createReducer({}, {
    [types.SET_SEARCHED_USERS](state, action) {
        let newState = {}
        return newState;
    }
});