// @flow
import React from 'react';
import { css } from 'emotion';

type Props = {
  avatar: string,
  name: string,
  cyfRole: string,
};

const container = css({
  outline: '1px solid red',
});

const avatarStyle = css({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  verticleAlign: 'middle',
});

const textContainer = css({
  display: 'inline-block',
});

const ProfileSnippet = ({ avatar, name, cyfRole }: Props) => (
  <div className={container}>
    {/* <div> */}
    <img
      className={avatarStyle}
      src={avatar}
      alt={`Avatar for Code Your Future volunteer ${name}`}
    />
    {/* </div> */}
    <div className={textContainer}>
      <p>{name}</p>
      <p>{cyfRole}</p>
    </div>
  </div>
);

export default ProfileSnippet;
