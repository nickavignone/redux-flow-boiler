//@flow

import * as React from 'react';
import styles from './main.scss';

type Props = {

};

//credit to https://codepen.io/WebSonata/pen/bRaONB

class Loader extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {

    return (
      <div className={styles.preloader}>
        <div className={styles.loader} />
      </div>
    );
  }
}

export default Loader;
