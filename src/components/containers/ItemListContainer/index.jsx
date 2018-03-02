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

function mapStateToProps(state) {
  return {
    items: state.listItemReducer.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({selectItem}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListContainer);
