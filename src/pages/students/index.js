import React from 'react';
import { Link } from 'react-router-dom';
import TopSection from '../../components/top-section';
import students from '../../assets/images/students-group.jpg';

const Students = () => {
  const studentText = (
    <div>
      <p>
        Welcome to our community. Here, you will learn all the technical skills
        needed to become a professional developer
      </p>
      <p>
        During the course you will learn the whole web development stack,
        including HTML/CSS, JavaScript, React and Node technologies. We’ll
        complement the training with workshops on modern software methodologies
        and job interview practices.
      </p>

      <p>
        Our 8-month web development program has proven a success. For our next
        London course, we are partnering with Capgemini – a global consultancy
        organisation – to bring you the most comprehensive course possible.
        Exceptional graduates from the course will have an opportunity to join
        Capgemini.
      </p>

      <div className="section-bottom-link">
        <a className="big-link-3 btn scroll" href="#requirements">
          Find out more
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <TopSection
        title="The beginning of your programming career"
        content={studentText}
      />
      <div>
        <img src={students} alt="code-your-future-students" />
      </div>

      <div id="info" className="block-2-container section-container">
        <div className="container">
          <div className="row">
            <div id="requirements" className="col-sm-6 col-md-6 block-2-box">
              <h3>Requirements</h3>
              <ul className="text-left">
                <li>Live in the UK</li>
                <li>Speak good English</li>
                <li>Ready to commit to over 30 hours of learning per week</li>
                <li>Availability for face to face sessions on weekends</li>
              </ul>
              <div className="apply-teaser">
                <div className="row">
                  <div className="col-sm-5 col-md-4">
                    <div className="teaser-description">
                      <strong>Interested?</strong>
                    </div>
                    <div className="col-sm-2">
                      <Link
                        className="big-link-3 btn block-2-box-btn"
                        to="/apply/student"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 block-2-box">
              <h3 className="text-left">Start Learning Now</h3>
              <p>
                As part of the selection process, applicants are asked to learn
                the basics of coding. No previous experience is required!
              </p>

              <h4>
                <strong>From a computer/laptop:</strong>
              </h4>
              <ul className="text-left">
                <li>
                  Join&nbsp;
                  <Link
                    to="https://www.khanacademy.org/computing/computer-programming/html-css"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Khan Academy
                  </Link>
                  &nbsp;and complete Intro to HTML/CSS: Making webpages
                </li>
                <li>
                  Complete the Codecademy &nbsp;
                  <Link
                    to="https://www.codecademy.com/learn/learn-html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML
                  </Link>{' '}
                  and{' '}
                  <Link
                    to="https://www.codecademy.com/learn/learn-css"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CSS
                  </Link>{' '}
                  courses
                </li>
              </ul>

              <h4>
                <strong>From a smartphone:</strong>
              </h4>
              <ul className="text-left">
                <li>
                  Join&nbsp;
                  <Link
                    to="https://sololearn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SoloLearn app
                  </Link>
                  &nbsp;and complete the modules on HTML and CSS Fundamentals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
