import React, { Component } from 'react';
import { connect } from 'react-redux';

const container = (ComposedComponent) => {

  class Authentication extends Component {
    componentWillMount(){
      const {authenticated} = this.props;
       if(!authenticated)
         this.context.router.push('/');
    }

    componentWillUpdate(nextProps){
      if(!nextProps.authenticated){
        this.context.router.push('/');
      }
    }

    render() {
      return (
          <ComposedComponent {...this.props} />
      );
    }
  }

  //wtf how the f this loc get the router object
  //for this authenticate class
  Authentication.contextTypes = {
    router: React.PropTypes.object
  };


  const mapStateToProps = (state) => ({
    authenticated: state.authenticated,
  });

  return connect(mapStateToProps)(Authentication);
};

export default container;