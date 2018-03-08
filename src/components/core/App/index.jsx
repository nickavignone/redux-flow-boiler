// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Loader } from 'components';

type Props = {
  children?: React.Node,
  loader: Boolean
};
type State = {
};

class App extends React.Component<Props, State> {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const {
      children,
      loader
    } = this.props;

    return (
      <div>
        {loader ? (
          <Loader />
        ) : (
          <div>
            {children}
          </div>
        )}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    loader: state.globalReducer.loader
  };
}

function mapDispatchToProps() {
  return {
    /*actions: bindActionCreators({toggleError}, dispatch)*/
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
