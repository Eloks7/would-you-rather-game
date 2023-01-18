import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/shared';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
      }
      handleChangeOne = (e) => {
        const optionOneText = e.target.value
    
        this.setState(() => ({
          optionOneText,
        }))
      }
      handleChangeTwo = (e) => {
        const optionTwoText = e.target.value
    
        this.setState(() => ({
          optionTwoText,
        }))
      }
      handleSubmit = (e) => {
        e.preventDefault()
    
        const { optionOneText, optionTwoText } = this.state
        const { dispatch, authedUser } = this.props;
        const author = authedUser;
  
        dispatch(handleAddQuestion({optionOneText, optionTwoText, author}));
    
        this.setState(() => ({
          optionOneText: '',
          optionTwoText: '',
          toHome: true,
        }))
        // return <Redirect to='/' />
      }
      render() {
        const { optionOneText, optionTwoText, toHome } = this.state;
        
        if (toHome === true) {
            return <Redirect to='/' />
        }
  
        return (
          <div>
            <h3 style={{ marginLeft: '16px'}}>New Question</h3>
            <Card className="m-3" style={{ width: '40rem', marginBottom: '16px', textAlign: 'left'}}>
							<Card.Body>
								<Form onSubmit={this.handleSubmit}>
									<Form.Group controlId="optionOne">
										<Form.Label>Option 1</Form.Label>
										<Form.Control
											type="text"
											value={optionOneText}
											onChange={this.handleChangeOne}
										/>
									</Form.Group>
									<p style={{ marginTop: '16px'}}> OR </p>
									<Form.Group controlId="optionTwo">
										<Form.Label>Option 2</Form.Label>
										<Form.Control
											type="text"
											value={optionTwoText}
											onChange={this.handleChangeTwo}
										/>
									</Form.Group>
									<Button
                                        style={{marginTop: '32px'}}
										type="submit"
										variant="primary"
										disabled={optionOneText === '' || optionTwoText === ''}
                                    >
										Create Question
									</Button>
								</Form>
							</Card.Body>
						</Card>
          </div>
        )
    }
}

function mapStateToProps ({ authedUser}) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(NewQuestion);