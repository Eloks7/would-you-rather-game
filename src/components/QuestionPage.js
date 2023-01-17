import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionAnswered from './QuestionAnswered';
import QuestionUnanswered from './QuestionUnanswered';

class QuestionsPage extends Component {
    render() {
        const { answered, id, doesNotExist } = this.props;
        return (
            <div>
                {/* <h3>Would you rather ...</h3> */}
                {!doesNotExist
                    ? <div>
                        <h2>Error 404</h2>
                        <p>The question you are looking for does not exist</p>
                    </div>
                    : answered
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

    const doesNotExist = questions.hasOwnProperty(id)
                            ? true
                            : false;
    return {
        answered,
        doesNotExist,
    }
}

export default connect(mapStateToProps)(QuestionsPage);