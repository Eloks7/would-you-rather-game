import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Answered from './Answered';
import Unanswered from './Unanswered';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class Questions extends Component {
    render() {

        const { answeredIds, unansweredIds} = this.props;
        return (
            <Fragment>
                <Tabs
                    defaultActiveKey="unanswered"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    >
                    <Tab eventKey="unanswered" title="Unanswered">
                            <Unanswered unansweredIds={unansweredIds}/>
                    </Tab>
                    <Tab eventKey="answered" title="Answered">
                        <Answered answeredIds={answeredIds}/>
                    </Tab>
                </Tabs>
                
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    // console.log(authedUser)
    const answered = users[authedUser].answers;

    const unansweredIds = Object.keys(questions)
		.filter((id) => !answered.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	const answeredIds = Object.keys(questions)
		.filter((id) => answered.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);


	return {
		answeredIds,
		unansweredIds
	};
}


export default connect(mapStateToProps)(Questions);