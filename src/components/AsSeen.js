import React from 'react'

export const AsSeen = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-6">
          <h2>As seen in</h2>
          <div className="divider-1"><span></span></div>
          <br />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">
          <a href="http://www.wired.co.uk/article/codeyourfuture-refugee-coding-school"
            target="_blank"
            rel="noopener noreferrer">
            <div className="icon--large">
              <img src="img/media-logos/wired.svg" alt="Wired"/>
            </div>
          </a>
      </div>
      <div className="col-sm-3">
          <a href="http://www.unhcr.org/news/stories/2017/1/586e420c7/volunteers-train-refugees-to-crack-into-london-tech-industry.html"
            target="_blank"
            rel="noopener noreferrer">
            <div className="icon--large">
              <img src="img/media-logos/unhcr.png" alt="UNHCR"/>
            </div>
          </a>
      </div>
      <div className="col-sm-3">
          <a href="https://www.newsdeeply.com/refugees/articles/2016/10/19/welcome-to-londons-refugee-coding-school"
            target="_blank"
            rel="noopener noreferrer">
            <div className="icon--large">
              <img src="img/media-logos/refugees-deeply.jpeg" alt="Refugees Deeply" />
            </div>
          </a>
      </div>
      <div className="col-sm-3">
          <a href="http://www.bbc.co.uk/programmes/p04yzrrg"
            target="_blank"
            rel="noopener noreferrer">
            <div className="icon--large">
              <img src="img/media-logos/BBC.svg" alt="BBC" />
            </div>
          </a>
      </div>
    </div>
  </div>
)