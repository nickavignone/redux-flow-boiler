// @flow
import * as React from 'react';
import { ItemListContainer } from 'components';

type Props = {
};


class ListDisplay extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {

    return (
      <div>
        <ItemListContainer />
      </div>
    );
  }
}

export default ListDisplay;
