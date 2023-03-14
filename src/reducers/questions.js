import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_ANSWER } from "../actions/questions";
import produce from "immer";

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER:
            const { authedUser, qid, answer } = action;
            // return {
            //     ...state,
            //     [qid]: {
            //         ...state[qid],
            //         [answer]: {
            //             ...state[qid][answer],
            //             votes: state[qid][answer].votes.concat([authedUser])
            //         }
                    
            //     }
            // }
            return produce(state, (draft) => {
                draft[qid][answer].votes.concat([authedUser])
            })
        case ADD_QUESTION:
            const { formattedQuestion } = action;
            const question = formattedQuestion;
            // return {
            //     ...state,
            //     [question.id]: question,
                
            // }
            return produce(state, (draft) => {
                draft[question.id] = question
            })
        default:
            return state;
    }
}
