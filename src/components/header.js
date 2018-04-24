import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
    const {authenticated, authenticate} = this.props;
    console.log(authenticated);
    if(authenticated){
      return <button onClick = {
        () => authenticate(false)
      }>
        Sign Out
      </button>
    }

    return (
        <button onClick = {
          () => authenticate(true)
        }>
          Sign In
        </button>
    )
  }

  render() {
    return (
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              {this.authButton()}
            </li>
          </ul>
        </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticated
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (stateAuth) => dispatch(actions.authenticate(stateAuth))
})

export default connect(mapStateToProps, actions)(Header);