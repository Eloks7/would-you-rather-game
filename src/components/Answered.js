import React, { Component } from 'react';
import QuestionCard from './QuestionCard';
import { connect } from 'react-redux';

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

export default connect()(Answered);