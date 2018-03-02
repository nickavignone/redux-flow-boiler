// @flow
import * as React from 'react';

type Props = {
  title: string,
  desc: string,
  id: number
};


class ItemFull extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      title,
      desc,
      id
    } = this.props;

    return (
      <div>
        <hr />
        <div>{title}</div>
        <div>{desc}</div>
        <div>{id}</div>
      </div>
    );
  }
}

export default ItemFull;
