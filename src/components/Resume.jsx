import React, { Component } from 'react';
import '../stylesheets/Resume.css';


class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h1> Previous Experience </h1>
        <div className="resume-bottom">
          <ul className="resume-job-history">
            <li className="resume-job-item">
              <h1 className="resume-job-title"> Assistant Manager </h1>
              <h2 className="resume-job-co"> Mae A Ri Inc.</h2>
              <ul className="resume-job-description">
                <li> descrip1 </li>
                <li> descrip2 </li>
                <li> descrip3 </li>
              </ul>
            </li>
            <li className="resume-job-item">
              <h1 className="resume-job-title"> Medical Volunteer </h1>
              <h2 className="resume-job-co"> Mae A Ri Inc.</h2>
              <ul className="resume-job-description">
                <li> descrip1 </li>
                <li> descrip2 </li>
                <li> descrip3 </li>
              </ul>
            </li>
            <li className="resume-job-item">
              <h1 className="resume-job-title"> Research Intern </h1>
              <h2 className="resume-job-co"> Mae A Ri Inc.</h2>
              <ul className="resume-job-description">
                <li> descrip1 </li>
                <li> descrip2 </li>
                <li> descrip3 </li>
              </ul>
            </li>
          </ul>
          <section className="resume-right">
            <h1 className="resume-right-title"> Interested? </h1>
            <h1 className="resume-right-body"> Click to see a PDF version of my RESUME </h1>
            <button className="resume-button"> AWESOME RESUME </button>
          </section>
        </div>
      </div>
    );
  }
}

export default Resume;
