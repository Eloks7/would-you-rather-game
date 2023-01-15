import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

class Unanswered extends Component {
    render() {
        const { unansweredIds } = this.props;
        console.log(unansweredIds)
        return (
            <div className="questions   ">
                {unansweredIds.map((id) => (
                    <div style={{ display: 'inline-block', marginRight: '32px' }} key={id}><QuestionCard id={id}/></div>
                ))}
            </div>
        )
    }
}

export default Unanswered;