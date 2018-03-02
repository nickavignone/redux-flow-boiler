// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ItemFull } from 'components';
import { withRouter } from 'react-router';
import { selectItem } from '../../../actions/itemListActions';

type Props = {
  currentItem: {title: string, desc: string, id: number},
  match: {params: { itemId:number }},
  actions: { selectItem: Function },
  loader:bool
};


class ItemContainer extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  componentWillReceiveProps = (nextProps) => {
    if(this.props.currentItem.id != nextProps.match.params.itemId) {
      this.props.actions.selectItem(nextProps.match.params.itemId, true);
    }
  }

  render() {
    const {
      currentItem,
      loader
    } = this.props;

    return (
      <div>d ff
      {loader}
        <ItemFull
          title={currentItem.title}
          desc={currentItem.desc}
          id={currentItem.id}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentItem: state.listItemReducer.currentItem,
    itemId: ownProps.match.params.itemId,
    loader: state.listItemReducer.loader
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({selectItem}, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer));
