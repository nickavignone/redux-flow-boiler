import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {

    } = this.props;
    console.log('here');

    return (
      <div>
        test
      </div>
    );
  }
}


function mapStateToProps() {
  return {
    /*loader: state.globalReducer.loader,
    qualtrics: state.globalReducer.qualtrics,
    genericError: state.globalReducer.genericError,
    genericErrorMsg: state.globalReducer.genericErrorMsg*/
  };
}

function mapDispatchToProps() {
  return {
    /*actions: bindActionCreators({toggleError}, dispatch)*/
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
