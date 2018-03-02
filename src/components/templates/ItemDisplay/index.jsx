// @flow
import * as React from 'react';
import { ItemContainer, ItemListContainer } from 'components';

type Props = {
};


class ItemDisplay extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {

    return (
      <div>
        <ItemContainer />
        <ItemListContainer />
      </div>
    );
  }
}

export default ItemDisplay;
