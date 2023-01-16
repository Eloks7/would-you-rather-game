import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionAnswered from './QuestionAnswered';
import QuestionUnanswered from './QuestionUnanswered';

class QuestionsPage extends Component {
    render() {
        const { answered, id } = this.props;
        return (
            <div>
                {/* <h3>Would you rather ...</h3> */}
                {answered
                    ? <QuestionAnswered id={id}/>
                    : <QuestionUnanswered id={id}/>
                }
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
    
    // const question = questions.id;
    const userAnswers = users[authedUser].answers;

    const answered = userAnswers.hasOwnProperty(id)
                        ? true
                        : false;
    return {
        answered
    }
}

export default connect(mapStateToProps)(QuestionsPage);