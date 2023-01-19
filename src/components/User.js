import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        const { authorName, answeredLength, questionsLength, totalScore, rank } = this.props;
        let position = '';
        switch (rank) {
            case 1:
                position = '1st';
                break;
            case 2:
                position = '2nd';
                break;
            case 3:
                position = '3rd';
                break;
            default:
                position = "";
        }
        return (
            <div className="user" style={{ display: 'inline', margin: 'auto' }}>
                <Card style={{ width: '24rem', margin: '24px 0', display: 'inline-block'}}>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 700, marginBottom: '20px' }}>{authorName} ({position})</Card.Title>
                        <Card.Text style={{ fontWeight: 400, textDecoration: 'none' }}>
                            Questions Answered: {answeredLength}
                        </Card.Text>
                        <Card.Text style={{ fontWeight: 400, textDecoration: 'none' }}>
                            Questions Created: {questionsLength}
                        </Card.Text>
                        <Card.Text style={{ fontWeight: 500, textDecoration: 'none' }}>
                            <strong>Total Score: {totalScore}</strong>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps ({  users }, { id }) {
    const authorName = users[id].name;
    const answeredLength = Object.keys(users[id].answers).length;
    const questionsLength = users[id].questions.length;
    const totalScore = questionsLength + answeredLength;

    return {
        authorName,
        answeredLength,
        questionsLength,
        totalScore
    }
}

export default connect(mapStateToProps)(User);