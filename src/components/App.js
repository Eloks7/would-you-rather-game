import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route, Switch as Routes  } from 'react-router-dom';
import Questions from './Questions';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading, authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {loading === true
          ? null
          :<div className="container">
            <Nav />
            {(authedUser === null || authedUser === "")
              ? <div>
                  <h2>Sign In</h2>
                  <p>Sign in to enable app features</p>
                </div>
              : <div>
                  <Routes>
                    <Route exact path='/'><Questions /></Route>
                    <Route path='/add'><NewQuestion /></Route>
                    <Route path='/leaderboard'><LeaderBoard /></Route>
                    <Route
                        path='/questions/:id'
                        render={({ match }) => (
                          <QuestionPage id={match.params.id} />
                        )}
                    />
                  </Routes>
                </div>}
          </div>}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    loading: users === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
