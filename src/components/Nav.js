import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { receiveUser } from '../actions/authedUser';

class Nav extends Component {

  handleUserChange = (value) => {
    this.props.dispatch(receiveUser(value))
  }

  render() {
    const { authedUser, user } = this.props;

    return (
      <div className='nav-container'>
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/' exact activeclassname='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/new' activeclassname='active'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' activeclassname='active'>
                Leaderboard
              </NavLink>
            </li>
          </ul>
          <div className='profile-info'>
            {authedUser !== "" && <span>Hi <strong>{user}</strong></span>}
            <select onChange={(e) => (this.handleUserChange(e.target.value))}>
              <option value="" >Sign in</option>
              <option value="sarahedo">Sarah Edo</option>
              <option value="tylermcginnis">Tyler McGinnis</option>
              <option value="johndoe">John Doe</option>
              <option value="">Log Out</option>
            </select>
          </div>
      </nav>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = authedUser ? users[authedUser].name : "";
  return{
    authedUser,
    user,
  }
}

export default connect(mapStateToProps)(Nav);