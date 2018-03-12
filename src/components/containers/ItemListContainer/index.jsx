// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ItemPreview } from 'components';
import { selectItem } from '../../../actions/itemListActions';

type Props = {
  items: Array<{id:number, title:string}>,
  actions: {selectItem:Function}
};


class ItemListContainer extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  clickItem = (id) => {
    this.props.actions.selectItem(id);
  }

  render() {
    const {
      items
    } = this.props;

    const itemNodes = items.map((item, idx) => 
      <ItemPreview
        key={idx}
        id={item.id}
        title={item.title}
        clickHandler={this.clickItem}
      />
    );

    return (
      <div>
        {itemNodes}
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
    items: state.listItemReducer.items,
  };
}

/**
 * Connect redux global dispatch to this components props.
 * @param {function} dispatch function for triggering redux actions.
 * @returns {object} list of actions that can be dispatched from this component.
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({selectItem}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListContainer);
