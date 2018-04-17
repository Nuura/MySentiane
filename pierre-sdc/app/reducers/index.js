import { combineReducers } from 'redux';
import * as usersReducers from './users';

export default combineReducers(Object.assign(
    usersReducers,
))