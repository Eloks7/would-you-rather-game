import React, { Component } from 'react';
import QuestionCard from './QuestionCard';
import { connect } from 'react-redux';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

class Answered extends Component {
    render() {
        const { answeredIds } = this.props;
        console.log(answeredIds)
        return (
            <div className="questions" >
                {answeredIds.map((id) => (
                    <div style={{ display: 'inline-block', marginRight: '32px' }} key={id}><QuestionCard id={id}/></div>
                ))}
            </div>
        )
    }
}

// function mapStateToProps ({ authedUser, users, questions }) {
//     console.log(authedUser)
//     const answered = authedUser !== null
//                         ? users[authedUser].answers
//                         : null;
//     console.log(answered)

//     return {
//         questionsIds: answered === null
//         ? undefined
//         : Object.keys(answered)
//             .sort((a, b) => answered[b].timestamp - answered[a].timestamp)
//     }
// }

export default connect()(Answered);