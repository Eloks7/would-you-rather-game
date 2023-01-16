import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class User extends Component {
    render() {
        const { authorName, answeredLength, questionsLength, totalScore } = this.props;
        return (
            <div className="user" style={{ display: 'inline', margin: 'auto' }}>
                <Card style={{ width: '24rem', margin: '24px 0', display: 'inline-block'}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 700, marginBottom: '32px' }}>{authorName}</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted" style={{fontSize: '14px'}}>author {authorName}</Card.Subtitle> */}
                        <Card.Text style={{ fontWeight: 400, textDecoration: 'none' }}>
                            Questions Answered: {answeredLength}
                        </Card.Text>
                        <Card.Text style={{ fontWeight: 400, textDecoration: 'none' }}>
                            Questions Created: {questionsLength}
                        </Card.Text>
                        <Card.Text style={{ fontWeight: 500, textDecoration: 'none' }}>
                            <strong>Total Score: {totalScore}</strong>
                        </Card.Text>
                        {/* <Link to={`/questions/${id}`}><Button variant="primary">View Question</Button></Link> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps ({  users }, { id }) {
    // const authorId = questions[id].author;
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