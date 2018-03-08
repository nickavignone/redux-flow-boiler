// @flow
import * as React from 'react';
import styles from './main.scss';

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
      <div>
        <span className={styles.item} onClick={() => clickHandler(id)}>{title}</span>
      </div>
    );
  }
}

export default ItemPreview;
