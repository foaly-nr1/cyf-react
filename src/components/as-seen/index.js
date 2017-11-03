import React from 'react';
import { Link } from 'react-router-dom';

const mediaOutlets = [
  {
    url: 'http://www.wired.co.uk/article/codeyourfuture-refugee-coding-school',
    src: 'img/media-logos/wired.svg',
    alt: 'Wired'
  },
  {
    url:
      'http://www.unhcr.org/news/stories/2017/1/586e420c7/volunteers-train-refugees-to-crack-into-london-tech-industry.html',
    src: 'img/media-logos/unhcr.png',
    alt: 'UNHCR'
  },
  {
    url:
      'https://www.newsdeeply.com/refugees/articles/2016/10/19/welcome-to-londons-refugee-coding-school',
    src: 'img/media-logos/refugees-deeply.jpeg',
    alt: 'Refugees Deeply'
  },
  {
    url: 'http://www.bbc.co.uk/programmes/p04yzrrg',
    src: 'img/media-logos/BBC.svg',
    alt: 'BBC'
  }
];

const Outlet = ({ url, src, alt }) => (
  <div className="col-sm-3">
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <div className="icon--large">
        <img src={src} alt={alt} />
      </div>
    </Link>
  </div>
);

const AsSeen = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-6">
        <h2>As seen in</h2>
        <div className="divider-1">
          <span />
        </div>
        <br />
      </div>
    </div>
    <div className="row">
      {mediaOutlets &&
        mediaOutlets.map(x => (
          <Outlet key={x.src} src={x.src} url={x.url} alt={x.alt} />
        ))}
    </div>
  </div>
);

export default AsSeen;
