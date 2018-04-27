import React, { Component } from 'react';
import * as actions  from '../actions';
import { connect } from 'react-redux';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
        <div className="card card-block col-md-3">
          <h4 className="card-title">
            {user.name}
          </h4>
          <p className="card-text">
            {user.company.name}
          </p>
          <a href={user.website} className="btn btn-primary">
            Website
          </a>
        </div>
    );
  }

  render() {
    return (
        <div className='user-list'>
          {this.props.users.map(this.renderUser)}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, actions)(UserList);
