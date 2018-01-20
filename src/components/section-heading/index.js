// @flow
import React from 'react';
import styled from 'react-emotion';
import type { ChildrenArray, Element } from 'react';

type Props = {
  children: ChildrenArray<Element<'h1' | 'h2' | 'h3'>>,
};

const StyledHeading = styled('div')`
  & h3 {
    text-align: left;
  }
`;
const SectionHeading = ({ children }: Props) => (
  <StyledHeading>{children}</StyledHeading>
);

export default SectionHeading;
