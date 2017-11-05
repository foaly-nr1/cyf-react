import React from 'react';
import { shallow } from 'enzyme';
import TopSection from './';

describe('TopSection', () => {
  it('renders correctly', () => {
    const content = <p>Testing 1 2 3!</p>;
    const title = 'Test title';
    expect(
      shallow(<TopSection title={title} content={content} />)
    ).toMatchSnapshot();
  });
});
