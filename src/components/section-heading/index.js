// @flow
import React from 'react';
import styled from 'react-emotion';
import type { ChildrenArray, Element } from 'react';

type Props = {
  children: ChildrenArray<Element<'h1' | 'h2' | 'h3'>>,
};

const StyledHeading = styled('div')({
  '*': {
    margin: '0' /* Temp fix to deal with legacy.css ruining everything */,
  },
  h3: {
    textAlign: 'left',
    fontSize: '32px',
    lineHeight: '36px',
    paddingBottom: '24px',
  },
});

const SectionHeading = ({ children }: Props) => (
  <StyledHeading>{children}</StyledHeading>
);

export default SectionHeading;
