import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuestionCard extends Component {
    render() {
        const { authorName, firstOption, id } = this.props;
        return (
            <div style={{ display: 'inline' }}>
                <Card style={{ width: '24rem', marginBottom: '32px', display: 'inline-block'}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 500 }}>Would you rather</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted" style={{fontSize: '14px'}}>author {authorName}</Card.Subtitle>
                        <Card.Text style={{ fontWeight: 500, textDecoration: 'none' }}>
                            {firstOption} <br/> OR <br/>...
                        </Card.Text>
                        <Link to={`/questions/${id}`}><Button variant="primary">View Question</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users, questions}, { id }) {
    const authorId = questions[id].author;
    const authorName = users[authorId].name;

    const firstOption = questions[id].optionOne.text;

    return {
        authorName,
        firstOption
    }
}

export default connect(mapStateToProps)(QuestionCard);