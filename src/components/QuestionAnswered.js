import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { ProgressBar } from 'react-bootstrap';

class QuestionAnswered extends Component {
    render() {
        const { authorName,
                firstOption,
                secondOption,
                firstOptionVotes,
                secondOptionVotes,
                totalVotes,
                userAnswer } = this.props;
        
        const  optionOnePercent = Math.floor(firstOptionVotes > 0 ? (firstOptionVotes/totalVotes) * 100 : 0);
        const  optionTwoPercent = Math.floor((secondOptionVotes/totalVotes) * 100);

        return (
            <div>
                <Card style={{ width: '24rem', marginBottom: '32px', display: 'inline-block'}}>
                    <Card.Header>Asked by {authorName}</Card.Header>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 500, marginBottom: '16px' }}>Results</Card.Title>
                        <Card.Text style={{ fontWeight: 400, textDecoration: 'none' }}>
                        {`Would you rather ${firstOption}`} <strong>{ userAnswer === 'optionOne' ? '(Your pick)' : '' }</strong>
                        </Card.Text>
                        <ProgressBar
                            now={optionOnePercent}
                            label={`${optionOnePercent}% (${firstOptionVotes} / ${totalVotes})`}
                            variant='info'
                        />
                        <Card.Text style={{ marginTop: '20px' }}><strong>OR</strong></Card.Text>
                        <Card.Text style={{ fontWeight: 400, textDecoration: 'none' }}>
                            {`Would you rather ${secondOption}`} <strong>{ userAnswer === 'optionTwo' ? '(Your pick)' : '' }</strong>
                        </Card.Text>
                        <ProgressBar
                            now={optionTwoPercent}
                            label={`${optionTwoPercent}% (${secondOptionVotes} / ${totalVotes})`}
                            variant='info'
                        />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions}, { id }) {
    const authorId = questions[id].author;
    const authorName = users[authorId].name;
    const userAnswer = users[authedUser].answers[id]

    const firstOption = questions[id].optionOne.text;
    const secondOption = questions[id].optionTwo.text;

    const firstOptionVotes = questions[id].optionOne.votes.length;
    const secondOptionVotes = questions[id].optionTwo.votes.length;
    const totalVotes = firstOptionVotes + secondOptionVotes;

    return {
        authorName,
        firstOption,
        secondOption,
        firstOptionVotes,
        secondOptionVotes,
        totalVotes,
        userAnswer,
    }
}

export default connect(mapStateToProps)(QuestionAnswered);