import { RECEIVE_USERS, ADD_CREATED_QUESTION, SAVE_USER_ANSWER } from "../actions/users";

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_CREATED_QUESTION:
            const { id, authedUser } = action;
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([id])
                }
            }
        case SAVE_USER_ANSWER:
            const { answer, qid } = action;

            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default:
            return state;
    }
}