// @flow
import React from 'react';
import styled from 'react-emotion';
import DisplayPicture from './DisplayPicture';

const Container = styled('div')`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export default ({ users }: { users: string[] }) => (
  <Container>
    {users.map(user => <DisplayPicture key={user} userId={user} />)}
  </Container>
);
