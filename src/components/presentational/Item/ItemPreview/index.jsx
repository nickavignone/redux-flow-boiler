// @flow
import * as React from 'react';

type Props = {
  title: string,
  clickHandler: Function,
  id: number
};


class ItemPreview extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      title,
      clickHandler,
      id
    } = this.props;

    return (
      <div onClick={() => clickHandler(id)}>
        {title}
      </div>
    );
  }
}

export default ItemPreview;
