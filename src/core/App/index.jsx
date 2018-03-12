// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Loader } from 'components';

type Props = {
  children?: React.Node,
  loader: boolean
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

/**
 * Connect redux global state to this components props.
 * @param {object} state contains the redux global state.
 * @returns {object} the specified fields pulled from the global state.
 */
function mapStateToProps(state) {
  return {
    loader: state.globalReducer.loader
  };
}

/**
 * Connect redux global dispatch to this components props.
 * @returns {object} empty placeholder for returning actions.
 */
function mapDispatchToProps() {
  return {
    /*actions: bindActionCreators({toggleError}, dispatch)*/
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
