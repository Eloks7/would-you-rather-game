export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';


export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion (formattedQuestion) {
    return {
        type: ADD_QUESTION,
        formattedQuestion,
    }
}

export function saveAnswer ( authedUser, qid, answer ) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer

    }
}