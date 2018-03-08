// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ItemFull } from 'components';
import { withRouter } from 'react-router';
import { selectItem } from '../../../actions/itemListActions';
import _ from 'lodash';

type Props = {
  currentItem: {title?: string, desc?: string, id?: number},
  match: {params: { itemId:any }},
  actions: { selectItem: Function }
};


class ItemContainer extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  componentWillMount = () => {
    if(!this.props.currentItem.id || this.props.currentItem.id != this.props.match.params.itemId) {
      this.props.actions.selectItem(this.props.match.params.itemId);
    } 
  }

  componentWillReceiveProps = (nextProps) => {
    if(this.props.currentItem.id != nextProps.match.params.itemId) {
      this.props.actions.selectItem(nextProps.match.params.itemId, true);
    }
  }

  render() {
    const {
      currentItem
    } = this.props;
    return (
      <div>
        {!_.isEmpty(currentItem) && (
          <ItemFull
            title={currentItem.title}
            desc={currentItem.desc}
            id={currentItem.id}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentItem: state.listItemReducer.currentItem,
    itemId: ownProps.match.params.itemId
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
