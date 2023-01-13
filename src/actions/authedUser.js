export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function receiveQuestions (id = null) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}