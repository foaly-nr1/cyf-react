import React from 'react';
import AsSeen from '../components/as-seen';
import Banner from '../components/banner';
import WhatWeTeach from '../components/what-we-teach';
import Video from '../components/video';

export const Home = () => (
  <div className="Home">
    <div className="App-intro">
      <Banner />
    </div>
    <Video />
    <WhatWeTeach />
    <AsSeen />
  </div>
);
