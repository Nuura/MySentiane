import * as types from './types'
import Api from '../lib/api'

export function fetchUsers(email, password) {
    return (dispatch, getState) => {
        console.log(getState());
        const params = `filter={"login":"etna@santiane.fr","password":"codecampetna", "auto_refresh":1}`
        return Api.get(`/login?${params}`).then(resp => {
            console.log(resp);
            dispatch(setSearhedUsers( { users: resp } ))
        }).catch( (ex) => {
            console.log(ex)
        })
    }
}

export function setSearhedUsers( { users } ) {
    return {
        type: types.SET_SEARCHED_USERS,
        users
    }
}

export function addUser() {
    return {
        type: types.ADD_USER,
    }
} 