import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import { handleSaveAnswer } from '../actions/shared';

class QuestionUnanswered extends Component {

    handleSubmit = (e, id) => {
        
        // e.preventDefault();
        const answer = e.target.choice.value;
        const qid = id;
        e.preventDefault();
       
        this.props.dispatch(handleSaveAnswer({ qid, answer}))
    }

    render() {
        const { authorName, firstOption, secondOption, id } = this.props;
        return (
            <div>
                <div style={{ display: 'inline' }}>
                    <Card style={{ width: '24rem', marginBottom: '32px', display: 'inline-block'}}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Header>{authorName} asks</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontWeight: 500 }}>Would you rather</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" style={{fontSize: '14px'}}>Select a preferred option</Card.Subtitle>

                            <Form onSubmit={(e) => this.handleSubmit(e, id)}>
                                <Form.Check
                                    type='radio'
                                    id='default-radio'
                                    label={firstOption}
                                    value='optionOne'
                                    name='choice'
                                />
                                <Form.Check
                                    type='radio'
                                    id='default-radio'
                                    label={secondOption}
                                    value='optionTwo'
                                    name='choice'
                                />
                                <Button
                                    style={{ marginTop: '16px'}} 
                                    variant="primary"
                                    type='submit'>
                                        Submit Answer
                                </Button>
                            </Form>
                            
                            {/* <Button style={{ marginTop: '16px'}} variant="primary">Submit Answer</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const authorId = questions[id].author;
    const authorName = users[authorId].name;

    const firstOption = questions[id].optionOne.text;
    const secondOption = questions[id].optionTwo.text;

    return {
        authorName,
        firstOption,
        secondOption,
    }
}

export default connect(mapStateToProps)(QuestionUnanswered);