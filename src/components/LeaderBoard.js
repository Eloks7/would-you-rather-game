import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import User from './User';

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                <Card className='user' style={{ width: '26rem'}}>
                    {this.props.orderedUserIds.map((userId) => (
                        <User key={userId} id={userId} />
                    ))}
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const userIds = Object.keys(users);
    const orderedUserIds = userIds.sort((a, b) => (
        ((users[b].questions.length) + (Object.keys(users[b].answers).length))
        -
        ((users[a].questions.length) + (Object.keys(users[a].answers).length))
    ))

    return {
        orderedUserIds
    }

}

export default connect(mapStateToProps)(LeaderBoard);