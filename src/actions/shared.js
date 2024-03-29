import { addQuestion, receiveQuestions, saveAnswer } from "./questions";
import { _saveQuestion, _saveQuestionAnswer } from '../_DATA';
import { receiveUsers, addCreatedQuestion, saveUserAnswer } from './users';
import { receiveUser } from "./authedUser";
import { getInitialData } from '../api'
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());

        return getInitialData()
            .then(({ users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(receiveUser());
                dispatch(hideLoading());
            })

    }
}

export function handleAddQuestion (question) {
    return (dispatch) => {
        return _saveQuestion(question)
            .then((formattedQuestion) => {
                dispatch(addCreatedQuestion(formattedQuestion))
                dispatch(addQuestion(formattedQuestion))
            })
    }
}

export function handleSaveAnswer ({ qid, answer}) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        })
            .then(() => {
                dispatch(saveAnswer( authedUser, qid, answer ));
                dispatch(saveUserAnswer( authedUser, qid, answer ));
            })
    }
}