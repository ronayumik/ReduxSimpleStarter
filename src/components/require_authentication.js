import React, { Component } from 'react';
import {connect} from 'react-redux';

const container = (ComposedComponent) => {
  class Authentication extends Component {
    render() {
      console.log(this.props.authenticated);
      return (
          <ComposedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = (state) => ({
    authenticated: state.authenticated
  });

  return connect(mapStateToProps)(Authentication);
};

export default container;