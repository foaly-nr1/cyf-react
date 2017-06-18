import React from 'react'

export const Footer = () => (
  <div className="section-container">
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
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="scroll-to-top">
            <a href="#top"><i className="fa fa-chevron-up"></i></a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="credits">
          <div className="col-sm-12">
            <div className="our-vendor">
              &copy; All rights reserved&nbsp;|&nbsp;Photos by
              <strong>
                <a href="http://www.alicerowsome.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Alice Rowsome
                </a>
              </strong>
              &nbsp;|&nbsp;
              Supported with <img src="img/ico/hearts.svg" alt="LOVE"/>by
              <strong>
                <a href="http://www.hackyourfuture.net"
                  target="_blank"
                  rel="noopener noreferrer">
                  HackYourFuture
                </a>
              </strong>
            </div>
            <div className="vendor-license">
              Icons made by
              <a href="http://www.flaticon.com/authors/flat-icons"
                title="Flat Icons"
                target="_blank"
                rel="noopener noreferrer">
                Flat Icons</a> from
                <a href="http://www.flaticon.com"
                  title="Flaticon"
                  target="_blank"
                  rel="noopener noreferrer">
                  www.flaticon.com
                </a> is licensed by
                <a href="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                  target="_blank"
                  rel="noopener noreferrer">
                  CC 3.0 BY
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
)