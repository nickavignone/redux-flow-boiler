// @flow

import * as React from 'react';
import { connect } from 'react-redux';

type Props = {
  children?: React.Node
};
type State = {
};

class App extends React.Component<Props, State> {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const {
      children
    } = this.props;

    return (
      <div>
        {children}
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
