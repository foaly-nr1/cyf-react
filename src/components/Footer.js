import React from 'react'

export const Footer = () => (
  <div className="section-container">

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
              Supported with <img src="/img/ico/hearts.svg" alt="LOVE"/>by
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