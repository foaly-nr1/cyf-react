// @flow
import React from 'react';

type Props = {
  avatar: string,
  name: string,
  role: string,
};

const ProfileSnippet = ({ avatar, name, role }: Props) => (
  <div>
    <div>
      <img src={avatar} alt={`Avatar for Code Your Future volunteer ${name}`} />
    </div>
    <div>
      <p>{name}</p>
      <p>{role}</p>
    </div>
  </div>
);

export default ProfileSnippet;
