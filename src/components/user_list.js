import React, { Component } from 'react';
import * as actions  from '../actions';
import { connect } from 'react-redux';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
        <div className="card card-block">
          <h4 className="card-title">
            {user.name}
          </h4>
          <p className="card-text">
            Dummy Company
          </p>
          <a href="" className="btn btn-primary">
            Email
          </a>
        </div>
    );
  }

  render() {
    return (
        <div>
          {this.props.users.map(this.renderUser)}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, actions)(UserList);
