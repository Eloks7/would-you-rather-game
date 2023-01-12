import { RECEIVE_TWEETS, ADD_QUESTION, SAVE_ANSWER } from "../actions/questions";

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case SAVE_ANSWER:
            const { authedUser, qid, answer } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer.qid]: {
                        ...state[qid][answer.qid],
                        votes: state[action.qid][answer.qid].votes.concat([authedUser])
                    }
                    
                }
            }
        
        case ADD_QUESTION:
            const { question } = action;

            return {
                ...state,
                [question.id]: question,
                
            }
        default:
            return state;
    }
}
