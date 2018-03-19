import React from 'react';
import { css } from 'react-emotion';
import Spinner from 'react-spinkit';

const styles = css({
  margin: '0 auto',
  marginTop: '100px',
});

export default () => <Spinner name="circle" className={styles} />;
