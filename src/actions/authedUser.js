export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function receiveUser (id = "") {
    return {
        type: SET_AUTHED_USER,
        id
    }
}