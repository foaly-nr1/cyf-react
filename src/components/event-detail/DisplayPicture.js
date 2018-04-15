import * as React from 'react';
import styled, { css } from 'react-emotion';
import Spinner from 'react-spinkit';
import type { User } from './types';
import { fetchUser } from '../../lib/events';

const PICTURE_SIZE = 60;

const Picture = styled('img')`
  max-height: ${PICTURE_SIZE}px;
  max-width: ${PICTURE_SIZE}px;
  border-radius: ${PICTURE_SIZE / 2}px;
  flex: 1;
  margin: 5px;
`;

const styles = css({
  margin: '0 auto',
  height: PICTURE_SIZE,
  width: PICTURE_SIZE,
  marginTop: '100px',
});

type Props = { userId: string };
export default class DisplayPicture extends React.PureComponent<
  Props,
  { ...User },
> {
  constructor(props) {
    super(props);
    this.state = {};
    fetchUser(props.userId).then(response => {
      this.setState({ ...response.data });
    });
  }

  render() {
    if (this.state.name) {
      const { name, picture } = this.state;
      return <Picture src={picture} alt={name} title={name} />;
    }
    return <Spinner name="circle" className={styles} />;
  }
}
