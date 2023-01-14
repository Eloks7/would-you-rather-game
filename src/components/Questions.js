import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Route, Switch as Routes  } from 'react-router-dom';
import Answered from './Answered';
import Unanswered from './Unanswered';

class Questions extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <NavLink to='/unanswered' exact activeclassname='active'>
                        Unanswered Questions
                    </NavLink>
                    <NavLink to='/answered' exact activeclassname='active'>
                        Answered Questions
                    </NavLink>
                </div>
                <Routes>
                    <Route path='/unanswered' exact element={<Unanswered />}/>
                    <Route path='/answered' element={<Answered />}/>
                </Routes>
                
            </Fragment>
        )
    }
}

export default connect()(Questions);