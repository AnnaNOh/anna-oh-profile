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
              <h2 className="resume-job-date"> Jan 2018 - Oct 2018 </h2>
              <h2 className="resume-job-co"> Mae A Ri Inc.</h2>
              <ul className="resume-job-description">
                <li> descrip1 </li>
                <li> descrip2 </li>
                <li> descrip3 </li>
              </ul>
            </li>
            <li className="resume-job-item">
              <h1 className="resume-job-title"> Medical Volunteer </h1>
              <h2 className="resume-job-date"> Jun 2017 - Dec 2017 </h2>
              <h2 className="resume-job-co"> Good Samaritan Health Center </h2>
              <ul className="resume-job-description">
                <li> descrip1 </li>
                <li> descrip2 </li>
                <li> descrip3 </li>
              </ul>
            </li>
            <li className="resume-job-item">
              <h1 className="resume-job-title"> Research Intern </h1>
              <h2 className="resume-job-date"> Jun 2016 - Aug 2016 </h2>
              <h2 className="resume-job-co"> Yerkes National Primate Research Center </h2>
              <ul className="resume-job-description">
                <li> descrip1 </li>
                <li> descrip2 </li>
                <li> descrip3 </li>
              </ul>
            </li>
          </ul>
          <section className="resume-right">
            <h1 className="resume-right-body"> click below to get the pdf version of my resume </h1>
            <button className="resume-button"> RESUME </button>
          </section>
        </div>
      </div>
    );
  }
}

export default Resume;
