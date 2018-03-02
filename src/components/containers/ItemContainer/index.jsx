// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ItemFull } from 'components';

type Props = {
  currentItem: {title: string, desc: string, id: number}
};


class ItemContainer extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      currentItem
    } = this.props;

    return (
      <div>
        <ItemFull
          title={currentItem.title}
          desc={currentItem.desc}
          id={currentItem.id}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentItem: state.listItemReducer.currentItem,
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
)(ItemContainer);
