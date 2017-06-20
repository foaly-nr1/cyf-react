import React from 'react'
import {
  About
} from '../pages/About'
import { AsSeen } from '../components/AsSeen'
import { Banner } from '../components/Banner'
import { WhatWeTeach } from '../components/WhatWeTeach'


export const Home = () => (
  <div className="Home">
    <div className="App-intro">
      <Banner />
    </div>

    <WhatWeTeach />
    <AsSeen />
  </div>
)

export default Home;


